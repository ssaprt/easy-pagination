import { CSSPartial } from "./theme-general.type";

export type ThemeTrackButton = {
    style?: Omit<
        React.CSSProperties,
        "display" | "flexDirection" | "alignItems" | "justifyContent"
    >;
    className?: string;
    active?: CSSPartial & { shadowDirectionColor?: string };
    radius?: CSSStyleDeclaration["borderRadius"];
    shadowDirectionSize?: number | `${number}px`;
    shadowDirectionColor?: string;
    shadowDirectionBlur?: number;
} & CSSPartial;
