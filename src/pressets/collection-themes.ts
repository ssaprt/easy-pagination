import { ThemePagination } from "src/types/theme/theme.interface";

type PaginationTheme = Omit<ThemePagination, "style" | "className">;

/* ==========================================================================
   SPACE
   ========================================================================== */

export const roundedAuroraNebulaTheme: PaginationTheme = {
    items: {
        color: "#c9b8ff",
        border: "none",
        borderRadius: "50%",
        background: "transparent",
        transition: "all .4s ease",
        hover: {
            color: "#7ef0ff",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
            transition: "color 0.13s ease-in-out",
        },
        active: {
            color: "#7ef0ff",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
        },
    },
    button: {
        background: "transparent",
        borderStyle: "solid",
        borderColor: "#9b6bff",
        borderWidth: "2px",
        borderRadius: "50%",
        shadowDirectionSize: 6,
        shadowDirectionColor: "#9b6bff",
        shadowDirectionBlur: 8,
        active: {
            background: "transparent",
            borderStyle: "solid",
            borderColor: "#4dd8e6",
            borderRadius: "50%",
            shadowDirectionColor: "#4dd8e6",
        },
    },
    arrows: {
        color: "#c9b8ff",
        fill: "none",
        stroke: "#c9b8ff",
        background: "transparent",
        borderRadius: "50%",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: { size: { w: 14, h: 14 } },
        hover: {
            background: "transparent",
            fill: "none",
            stroke: "#7ef0ff",
            color: "#7ef0ff",
        },
        active: {
            background: "transparent",
            fill: "none",
            stroke: "#4dd8e6",
            color: "#4dd8e6",
        },
        disabled: {
            fill: "none",
            stroke: "#4b4568",
            background: "transparent",
        },
    },
};

export const roundedDeepSpaceVoidTheme: PaginationTheme = {
    items: {
        color: "#d7e3ff",
        border: "none",
        borderRadius: "50%",
        background: "transparent",
        transition: "all .4s ease",
        hover: {
            color: "#8ea2ff",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
            transition: "color 0.13s ease-in-out",
        },
        active: {
            color: "#8ea2ff",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
        },
    },
    button: {
        background: "transparent",
        borderStyle: "solid",
        borderColor: "#5b6ee1",
        borderWidth: "2px",
        borderRadius: "50%",
        shadowDirectionSize: 5,
        shadowDirectionColor: "#5b6ee1",
        shadowDirectionBlur: 6,
        active: {
            background: "transparent",
            borderStyle: "solid",
            borderColor: "#d7e3ff",
            borderRadius: "50%",
            shadowDirectionColor: "#d7e3ff",
        },
    },
    arrows: {
        color: "#d7e3ff",
        fill: "none",
        stroke: "#d7e3ff",
        background: "transparent",
        borderRadius: "50%",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: { size: { w: 14, h: 14 } },
        hover: {
            background: "transparent",
            fill: "none",
            stroke: "#8ea2ff",
            color: "#8ea2ff",
        },
        active: {
            background: "transparent",
            fill: "none",
            stroke: "#5b6ee1",
            color: "#5b6ee1",
        },
        disabled: {
            fill: "none",
            stroke: "#38395a",
            background: "transparent",
        },
    },
};

export const roundedSolarFlareTheme: PaginationTheme = {
    main: {
        style: {
            background:
                "radial-gradient(circle at 30% 20%, rgba(255,140,0,.4), transparent 40%), radial-gradient(circle at 75% 70%, rgba(255,60,0,.25), transparent 45%), radial-gradient(circle at 50% 100%, rgba(120,20,0,.3), transparent 55%), #1a0600",
        },
    },
    items: {
        color: "#ffcf8b",
        border: "none",
        borderRadius: "50%",
        background: "transparent",
        transition: "all .4s ease",
        hover: {
            color: "#ffffff",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
            transition: "color 0.13s ease-in-out",
        },
        active: {
            color: "#ffffff",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
        },
    },
    button: {
        background: "transparent",
        borderStyle: "solid",
        borderColor: "#ff8c00",
        borderWidth: "2px",
        borderRadius: "50%",
        shadowDirectionSize: 6,
        shadowDirectionColor: "#ff5e3a",
        shadowDirectionBlur: 10,
        active: {
            background: "transparent",
            borderStyle: "solid",
            borderColor: "#ffe08b",
            borderRadius: "50%",
            shadowDirectionColor: "#ffe08b",
        },
    },
    arrows: {
        color: "#ffcf8b",
        fill: "none",
        stroke: "#ffcf8b",
        background: "transparent",
        borderRadius: "50%",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: { size: { w: 14, h: 14 } },
        hover: {
            background: "transparent",
            fill: "none",
            stroke: "#ffffff",
            color: "#ffffff",
        },
        active: {
            background: "transparent",
            fill: "none",
            stroke: "#ff8c00",
            color: "#ff8c00",
        },
        disabled: {
            fill: "none",
            stroke: "#6b4a2e",
            background: "transparent",
        },
    },
};

