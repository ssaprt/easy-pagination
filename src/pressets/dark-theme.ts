import { ThemePagination } from "src/types/theme/theme.interface";

export const darkTheme: Omit<ThemePagination, "style" | "className"> = {
    items: {
        color: "#000000",
        border: "none",
        borderRadius: "2px",
        transition: "all .4s ease",
        background: "transparent",
        hover: {
            color: "#ffffff",
            border: "none",
            borderRadius: "2px",
            background: "#000000",
            transition: "0s all ease",
        },
        active: {
            color: "#ffffff",
            border: "none",
            borderRadius: "2px",
            background: "#000000",
        },
    },

    button: {
        background: "transparent",
        borderStyle: "solid",
        borderColor: "#000000",
        borderWidth: "1px",
        borderRadius: "2px",
        shadowDirectionSize: 4,
        shadowDirectionColor: "transparent",
        shadowDirectionBlur: 6,
        active: {
            background: "#000000",
            borderStyle: "solid",
            borderColor: "#000000",
            borderRadius: "2px",
            shadowDirectionColor: "#000000",
        },
    },

    arrows: {
        color: "#000000",
        fill: "none",
        stroke: "#000000",
        background: "transparent",
        borderRadius: "2px",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: {
            size: { w: 14, h: 14 },
        },
        hover: {
            background: "#1d1d1d",
            fill: "none",
            stroke: "#ffffff",
            color: "#ffffff",
        },
        active: {
            background: "#000000",
            fill: "none",
            stroke: "#ffffff",
            color: "#ffffff",
        },
        disabled: {
            fill: "none",
            stroke: "#323232",
            background: "transparent",
        },
    },
};
