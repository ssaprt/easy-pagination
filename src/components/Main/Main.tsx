import { observer } from "mobx-react-lite";
import { useLayoutEffect } from "react";
import { usePaginationContext } from "src/hooks/usePaginationContext";
import { Navigation } from "../Navigation/Navigation";

export const Main = observer(({ children }: { children: React.ReactNode }) => {
    const { props, store } = usePaginationContext();
    const { mode, navigation, theme } = props;
    const { style, className } = theme?.main || {};
    const { actions } = usePaginationContext();
    const { navigationRef } = actions;

    useLayoutEffect(() => {
        if (!navigationRef.current) return;

        const observer = new ResizeObserver(([entry]) => {
            store.setNavigationSize(
                store.mode === "horizontal"
                    ? entry.contentRect.width
                    : entry.contentRect.height,
            );
        });

        observer.observe(navigationRef.current);

        return () => observer.disconnect();
    }, [store, navigationRef.current]);

    return (
        <div
            className={`easy-pagination-main easy-pagination-main--${mode || "horizontal"} ${className || ""}`.trim()}
            style={style}
        >
            {["start", "full"].includes(navigation || "full") && <Navigation />}
            <div className="easy-pagination-main__content">{children}</div>
            {["end", "full"].includes(navigation || "full") && <Navigation />}
        </div>
    );
});
