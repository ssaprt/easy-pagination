import { makeAutoObservable, reaction, runInAction } from "mobx";
import {
    getUrlParameter,
    removeUrlParameter,
    setUrlParameter,
} from "../utils/indexing-url";

import { removeStoragePage, setStoragePage } from "../utils/indexing-storage";

export type PaginationMode = "horizontal" | "vertical";
export type PaginationDirection =
    | "to_left"
    | "to_right"
    | "to_top"
    | "to_bottom";
export type PageIndexingMode = "url" | "storage" | null;

export class PaginationStorage {
    public currentPage: string = "1";
    public itemsPerPage: number = 5;
    public mode: PaginationMode = "horizontal";
    positionTrack: Record<string, string> = {};
    sizeTrack: Record<string, string> = {};
    startAnim: boolean = false;
    positionShadow: PaginationDirection = "to_right";
    differentPageForAnim = 600;
    pendingPage: string | null = null;
    //eslint-disable-next-line
    allItems: any[] = [];
    sortFn: (<T>(items: T[]) => T[]) | null = null;
    itemRefs: Map<string, HTMLButtonElement> = new Map();
    isReordering: boolean = false;
    navigationSize = 0;
    arrowStartWidth = 0;
    arrowEndWidth = 0;
    pageSize = 40;
    progress = 0;
    animationFrame: number | null = null;
    isReplaceReady = false;
    modePageIndexing: PageIndexingMode = null;
    keyPageIndexing: string | null = null;
    public animationBaseDistance = 100;
    public transitionDuration = 1000;
    public minAnimationDuration = 0;
    public maxAnimationDuration = 4500;

    private _previousTotalPages: number = 0;
    private _isConfigured = false;

    constructor() {
        makeAutoObservable(this, {
            itemRefs: false,
            animationFrame: false,
            registerItemRef: false,
            getItemRect: false,
            configurePageIndexing: false,
        });

        reaction(
            () => this.currentPage,
            (currentPage, previousPage) => {
                runInAction(() => {
                    this.positionShadow = this._resolveDirection(
                        Number(previousPage),
                        Number(currentPage),
                    );
                });
            },
        );

        reaction(
            () => this.currentPage,
            (currentPage) => {
                this._persistPage(currentPage);
            },
        );

        reaction(
            () => this.getTotalPages,
            (totalPages) => {
                if (
                    this._previousTotalPages !== 0 &&
                    this._previousTotalPages !== totalPages
                ) {
                    runInAction(() => {
                        if (Number(this.currentPage) > totalPages) {
                            this.currentPage = String(totalPages || 1);
                        }
                    });
                }
                this._previousTotalPages = totalPages;
            },
        );

        reaction(
            () => this.startAnim,
            (start) => {
                if (start) {
                    this.progressCheck();
                }
            },
        );

        reaction(
            () => this.progress,
            (progress) => {
                if (progress >= 100 && !this.isReplaceReady && this.startAnim) {
                    this.replaceList();
                }
            },
        );
    }

    configurePageIndexing = (
        mode: "url" | "storage" | null,
        key: string | null,
    ): void => {
        this.modePageIndexing = mode;
        this.keyPageIndexing = key;

        if (mode !== "url" || !key) {
            return;
        }

        const pageFromUrl = getUrlParameter(key);

        if (pageFromUrl) {
            this.currentPage = pageFromUrl;
        }
    };

    private _persistPage = (page: string): void => {
        if (!this._isConfigured) return;
        if (!this.modePageIndexing || !this.keyPageIndexing) return;
        if (typeof window === "undefined") return;

        if (this.modePageIndexing === "url") {
            setUrlParameter(this.keyPageIndexing, page);
        } else {
            setStoragePage(this.keyPageIndexing, page);
        }
    };

    replaceList = (): void => {
        runInAction(() => {
            this.isReplaceReady = true;
            if (this.pendingPage !== null) {
                this.currentPage = this.pendingPage;
                this.pendingPage = null;
            }

            this.isReordering = true;
        });
    };

    get animationDuration(): number {
        return this.differentPageForAnim;
    }

    get animationSpeed() {
        return this.animationBaseDistance / this.transitionDuration;
    }

    getPageDistance = (from: string, to: string): number => {
        const fromRect = this.getItemRect(from);
        const toRect = this.getItemRect(to);

        if (!fromRect || !toRect) {
            return 0;
        }

        if (this.mode === "horizontal") {
            return Math.abs(toRect.left - fromRect.left);
        }

        return Math.abs(toRect.top - fromRect.top);
    };

    setTransitionDuration = (ms: number) => {
        runInAction(() => {
            this.transitionDuration = ms;
        });
    };

    progressCheck = (): void => {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }

        this.progress = 0;

        const duration = this.animationDuration;
        const startTime = performance.now();

        const animate = (time: number) => {
            const elapsed = time - startTime;

            runInAction(() => {
                this.progress = Math.min((elapsed / duration) * 100, 100);
            });

            if (this.progress < 100) {
                this.animationFrame = requestAnimationFrame(animate);
            } else {
                runInAction(() => {
                    this.progress = 100;
                    this.commitPendingPage();
                });

                this.animationFrame = null;
            }
        };

