export type ThemeTrack = {
    style?: Omit<
        React.CSSProperties,
        "display" | "flexDirection" | "alignItems" | "justifyContent"
    >;
    className?: string;
};
