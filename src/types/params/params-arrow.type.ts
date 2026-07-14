export type Arrow = {
    iconElement: React.ReactNode;
    direction: "prev" | "next";
};

export type ParamsArrow = {
    arrowStart?: { use?: boolean; props?: Arrow };
    arrowEnd?: { use?: boolean; props?: Arrow };
};
