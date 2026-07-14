import { observer } from "mobx-react-lite";
import { useLayoutEffect, useRef } from "react";
import { usePaginationContext } from "src/hooks/usePaginationContext";
import { Arrow } from "../Arrow/Arrow";
import { Track } from "../Track/Track";

export const Navigation = observer(() => {
    const { props, actions, store } = usePaginationContext();
    const { navigationRef } = actions;
    const { mode, arrows, theme } = props;
    const { arrowStart, arrowEnd } = arrows || {};
    const { style, className } = theme?.navigation || {};
    const arrowStartRef = useRef<HTMLButtonElement>(null);
    const arrowEndRef = useRef<HTMLButtonElement>(null);

    const hasLeft =
        arrowStart === undefined ||
        arrowStart?.use === undefined ||
        arrowStart.use !== false;

    const hasRight =
        arrowEnd === undefined ||
        arrowEnd?.use === undefined ||
        arrowEnd.use !== false;

    useLayoutEffect(() => {
        if (!hasLeft) {
            store.setVisibleArrow("Start", 0);
            return;
        }

        const el = arrowStartRef.current;
        if (!el) return;

        const resizeObserver = new ResizeObserver(([entry]) => {
            const size =
                mode === "vertical"
                    ? entry.contentRect.height
                    : entry.contentRect.width;
            store.setVisibleArrow("Start", size);
        });

        resizeObserver.observe(el);

        return () => resizeObserver.disconnect();
    }, [store, hasLeft, mode]);

    useLayoutEffect(() => {
        if (!hasRight) {
            store.setVisibleArrow("End", 0);
            return;
        }

        const el = arrowEndRef.current;
        if (!el) return;

        const resizeObserver = new ResizeObserver(([entry]) => {
            const size =
                mode === "vertical"
                    ? entry.contentRect.height
                    : entry.contentRect.width;
            store.setVisibleArrow("End", size);
        });

        resizeObserver.observe(el);

        return () => resizeObserver.disconnect();
    }, [store, hasRight, mode]);

    return (
        <div
            ref={navigationRef}
            style={style}
            className={`easy-pagination-navigation easy-pagination-navigation--${mode || "horizontal"} ${className || ""}`.trim()}
        >
            {hasLeft && <Arrow ref={arrowStartRef} direction="prev" />}
            <Track />
            {hasRight && <Arrow ref={arrowEndRef} direction="next" />}
        </div>
    );
});
