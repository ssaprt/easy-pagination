export type PaginationActionsType = {
    navigationRef: React.RefObject<HTMLDivElement | null>;
    handlePrevPage: () => void;
    handleNextPage: () => void;
    getPagesWithEllipsis: () => (number | "...")[];
};
