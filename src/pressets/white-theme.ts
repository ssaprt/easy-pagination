import { ThemePagination } from "src/types/theme/theme.interface";

export const whiteTheme: Omit<ThemePagination, "style" | "className"> = {
    items: {
        color: "#ffffff",
        border: "none",
        borderRadius: "2px",
        background: "transparent",
        transition: "all .4s ease",
        hover: {
            color: "#000000",
            border: "none",
            borderRadius: "2px",
            background: "#ffffff",
            transition: "0s all ease",
        },
        active: {
            color: "#000000",
            border: "none",
            borderRadius: "2px",
            background: "#ffffff",
        },
    },

    button: {
        background: "transparent",
        borderStyle: "solid",
        borderColor: "#ffffff",
        borderWidth: "1px",
        borderRadius: "2px",
        shadowDirectionSize: 4,
        shadowDirectionColor: "transparent",
        shadowDirectionBlur: 6,
        active: {
            background: "#ffffff",
            borderStyle: "solid",
            borderColor: "#ffffff",
            borderRadius: "2px",
            shadowDirectionColor: "#ffffff",
        },
    },

    arrows: {
        color: "#ffffff",
        fill: "none",
        stroke: "#ffffff",
        background: "transparent",
        borderRadius: "2px",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: {
            size: { w: 14, h: 14 },
        },
        hover: {
            background: "#ffffff",
            fill: "none",
            stroke: "#000000",
            color: "#000000",
        },
        active: {
            background: "#eeeeee",
            fill: "none",
            stroke: "#000000",
            color: "#000000",
        },
        disabled: {
            fill: "none",
            stroke: "#a7a7a7",
            background: "transparent",
        },
    },
};
