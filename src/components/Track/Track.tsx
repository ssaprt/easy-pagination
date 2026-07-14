import { observer } from "mobx-react-lite";
import { useMemo } from "react";
import { usePaginationContext } from "src/hooks/usePaginationContext";
import { sizeVariables, variables } from "src/utils/variables";
import { TrackButton } from "../TrackButton/TrackButton";
import { TrackItem } from "../TrackItem/TrackItem";

export const Track = observer(() => {
    const { props, actions } = usePaginationContext();
    const { mode, theme } = props;
    const { items } = theme || {};
    const { style, className } = theme?.track || {};
    const { getPagesWithEllipsis } = actions;

    const sizes = useMemo(() => {
        return sizeVariables(items?.size || {}, "item");
    }, [items?.size]);

    const defaultPartialVariables = useMemo(() => {
        return variables({ color: items?.color }, "spread");
    }, [items?.color]);

    return (
        <div
            className={`easy-pagination-track easy-pagination-track--${mode || "horizontal"} ${className || ""}`.trim()}
            style={style}
        >
            {getPagesWithEllipsis().map((page, index) =>
                page === "..." ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ ...sizes, ...defaultPartialVariables }}
                        key={`ellipsis-${index}`}
                        className="easy-pagination-track__ellipsis"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                ) : (
                    <TrackItem key={page}>{page}</TrackItem>
                ),
            )}
            <TrackButton />
        </div>
    );
});
