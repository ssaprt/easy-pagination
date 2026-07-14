import { observer } from "mobx-react-lite";
import { cloneElement, isValidElement, useMemo } from "react";
import { usePaginationContext } from "src/hooks/usePaginationContext";
import { Arrow } from "src/types/params/params-arrow.type";
import { ThemeArrow } from "src/types/theme/theme-arrows.type";
import { sizeVariables } from "src/utils/variables";

export const Icon = observer(
    ({ direction }: { direction: "prev" | "next" }) => {
        const { props, store } = usePaginationContext();
        const { mode } = store;
        const { arrows, theme } = props;
        const { arrowStart, arrowEnd } = arrows || {};
        const arrow = direction === "prev" ? arrowStart : arrowEnd;

        const classNameIcon =
            `${theme?.arrows?.icon?.className || ""} easy-pagination-arrow__icon`.trim();

        const style = useMemo(() => {
            return sizeVariables(theme?.arrows?.icon?.size || {}, "arrow");
        }, [theme?.arrows?.icon?.size]);
        const styleIcon = useMemo(
            () => ({
                ...theme?.arrows?.icon?.style,
                ...style,
            }),
            [theme?.arrows?.icon?.style, style],
        );

        return isValidElement<Arrow & ThemeArrow>(arrow?.props?.iconElement) ? (
            cloneElement(arrow.props?.iconElement, {
                className: classNameIcon,
                style: styleIcon,
            })
        ) : (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    transform:
                        direction === "prev"
                            ? mode !== "vertical"
                                ? "scaleX(1)"
                                : "scaleX(1) rotate(90deg)"
                            : mode !== "vertical"
                              ? "scaleX(-1)"
                              : "scaleX(-1) rotate(-90deg)",
                    ...styleIcon,
                }}
                className={classNameIcon}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l4 4" />
                <path d="M5 12l4 -4" />
            </svg>
        );
    },
);