export const roundedBlackHoleTheme: PaginationTheme = {
    main: {
        style: {
            background:
                "radial-gradient(circle at 50% 50%, rgba(122,63,242,.4), transparent 22%), radial-gradient(circle at 50% 50%, rgba(0,0,0,.95) 35%, transparent 55%), radial-gradient(circle at 30% 70%, rgba(43,10,77,.4), transparent 45%), #000000",
        },
    },
    items: {
        color: "#f2eaff",
        border: "none",
        borderRadius: "50%",
        background: "transparent",
        transition: "all .4s ease",
        hover: {
            color: "#a86bff",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
            transition: "color 0.13s ease-in-out",
        },
        active: {
            color: "#a86bff",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
        },
    },
    button: {
        background: "transparent",
        borderStyle: "solid",
        borderColor: "#7a3ff2",
        borderWidth: "2px",
        borderRadius: "50%",
        shadowDirectionSize: 8,
        shadowDirectionColor: "#7a3ff2",
        shadowDirectionBlur: 12,
        active: {
            background: "transparent",
            borderStyle: "solid",
            borderColor: "#f2eaff",
            borderRadius: "50%",
            shadowDirectionColor: "#f2eaff",
        },
    },
    arrows: {
        color: "#f2eaff",
        fill: "none",
        stroke: "#f2eaff",
        background: "transparent",
        borderRadius: "50%",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: { size: { w: 14, h: 14 } },
        hover: {
            background: "transparent",
            fill: "none",
            stroke: "#a86bff",
            color: "#a86bff",
        },
        active: {
            background: "transparent",
            fill: "none",
            stroke: "#7a3ff2",
            color: "#7a3ff2",
        },
        disabled: {
            fill: "none",
            stroke: "#2c2735",
            background: "transparent",
        },
    },
};

/* ==========================================================================
   HELL
   ========================================================================== */

export const roundedInfernoTheme: PaginationTheme = {
    main: {
        style: {
            background:
                "radial-gradient(circle at 20% 80%, rgba(255,87,34,.4), transparent 40%), radial-gradient(circle at 80% 20%, rgba(178,20,20,.3), transparent 45%), radial-gradient(circle at 50% 100%, rgba(255,180,0,.15), transparent 50%), #1a0300",
        },
    },
    items: {
        color: "#ffb08a",
        border: "none",
        borderRadius: "50%",
        background: "transparent",
        transition: "all .4s ease",
        hover: {
            color: "#ffe08b",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
            transition: "color 0.13s ease-in-out",
        },
        active: {
            color: "#ffe08b",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
        },
    },
    button: {
        background: "transparent",
        borderStyle: "solid",
        borderColor: "#ff5722",
        borderWidth: "2px",
        borderRadius: "50%",
        shadowDirectionSize: 7,
        shadowDirectionColor: "#ff5722",
        shadowDirectionBlur: 10,
        active: {
            background: "transparent",
            borderStyle: "solid",
            borderColor: "#ffb300",
            borderRadius: "50%",
            shadowDirectionColor: "#ffb300",
        },
    },
    arrows: {
        color: "#ffb08a",
        fill: "none",
        stroke: "#ffb08a",
        background: "transparent",
        borderRadius: "50%",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: { size: { w: 14, h: 14 } },
        hover: {
            background: "transparent",
            fill: "none",
            stroke: "#ffe08b",
            color: "#ffe08b",
        },
        active: {
            background: "transparent",
            fill: "none",
            stroke: "#ff5722",
            color: "#ff5722",
        },
        disabled: {
            fill: "none",
            stroke: "#5a3226",
            background: "transparent",
        },
    },
};

