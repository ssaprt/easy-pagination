import { ThemePagination } from "src/types/theme/theme.interface";

export const RoundedSpaceTheme: Omit<ThemePagination, "style" | "className"> = {
    items: {
        color: "#80d8ff",
        border: "1px solid rgba(128,216,255,.25)",
        borderRadius: "50%",
        background: "rgba(16,22,40,.55)",
        transition: "all .3s ease",
        hover: {
            color: "#ffffff",
            border: "1px solid #6be8ff",
            borderRadius: "50%",
            background: "rgba(40,70,130,.35)",
            transition: "all .18s ease",
        },
        active: {
            color: "#ffffff",
            border: "1px solid #6be8ff",
            borderRadius: "50%",
            background: "linear-gradient(135deg,#243b73,#3d1c71)",
        },
    },

    button: {
        background: "rgba(18,24,42,.15)",
        borderStyle: "solid",
        borderColor: "#64d8ff",
        borderWidth: "1px",
        borderRadius: "50%",
        shadowDirectionSize: 8,
        shadowDirectionColor: "#38bdf8",
        shadowDirectionBlur: 18,
        active: {
            background: "rgba(35,45,80,.95)",
            borderStyle: "solid",
            borderColor: "#8b5cf6",
            borderRadius: "50%",
            shadowDirectionColor: "#8b5cf6",
        },
    },

    arrows: {
        color: "#7dd3fc",
        fill: "none",
        stroke: "#7dd3fc",
        background: "rgba(15,23,42,.65)",
        borderRadius: "50%",
        transition: "all .2s ease",
        size: { w: 36, h: 36 },

        icon: {
            size: { w: 14, h: 14 },
        },

        hover: {
            background: "rgba(35,55,110,.45)",
            fill: "none",
            stroke: "#c4b5fd",
            color: "#c4b5fd",
        },

        active: {
            background: "rgba(55,85,170,.35)",
            fill: "none",
            stroke: "#ffffff",
            color: "#ffffff",
        },

        disabled: {
            fill: "none",
            stroke: "rgba(120,140,180,.35)",
            background: "rgba(20,20,30,.25)",
        },
    },
};
