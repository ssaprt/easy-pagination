import { CSSProperties } from "react";
import { ThemeTrackButton } from "src/types/theme/theme-button-track.type";
import { CSSPartial, Sizes } from "src/types/theme/theme-general.type";

// Общий контракт для всего, что variables() реально читает.
// Специфичные типы (ThemeArrow, ThemeItem) должны быть структурно совместимы с ним.
type VariablesEvents = {
    color?: string;
    fill?: string;
    stroke?: string;
    background?: string;
    transform?: string;
    transition?: string;
};

export type VariablesTheme = {
    color?: string;
    fill?: string;
    stroke?: string;
    background?: string;
    transition?: string;
    hover?: VariablesEvents;
    active?: VariablesEvents;
    disabled?: VariablesEvents;
    borderRadius?: string;
};

export const variables = (
    theme: VariablesTheme | undefined,
    type: string,
): CSSProperties => {
    const style: Record<string, string> = {};
    if (!theme) return style;

    // default
    theme.color && (style[`--${type}-color`] = theme.color);
    theme.fill && (style[`--${type}-fill`] = theme.fill);
    theme.stroke && (style[`--${type}-stroke`] = theme.stroke);
    theme.background && (style[`--${type}-background`] = theme.background);
    theme.transition && (style[`--${type}-transition`] = theme.transition);
    theme.borderRadius &&
        (style[`--${type}-border-radius`] = theme.borderRadius);

    // hover
    theme.hover?.color && (style[`--hover-${type}-color`] = theme.hover.color);
    theme.hover?.fill && (style[`--hover-${type}-fill`] = theme.hover.fill);
    theme.hover?.stroke &&
        (style[`--hover-${type}-stroke`] = theme.hover.stroke);
    theme.hover?.background &&
        (style[`--hover-${type}-background`] = theme.hover.background);
    theme.hover?.transform &&
        (style[`--hover-${type}-transform`] = theme.hover.transform);
    theme.hover?.transition &&
        (style[`--hover-${type}-transition`] = theme.hover.transition);
    theme.borderRadius &&
        (style[`--hover-${type}-border-radius`] = theme.borderRadius);

    // active
    theme.active?.color &&
        (style[`--active-${type}-color`] = theme.active.color);
    theme.active?.fill && (style[`--active-${type}-fill`] = theme.active.fill);
    theme.active?.stroke &&
        (style[`--active-${type}-stroke`] = theme.active.stroke);
    theme.active?.background &&
        (style[`--active-${type}-background`] = theme.active.background);
    theme.active?.transform &&
        (style[`--active-${type}-transform`] = theme.active.transform);
    theme.active?.transition &&
        (style[`--active-${type}-transition`] = theme.active.transition);
    theme.borderRadius &&
        (style[`--active-${type}-border-radius`] = theme.borderRadius);

    // disabled
    theme.disabled?.color &&
        (style[`--disabled-${type}-color`] = theme.disabled.color);
    theme.disabled?.fill &&
        (style[`--disabled-${type}-fill`] = theme.disabled.fill);
    theme.disabled?.stroke &&
        (style[`--disabled-${type}-stroke`] = theme.disabled.stroke);
    theme.disabled?.background &&
        (style[`--disabled-${type}-background`] = theme.disabled.background);
    theme.disabled?.transform &&
        (style[`--disabled-${type}-transform`] = theme.disabled.transform);
    theme.disabled?.transition &&
        (style[`--disabled-${type}-transition`] = theme.disabled.transition);

    return style as CSSProperties;
};

export const sizeVariables = (
    icon: Sizes,
    type: string,
): Record<string, string> => {
    const style: Record<string, string> = {};
    if (!icon) return style;

    const size = icon;
    size?.w && (style[`--${type}-w`] = `${size.w}px`);
    size?.h && (style[`--${type}-h`] = `${size.h}px`);

    return style;
};

export const shadowDirectionVariable = (
    positionShadow: "to_left" | "to_right" | "to_top" | "to_bottom",
    sizeShadow?: number | `${number}px`,
) => {
    const size = sizeShadow
        ? typeof sizeShadow === "string"
            ? sizeShadow
            : `${sizeShadow}px`
        : "5px";

    if (positionShadow === "to_top" || positionShadow === "to_bottom") {
        return positionShadow === "to_top" ? `0px ${size}` : `0px -${size}`;
    }

    return positionShadow === "to_left" ? `${size} 0px` : `-${size} 0px`;
};

export const shadowVariable = (
    shadow: Pick<
        ThemeTrackButton,
        "shadowDirectionColor" | "shadowDirectionBlur"
    >,
) => {
    const style: Record<string, string> = {};
    if (!shadow) return style;

    style["--shadow-color"] =
        `${shadow.shadowDirectionColor || "rgba(0, 0, 0, .5)"}`;
    style["--shadow-blur"] = `${shadow.shadowDirectionBlur || 10}px`;

    return style as CSSProperties;
};

export const partialVariables = (
    type: string,
    track?: {
        size?: Sizes;

        active?: CSSPartial;
    } & CSSPartial,
    active: boolean = false,
) => {
    const style: Record<string, string> = {};
    if (!track) return style;

    const trackData = active ? track.active : track;
    const {
        background,
        border,
        borderWidth,
        borderStyle,
        borderColor,
        borderRadius,
        borderSize,
    } = trackData || {};

    let variableBorder;

    if (border) {
        variableBorder = border;
    } else {
        let borderW = borderSize !== undefined ? borderSize : borderWidth;
        borderW =
            typeof borderW === "string"
                ? borderW
                : borderW !== undefined
                  ? `${borderW}px`
                  : "1px";
        variableBorder = `${borderW || "1px"} ${borderStyle || "solid"} ${
            borderColor || "rgba(0, 0, 0, 0.5)"
        }`;
    }

    const prefix = active ? "--active-" : "--";
    const borderKey = `${prefix}${type}-border`;
    const backgroundKey = `${prefix}${type}-background`;
    const radiusKey = `${prefix}${type}-border-radius`;

    style[backgroundKey] = `${background || "transparent"}`;
    style[borderKey] = `${variableBorder}`;
    style[radiusKey] = `${borderRadius || "0"}`;
    return style as CSSProperties;
};
