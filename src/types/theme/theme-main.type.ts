export type ThemeMain = {
    style?: Omit<
        React.CSSProperties,
        "display" | "flexDirection" | "alignItems" | "justifyContent"
    >;
    className?: string;
};
