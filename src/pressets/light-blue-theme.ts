import { ThemePagination } from "src/types/theme/theme.interface";

export const lightBlueTheme: Omit<ThemePagination, "style" | "className"> = {
    items: {
        color: "#2563eb",
        border: "none",
        borderRadius: "2px",
        transition: "all .4s ease",
        active: {
            color: "#ffffff",
            border: "none",
            borderRadius: "2px",
            background: "#2563eb",
        },
        hover: {
            color: "#ffffff",
            border: "none",
            borderRadius: "2px",
            background: "#2563eb",
            transition: "0s all ease",
        },
    },

    button: {
        background: "transparent",
        borderStyle: "solid",
        borderColor: "#2563eb",
        borderWidth: "1px",
        borderRadius: "2px",
        shadowDirectionSize: 4,
        shadowDirectionColor: "transparent",
        shadowDirectionBlur: 6,
        active: {
            background: "#2563eb",
            borderStyle: "solid",
            borderColor: "#2563eb",
            borderRadius: "2px",
            shadowDirectionColor: "#2563eb",
        },
    },

    arrows: {
        color: "#2563eb",
        fill: "none",
        stroke: "#2563eb",
        background: "transparent",
        borderRadius: "2px",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: {
            size: { w: 14, h: 14 },
        },
        hover: {
            background: "#2563eb",
            fill: "none",
            stroke: "#ffffff",
            color: "#ffffff",
        },
        active: {
            background: "#1b46a4",
            fill: "none",
            stroke: "#ffffff",
            color: "#ffffff",
        },
        disabled: {
            fill: "none",
            stroke: "#bcbcbc",
            background: "transparent",
        },
    },
};
