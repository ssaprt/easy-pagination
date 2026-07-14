import { useRef } from "react";
import { PaginationStorage } from "src/store/PaginationStore";

export const usePaginationActions = (store: PaginationStorage) => {
    const {
        startNavigateTo,
        getTotalPages,
        hasPrevPage,
        hasNextPage,
        currentPageNumber,
        startAnim,
        getItemRect,
        setPosition,
        setSize,
    } = store;

    const navigationRef = useRef<HTMLDivElement>(null);

    if (getTotalPages < 2) {
        return {
            navigationRef,
            handlePrevPage: () => {},
            handleNextPage: () => {},
            getPagesWithEllipsis: () => [],
        };
    }

    const navigateWithAnimation = (page: string) => {
        if (startAnim || page === String(currentPageNumber)) return;

        const rect = getItemRect(page);
        if (rect) {
            setPosition(rect.left, rect.top);
            setSize(rect.width, rect.height);
        }
        startNavigateTo(page);
    };

    const handlePrevPage = () => {
        if (hasPrevPage && !startAnim) {
            navigateWithAnimation(String(currentPageNumber - 1));
        }
    };

    const handleNextPage = () => {
        if (hasNextPage && !startAnim) {
            navigateWithAnimation(String(currentPageNumber + 1));
        }
    };

    const range = (start: number, end: number): number[] => {
        const length = end - start + 1;
        return length > 0 ? Array.from({ length }, (_, i) => start + i) : [];
    };

    const getPagesWithEllipsis = (): (number | "...")[] => {
        const total = getTotalPages;
        const current = currentPageNumber;
        const visible = Math.min(store.visiblePages, total);

        if (total <= visible) {
            return Array.from({ length: total }, (_, i) => i + 1);
        }

        const boundaryCount = 1;
        const siblingCount = Math.max(
            0,
            Math.floor((visible - boundaryCount * 2 - 2 - 1) / 2),
        );
        const startPages = range(1, Math.min(boundaryCount, total));
        const endPages = range(
            Math.max(total - boundaryCount + 1, boundaryCount + 1),
            total,
        );

        const siblingsStart = Math.max(
            Math.min(
                current - siblingCount,
                total - boundaryCount - siblingCount * 2 - 1,
            ),
            boundaryCount + 2,
        );

        const siblingsEnd = Math.min(
            Math.max(
                current + siblingCount,
                boundaryCount + siblingCount * 2 + 2,
            ),
            endPages.length > 0 ? endPages[0] - 2 : total - 1,
        );

        const pages: (number | "...")[] = [
            ...startPages,
            ...(siblingsStart > boundaryCount + 2
                ? (["..."] as const)
                : boundaryCount + 1 < total - boundaryCount
                  ? [boundaryCount + 1]
                  : []),
            ...range(siblingsStart, siblingsEnd),
            ...(siblingsEnd < total - boundaryCount - 1
                ? (["..."] as const)
                : total - boundaryCount > boundaryCount
                  ? [total - boundaryCount]
                  : []),
            ...endPages,
        ];

        return pages;
    };

    return {
        navigationRef,
        handlePrevPage,
        handleNextPage,
        getPagesWithEllipsis,
    };
};
