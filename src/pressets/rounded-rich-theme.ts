import { ThemePagination } from "src/types/theme/theme.interface";

export const roundedRichTheme: Omit<ThemePagination, "style" | "className"> = {
    items: {
        color: "#ccbf7f",
        border: "none",
        borderRadius: "50%",
        background: "transparent",
        transition: "all .4s ease",
        hover: {
            color: "silver",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
            transition: "color 0.13s ease-in-out",
        },
        active: {
            color: "silver",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
        },
    },

    button: {
        background: "transparent",
        borderStyle: "outset",
        borderColor: "silver",
        borderWidth: "2px",
        borderRadius: "50%",
        shadowDirectionSize: 5,
        shadowDirectionColor: "silver",
        shadowDirectionBlur: 5,
        active: {
            background: "transparent",
            borderStyle: "outset",
            borderColor: "#ccbf7f",
            borderRadius: "50%",
            shadowDirectionColor: "#ccbf7f",
        },
    },

    arrows: {
        color: "#ccbf7f",
        fill: "none",
        stroke: "#ccbf7f",
        background: "transparent",
        borderRadius: "2px",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: {
            size: { w: 14, h: 14 },
        },
        hover: {
            background: "transparent",
            fill: "none",
            stroke: "#b3a76b",
            color: "#b3a76b",
        },
        active: {
            background: "transparent",
            fill: "none",
            stroke: "#ccbf7f",
            color: "#ccbf7f",
        },
        disabled: {
            fill: "none",
            stroke: "#a7a7a7",
            background: "transparent",
        },
    },
};
