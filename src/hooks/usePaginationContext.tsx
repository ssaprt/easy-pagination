import { createContext, useContext } from "react";
import { PaginationStorage } from "src/store/PaginationStore";
import { PaginationActionsType } from "src/types/actions.type";
import { PaginationType } from "src/types/pagination.type";

export interface PaginationContextType {
    store: PaginationStorage;
    actions: PaginationActionsType;
    props: Omit<PaginationType<unknown>, "children" & "items">;
    currentHoveredItem: number | null;
    setCurrentHoveredItem: React.Dispatch<React.SetStateAction<number | null>>;
    currentHoveredArrow: "prev" | "next" | null;
    setCurrentHoveredArrow: React.Dispatch<
        React.SetStateAction<"prev" | "next" | null>
    >;
}

export const PaginationContext = createContext<PaginationContextType | null>(
    null,
);

export const usePaginationContext = () => {
    const context = useContext(PaginationContext);
    if (!context) {
        throw new Error("Components must be inside <PaginationProvider>");
    }
    return context;
};
