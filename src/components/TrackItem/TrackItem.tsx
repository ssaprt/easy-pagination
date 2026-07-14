import { observer } from "mobx-react-lite";
import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
} from "react";
import { usePaginationContext } from "src/hooks/usePaginationContext";
import {
    partialVariables,
    sizeVariables,
    variables,
} from "src/utils/variables";

export const TrackItem = observer(
    ({ children }: { children: React.ReactNode }) => {
        const button = useRef<HTMLButtonElement>(null);
        const pageNumber = String(children);
        const { store, props, setCurrentHoveredItem, currentHoveredItem } =
            usePaginationContext();
        const { theme } = props || {};
        const { items } = theme || {};
        const {
            navigateToPage,
            setPosition,
            setSize,
            startAnim,
            currentPage,
            mode,
            isReordering,
        } = store;
        const isActive = currentPage === pageNumber;
        const isVertical = mode === "vertical";
        const sizes = useMemo(() => {
            return sizeVariables(items?.size || {}, "item");
        }, [items?.size]);

        const defaultPartialVariables = useMemo(() => {
            return partialVariables("item", items);
        }, [
            items?.background,
            items?.border,
            items?.borderRadius,
            items?.borderStyle,
            items?.borderWidth,
            items?.borderColor,
        ]);

        const activePartialVariables = useMemo(() => {
            return partialVariables("item", items, true);
        }, [
            items?.active?.background,
            items?.active?.border,
            items?.active?.borderRadius,
            items?.active?.borderStyle,
            items?.active?.borderWidth,
            items?.active?.borderColor,
        ]);

        const defaultVariables = useMemo(() => {
            return variables(items, "item");
        }, [items]);

        const handleClick = () => {
            if (isActive || startAnim) return;

            const rect = store.getItemRect(pageNumber);
            if (rect) {
                setPosition(rect.left, rect.top);
                setSize(rect.width, rect.height);
            }

            navigateToPage(pageNumber);
        };

        const setButtonRef = useCallback(
            (el: HTMLButtonElement | null) => {
                button.current = el;
                store.registerItemRef(pageNumber, el);
            },
            [pageNumber, store],
        );

        useLayoutEffect(() => {
            if (!button.current || !isActive) return;

            const { offsetLeft, offsetTop, offsetWidth, offsetHeight } =
                button.current;
            setPosition(offsetLeft, offsetTop);
            setSize(offsetWidth, offsetHeight);

            if (isReordering) {
                requestAnimationFrame(() => {
                    store.setReordering(false);
                });
            }
        }, [
            currentPage,
            isActive,
            isVertical ? button.current?.offsetTop : button.current?.offsetLeft,
        ]);

        useEffect(() => {
            if (!button.current || !isActive) return;

            const { offsetLeft, offsetTop, offsetWidth, offsetHeight } =
                button.current;
            setPosition(offsetLeft, offsetTop);
            setSize(offsetWidth, offsetHeight);
        }, [
            currentPage,
            isActive,
            isVertical ? button.current?.offsetTop : button.current?.offsetLeft,
        ]);

        useEffect(() => {
            if (!button.current) return;

            const handleHover = (e: MouseEvent) => {
                e.type === "mouseenter"
                    ? setCurrentHoveredItem(
                          Number(
                              (e.currentTarget as HTMLButtonElement)
                                  .textContent,
                          ),
                      )
                    : setCurrentHoveredItem(null);
            };

            button.current?.addEventListener("mouseenter", handleHover);
            button.current?.addEventListener("mouseleave", handleHover);

            return () => {
                button.current?.removeEventListener("mouseenter", handleHover);
                button.current?.removeEventListener("mouseleave", handleHover);
            };
        }, []);

        return (
            <button
                onClick={handleClick}
                ref={setButtonRef}
                disabled={isActive || startAnim}
                style={{
                    ...sizes,
                    ...items?.style,
                    ...defaultVariables,

                    ...defaultPartialVariables,
                    ...activePartialVariables,
                }}
                className={`easy-pagination-item ${isActive ? "easy-pagination-item--active" : ""} ${
                    isVertical
                        ? "easy-pagination-item--vertical"
                        : "easy-pagination-item--horizontal"
                } ${currentHoveredItem === Number(children) && "easy-pagination-item--hovered"} ${items?.className || ""}`.trim()}
            >
                {children}
            </button>
        );
    },
);
