import { observer } from "mobx-react-lite";
import { useMemo } from "react";
import { usePaginationContext } from "src/hooks/usePaginationContext";
import {
    partialVariables,
    shadowDirectionVariable,
    shadowVariable,
} from "src/utils/variables";

export const TrackButton = observer(() => {
    const { store, props } = usePaginationContext();
    const {
        positionTrack,
        sizeTrack,
        startAnim,
        positionShadow,
        isReordering,
    } = store;
    const { theme } = props;
    const { button } = theme || {};
    const {
        style,
        className,
        shadowDirectionSize,
        shadowDirectionColor,
        shadowDirectionBlur,
    } = button || {};

    const styleShadow = useMemo(() => {
        return shadowDirectionVariable(positionShadow, shadowDirectionSize);
    }, [positionShadow, shadowDirectionSize]);

    const shadowVariables = useMemo(() => {
        return shadowVariable({
            shadowDirectionColor,
            shadowDirectionBlur,
        });
    }, [shadowDirectionColor, shadowDirectionBlur]);

    const defaultVariables = useMemo(() => {
        return partialVariables("button", button);
    }, [
        button?.background,
        button?.border,
        button?.borderRadius,
        button?.borderStyle,
        button?.borderWidth,
        button?.borderColor,
    ]);

    const activeVariables = useMemo(() => {
        return partialVariables("button", button, true);
    }, [
        button?.active?.background,
        button?.active?.border,
        button?.active?.borderRadius,
        button?.active?.borderStyle,
        button?.active?.borderWidth,
        button?.active?.borderColor,
    ]);

    return (
        <div
            className={`easy-pagination-track-button ${startAnim && "easy-pagination-track-button--next"} ${className || ""}`.trim()}
            style={
                {
                    ...style,
                    ...positionTrack,
                    ...sizeTrack,
                    transition: isReordering ? "none" : undefined,
                    pointerEvents: startAnim ? "none" : "auto",
                    "--shadow": styleShadow,
                    "--track-animation-time": store.animationDurationCss,
                    "--active-shadow-color":
                        button?.active?.shadowDirectionColor,
                    display: Object.keys(positionTrack).length
                        ? "block"
                        : "none",
                    ...shadowVariables,
                    ...defaultVariables,
                    ...activeVariables,
                } as React.CSSProperties
            }
        ></div>
    );
});
