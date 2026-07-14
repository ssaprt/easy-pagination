import { observer } from "mobx-react-lite";
import { useInit } from "src/hooks/useInit";
import { usePaginationActions } from "src/hooks/usePagination.actions";
import { PaginationContext } from "src/hooks/usePaginationContext";
import { PaginationType } from "src/types/pagination.type";
import { Main } from "../Main/Main";

import { useState } from "react";
import { selectTheme } from "src/pressets/config";
import { themeMerge } from "src/utils/themeMerge";
import "../../css/index.css";

export const Pagination = observer(
    <T,>({ children, ...props }: PaginationType<T>) => {
        const store = useInit({
            items: props.items,
            itemsPerPage: props.itemsPerPage,
            mode: props.mode,
            animationSpeed: props.animationSpeed,
            indexing: props.indexing,
        });

        const [currentHoveredItem, setCurrentHoveredItem] = useState<
            number | null
        >(null);
        const [currentHoveredArrow, setCurrentHoveredArrow] = useState<
            "prev" | "next" | null
        >(null);

        // PARTS ========================================*
        const actions = usePaginationActions(store);
        const theme = props.selectTheme;
        const propsPart = props as unknown as Omit<
            PaginationType<unknown>,
            "children" | "items" | "theme"
        >;

        const other: Omit<
            PaginationType<unknown>,
            "children" | "items" | "theme"
        > = propsPart;

        const selectedTheme = selectTheme(theme);

        const finalTheme = themeMerge(selectedTheme, props.theme);
        const finalProps = {
            ...other,
            items: props.items,
            theme: finalTheme,
        } as PaginationType<T>;
        // PARTS ========================================*

        return (
            <PaginationContext.Provider
                value={{
                    store: store,
                    actions: actions,
                    props: finalProps,
                    currentHoveredItem,
                    setCurrentHoveredItem,
                    currentHoveredArrow,
                    setCurrentHoveredArrow,
                }}
            >
                <Main>{children}</Main>
            </PaginationContext.Provider>
        );
    },
);
