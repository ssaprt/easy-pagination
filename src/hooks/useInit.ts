import { useEffect, useRef } from "react";
import { PaginationStorage } from "src/store/PaginationStore";
import { PaginationType } from "src/types/pagination.type";

export const useInit = <T>({
    items: initData,
    itemsPerPage = 10,
    mode = "horizontal",
    animationSpeed = "600ms",
    indexing,
}: Pick<
    PaginationType<T>,
    "items" | "itemsPerPage" | "mode" | "animationSpeed" | "indexing"
>): PaginationStorage => {
    const paginationRef = useRef(new PaginationStorage());

    const indexingMode = indexing?.mode ?? null;
    const indexingKey = indexing?.key ?? null;

    useEffect(() => {
        const pagination = paginationRef.current;

        pagination.setItems<T>(initData);
        pagination.setItemsPerPage = itemsPerPage;
        pagination.setTransitionDuration(parseInt(animationSpeed));
        pagination.setMode = mode;

        pagination.configurePageIndexing(indexingMode, indexingKey);
    }, [
        initData,
        itemsPerPage,
        animationSpeed,
        mode,
        indexingMode,
        indexingKey,
    ]);

    return paginationRef.current;
};