        this.animationFrame = requestAnimationFrame(animate);
    };

    get animationDurationCss(): string {
        return `${this.differentPageForAnim}ms`;
    }

    setNavigationSize = (size: number): void => {
        runInAction(() => {
            this.navigationSize = size;
        });
    };

    get arrowsWidth() {
        return this.arrowStartWidth + this.arrowEndWidth;
    }

    setVisibleArrow = (direction: "Start" | "End", value: number): void => {
        runInAction(() => {
            this[`arrow${direction}Width`] = value;
        });
    };

    get visiblePages() {
        const available = this.navigationSize - this.arrowsWidth;
        return Math.max(7, Math.floor(available / this.pageSize));
    }

    get maxDigits(): number {
        return String(Math.max(this.getTotalPages, 1)).length;
    }

    registerItemRef = (page: string, el: HTMLButtonElement | null): void => {
        if (el) {
            this.itemRefs.set(page, el);
        } else {
            this.itemRefs.delete(page);
        }
    };

    getItemRect = (page: string) => {
        const el = this.itemRefs.get(page);
        if (!el) return null;
        return {
            left: el.offsetLeft,
            top: el.offsetTop,
            width: el.offsetWidth,
            height: el.offsetHeight,
        };
    };

    setReordering = (value: boolean): void => {
        runInAction(() => {
            this.isReordering = value;
        });
    };

    private _resolveDirection(prev: number, curr: number): PaginationDirection {
        const isForward = prev < curr;
        const isBackward = prev > curr;

        if (!isForward && !isBackward) {
            return this.positionShadow;
        }

        if (this.mode === "vertical") {
            return isForward ? "to_bottom" : "to_top";
        }

        return isForward ? "to_right" : "to_left";
    }

    set setItemsPerPage(itemsPerPage: number) {
        runInAction(() => {
            this.itemsPerPage = itemsPerPage;
        });
    }

    set setMode(mode: PaginationMode) {
        runInAction(() => {
            this.mode = mode;
        });
    }

    get currentPageNumber(): number {
        return Number(this.currentPage) || 1;
    }

    //eslint-disable-next-line
    get currentItems(): any[] {
        const start = (this.currentPageNumber - 1) * this.itemsPerPage;
        return this.allItems.slice(start, start + this.itemsPerPage);
    }

    get getTotalPages() {
        return Math.ceil(this.allItems.length / this.itemsPerPage);
    }

    setItems<T>(items: T[]): void {
        runInAction(() => {
            let newItems = items;

            if (this.sortFn) {
                newItems = this.sortFn(items);
            }

            this.allItems = newItems;

            const newTotalPages = this.getTotalPages;

            if (Number(this.currentPage) > newTotalPages) {
                this.currentPage = String(newTotalPages || 1);
            }
        });
    }

    startNavigateTo = (page: string): void => {
        if (this.startAnim || page === this.currentPage) {
            return;
        }

        runInAction(() => {
            const distance = this.getPageDistance(this.currentPage, page);
            const ratio = distance / this.animationBaseDistance;
            const duration = this.transitionDuration * Math.sqrt(ratio);
            this.pendingPage = page;

            this.positionShadow = this._resolveDirection(
                this.currentPageNumber,
                Number(page),
            );

            this.differentPageForAnim = Math.min(
                Math.max(duration, this.minAnimationDuration),
                this.maxAnimationDuration,
            );

            this.startAnim = true;
        });
    };

    commitPendingPage = (): void => {
        if (!this.startAnim) return;

        runInAction(() => {
            this.startAnim = false;
            this.isReplaceReady = false;
        });
    };

    navigateToPage = (page: string | null): void => {
        const targetPage = page !== null ? page : "1";
        this.startNavigateTo(targetPage);
    };

    setPosition = (x: number, y: number): void => {
        runInAction(() => {
            this.positionTrack = {
                left: `${x}px`,
                top: `${y}px`,
            };
        });
    };

    setSize = (width: number, height: number): void => {
        runInAction(() => {
            this.sizeTrack = {
                width: `${width}px`,
                height: `${height}px`,
            };
        });
    };

    get hasNextPage(): boolean {
        return Number(this.currentPage) < this.getTotalPages;
    }

    get hasPrevPage(): boolean {
        return Number(this.currentPage) > 1;
    }

    clear = (): void => {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }

        if (this.modePageIndexing && this.keyPageIndexing) {
            if (this.modePageIndexing === "url") {
                removeUrlParameter(this.keyPageIndexing);
            } else {
                removeStoragePage(this.keyPageIndexing);
            }
        }

        runInAction(() => {
            this.positionTrack = {};
            this.sizeTrack = {};
            this.currentPage = "1";
            this.pendingPage = null;
            this.allItems = [];
            this.startAnim = false;
            this.isReordering = false;
            this._previousTotalPages = 0;
            this.progress = 0;
        });
    };
}