export const roundedTrimstoneTheme: PaginationTheme = {
    main: {
        style: {
            background:
                "radial-gradient(circle at 25% 15%, rgba(182,217,76,.2), transparent 35%), radial-gradient(circle at 75% 85%, rgba(140,28,19,.35), transparent 45%), radial-gradient(circle at 50% 50%, rgba(40,10,0,.4), transparent 60%), #120800",
        },
    },
    items: {
        color: "#c9d97a",
        border: "none",
        borderRadius: "50%",
        background: "transparent",
        transition: "all .4s ease",
        hover: {
            color: "#e2452f",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
            transition: "color 0.13s ease-in-out",
        },
        active: {
            color: "#e2452f",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
        },
    },
    button: {
        background: "transparent",
        borderStyle: "solid",
        borderColor: "#b6d94c",
        borderWidth: "2px",
        borderRadius: "50%",
        shadowDirectionSize: 5,
        shadowDirectionColor: "#8c1c13",
        shadowDirectionBlur: 8,
        active: {
            background: "transparent",
            borderStyle: "solid",
            borderColor: "#8c1c13",
            borderRadius: "50%",
            shadowDirectionColor: "#b6d94c",
        },
    },
    arrows: {
        color: "#c9d97a",
        fill: "none",
        stroke: "#c9d97a",
        background: "transparent",
        borderRadius: "50%",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: { size: { w: 14, h: 14 } },
        hover: {
            background: "transparent",
            fill: "none",
            stroke: "#e2452f",
            color: "#e2452f",
        },
        active: {
            background: "transparent",
            fill: "none",
            stroke: "#8c1c13",
            color: "#8c1c13",
        },
        disabled: {
            fill: "none",
            stroke: "#4a4a2e",
            background: "transparent",
        },
    },
};

export const roundedAbyssalTheme: PaginationTheme = {
    items: {
        color: "#e0788a",
        border: "none",
        borderRadius: "50%",
        background: "transparent",
        transition: "all .4s ease",
        hover: {
            color: "#ff6b35",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
            transition: "color 0.13s ease-in-out",
        },
        active: {
            color: "#ff6b35",
            border: "none",
            borderRadius: "50%",
            background: "transparent",
        },
    },
    button: {
        background: "transparent",
        borderStyle: "solid",
        borderColor: "#d1263f",
        borderWidth: "2px",
        borderRadius: "50%",
        shadowDirectionSize: 6,
        shadowDirectionColor: "#d1263f",
        shadowDirectionBlur: 9,
        active: {
            background: "transparent",
            borderStyle: "solid",
            borderColor: "#ff6b35",
            borderRadius: "50%",
            shadowDirectionColor: "#ff6b35",
        },
    },
    arrows: {
        color: "#e0788a",
        fill: "none",
        stroke: "#e0788a",
        background: "transparent",
        borderRadius: "50%",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: { size: { w: 14, h: 14 } },
        hover: {
            background: "transparent",
            fill: "none",
            stroke: "#ff6b35",
            color: "#ff6b35",
        },
        active: {
            background: "transparent",
            fill: "none",
            stroke: "#d1263f",
            color: "#d1263f",
        },
        disabled: {
            fill: "none",
            stroke: "#4a2229",
            background: "transparent",
        },
    },
};

/* ==========================================================================
   OTHER
   ========================================================================== */

