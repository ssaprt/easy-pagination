import { observer } from "mobx-react-lite";
import { forwardRef, RefObject, useEffect, useMemo } from "react";
import { usePaginationContext } from "src/hooks/usePaginationContext";
import { sizeVariables, variables } from "src/utils/variables";
import { Icon } from "./Icon";

export const Arrow = observer(
    forwardRef(({ direction }: { direction: "prev" | "next" }, ref) => {
        const refArrow = ref as RefObject<HTMLDivElement>;
        //* CONTEXT ==================================================*
        const context = usePaginationContext();
        //* CONTEXT ==================================================*

        //* ACTIONS ==================================================*
        const { hasNextPage, hasPrevPage, startAnim } = context.store;
        const { handleNextPage, handlePrevPage } = context.actions;
        const { currentHoveredArrow, setCurrentHoveredArrow } = context;
        const actualActions =
            direction === "prev"
                ? { handle: handlePrevPage, has: hasPrevPage }
                : { handle: handleNextPage, has: hasNextPage };
        //* ACTIONS ==================================================*

        //* PROPS ====================================================*
        const { props } = context;
        const { theme } = props;
        const { arrows } = theme || {};
        //* PROPS ====================================================*

        //* PARTS STYLES =============================================*
        const style = useMemo(() => {
            return variables(arrows || {}, "arrow");
        }, [arrows]);
        const sizes = useMemo(() => {
            return sizeVariables(arrows?.size || {}, "arrow");
        }, [arrows?.size]);
        //* PARTS STYLES =============================================*

        //* EFFECTS ==================================================*
        useEffect(() => {
            if (!refArrow.current) return;

            const handleHover = (e: MouseEvent) => {
                const target = e.currentTarget as HTMLButtonElement;
                const type = e.type;
                const direction = target.dataset.direction as "prev" | "next";

                setCurrentHoveredArrow(
                    type === "mouseenter" ? direction : null,
                );
            };

            refArrow.current.addEventListener("mouseenter", handleHover);
            refArrow.current.addEventListener("mouseleave", handleHover);

            return () => {
                refArrow.current?.removeEventListener(
                    "mouseenter",
                    handleHover,
                );
                refArrow.current?.removeEventListener(
                    "mouseleave",
                    handleHover,
                );
            };
        }, []);
        //* EFFECTS ==================================================*

        return (
            <div
                ref={ref as any}
                className={`
                    easy-pagination-arrow ${
                        (!actualActions.has || startAnim) &&
                        "easy-pagination-arrow--disabled"
                    } 
                    ${
                        currentHoveredArrow === direction &&
                        "easy-pagination-arrow--hovered"
                    } 
                    ${arrows?.className || ""}   
                `.trim()}
                onClick={() => actualActions.handle()}
                style={{ ...style, ...arrows?.style, ...sizes }}
                data-direction={direction}
            >
                <Icon direction={direction} />
            </div>
        );
    }),
);
