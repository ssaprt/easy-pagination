import { CSSPartial, Sizes } from "./theme-general.type";

export type ThemeItem = {
    size?: Sizes;
    active?: {
        color?: string;
        transition?: string;
    } & CSSPartial;
    hover?: {
        color?: string;
        transition?: string;
    } & CSSPartial;
    color?: string;
    style?: React.CSSProperties;
    className?: string;
    transition?: string;
} & CSSPartial;
