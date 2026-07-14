import { CSSProperties } from "react";
import { Sizes } from "./theme-general.type";

export type ThemeArrowsEvents = {
    color?: string;
    fill?: string;
    stroke?: string;
    background?: string;
    borderRadius?: string;
    transform?: CSSProperties["transform"];
    transition?: CSSProperties["transition"];
};

export type ThemeArrow = {
    style?: CSSProperties;
    className?: string;
    size?: Sizes;
    hover?: ThemeArrowsEvents;
    active?: ThemeArrowsEvents;
    disabled?: ThemeArrowsEvents;
    icon?: {
        style?: Omit<React.CSSProperties, "transform">;
        className?: string;
        size?: Sizes;
    };
} & ThemeArrowsEvents;
