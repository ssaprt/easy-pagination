import { useEffect, useRef } from "react";

import { PaginationType } from "src/types/pagination.type";
import { PaginationStorage } from "../store/PaginationStore";

export const useInit = <T>({
    items: initData,
    itemsPerPage = 10,
    mode = "horizontal",
    animationSpeed = "600ms",
    indexing = undefined,
}: Pick<
    PaginationType<T>,
    "items" | "itemsPerPage" | "mode" | "animationSpeed" | "indexing"
>): PaginationStorage => {
    const paginationRef = useRef(new PaginationStorage());

    useEffect(() => {
        const pagination = paginationRef.current;
        pagination.setItems<T>(initData);
        pagination.setItemsPerPage = itemsPerPage;
        pagination.setTransitionDuration(parseInt(animationSpeed));
        pagination.setMode = mode;
        pagination.configurePageIndexing(
            indexing?.mode ?? null,
            indexing?.key ?? null,
        );
    }, [initData, animationSpeed, indexing, mode]);

    return paginationRef.current;
};
