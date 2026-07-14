export type ThemeNavigation = {
    style?: Omit<
        React.CSSProperties,
        "display" | "flexDirection" | "alignItems" | "justifyContent"
    >;
    className?: string;
};
