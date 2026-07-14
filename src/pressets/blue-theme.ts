import { ThemePagination } from "src/types/theme/theme.interface";

export const blueTheme: Omit<ThemePagination, "style" | "className"> = {
    items: {
        color: "#000000",
        border: "none",
        borderRadius: "2px",
        transition: "all .4s ease",
        hover: {
            color: "#ffffff",
            border: "none",
            borderRadius: "2px",
            background: "#3b82f6",
            transition: "0s all ease",
        },
        active: {
            color: "#ffffff",
            border: "none",
            borderRadius: "2px",
            background: "#3b82f6",
        },
    },

    button: {
        background: "transparent",
        borderStyle: "solid",
        borderColor: "#3b82f6",
        borderWidth: "1px",
        borderRadius: "2px",
        shadowDirectionSize: 4,
        shadowDirectionColor: "transparent",
        shadowDirectionBlur: 6,
        active: {
            background: "#3b82f6",
            borderStyle: "solid",
            borderColor: "#3b82f6",
            borderRadius: "2px",
            shadowDirectionColor: "#3b82f6",
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
            background: "#3b82f6",
            fill: "none",
            stroke: "#ffffff",
            color: "#ffffff",
        },
        active: {
            background: "#2563eb",
            fill: "none",
            stroke: "#ffffff",
            color: "#ffffff",
        },
        disabled: {
            fill: "none",
            stroke: "#555555",
            background: "transparent",
        },
    },
};