export const roundedOceanDepthsTheme: PaginationTheme = {
    items: {
        color: "#9be7de",
        border: "none",
        borderRadius: "16px",
        background: "transparent",
        transition: "all .4s ease",
        hover: {
            color: "#ffffff",
            border: "none",
            borderRadius: "16px",
            background: "transparent",
            transition: "color 0.13s ease-in-out",
        },
        active: {
            color: "#ffffff",
            border: "none",
            borderRadius: "16px",
            background: "transparent",
        },
    },
    button: {
        background: "rgba(79,209,197,.12)",
        borderStyle: "solid",
        borderColor: "#4fd1c5",
        borderWidth: "2px",
        borderRadius: "16px",
        shadowDirectionSize: 5,
        shadowDirectionColor: "#4fd1c5",
        shadowDirectionBlur: 8,
        active: {
            background: "rgba(79,209,197,.18)",
            borderStyle: "solid",
            borderColor: "#ffffff",
            borderRadius: "16px",
            shadowDirectionColor: "#ffffff",
        },
    },
    arrows: {
        color: "#9be7de",
        fill: "none",
        stroke: "#9be7de",
        background: "transparent",
        borderRadius: "10px",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: { size: { w: 14, h: 14 } },
        hover: {
            background: "transparent",
            fill: "none",
            stroke: "#ffffff",
            color: "#ffffff",
        },
        active: {
            background: "transparent",
            fill: "none",
            stroke: "#4fd1c5",
            color: "#4fd1c5",
        },
        disabled: {
            fill: "none",
            stroke: "#2c4a52",
            background: "transparent",
        },
    },
};

export const squaredForestMossTheme: PaginationTheme = {
    items: {
        color: "#cfe3b6",
        border: "none",
        borderRadius: "10px",
        background: "transparent",
        transition: "all .4s ease",
        hover: {
            color: "#e8d9a0",
            border: "none",
            borderRadius: "10px",
            background: "transparent",
            transition: "color 0.13s ease-in-out",
        },
        active: {
            color: "#e8d9a0",
            border: "none",
            borderRadius: "10px",
            background: "transparent",
        },
    },
    button: {
        background: "rgba(123,160,91,.15)",
        borderStyle: "solid",
        borderColor: "#7ba05b",
        borderWidth: "2px",
        borderRadius: "10px",
        shadowDirectionSize: 4,
        shadowDirectionColor: "#7ba05b",
        shadowDirectionBlur: 6,
        active: {
            background: "rgba(107,68,35,.2)",
            borderStyle: "solid",
            borderColor: "#6b4423",
            borderRadius: "10px",
            shadowDirectionColor: "#6b4423",
        },
    },
    arrows: {
        color: "#cfe3b6",
        fill: "none",
        stroke: "#cfe3b6",
        background: "transparent",
        borderRadius: "8px",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: { size: { w: 14, h: 14 } },
        hover: {
            background: "transparent",
            fill: "none",
            stroke: "#e8d9a0",
            color: "#e8d9a0",
        },
        active: {
            background: "transparent",
            fill: "none",
            stroke: "#7ba05b",
            color: "#7ba05b",
        },
        disabled: {
            fill: "none",
            stroke: "#3c4433",
            background: "transparent",
        },
    },
};

export const squaredCyberpunkNeonTheme: PaginationTheme = {
    items: {
        color: "#00f6ff",
        border: "none",
        borderRadius: "4px",
        background: "transparent",
        transition: "all .4s ease",
        hover: {
            color: "#ff2e88",
            border: "none",
            borderRadius: "4px",
            background: "transparent",
            transition: "color 0.13s ease-in-out",
        },
        active: {
            color: "#ff2e88",
            border: "none",
            borderRadius: "4px",
            background: "transparent",
        },
    },
    button: {
        background: "transparent",
        borderStyle: "solid",
        borderColor: "#00f6ff",
        borderWidth: "2px",
        borderRadius: "4px",
        shadowDirectionSize: 8,
        shadowDirectionColor: "#00f6ff",
        shadowDirectionBlur: 14,
        active: {
            background: "transparent",
            borderStyle: "solid",
            borderColor: "#ff2e88",
            borderRadius: "4px",
            shadowDirectionColor: "#ff2e88",
        },
    },
    arrows: {
        color: "#00f6ff",
        fill: "none",
        stroke: "#00f6ff",
        background: "transparent",
        borderRadius: "4px",
        transition: "all 0.2s ease",
        size: { w: 34, h: 34 },
        icon: { size: { w: 14, h: 14 } },
        hover: {
            background: "transparent",
            fill: "none",
            stroke: "#ff2e88",
            color: "#ff2e88",
        },
        active: {
            background: "transparent",
            fill: "none",
            stroke: "#7b00ff",
            color: "#7b00ff",
        },
        disabled: {
            fill: "none",
            stroke: "#2a2a3a",
            background: "transparent",
        },
    },
};
