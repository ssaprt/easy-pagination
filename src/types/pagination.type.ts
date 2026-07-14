import { ParamsPagination } from "./params/params.interface";
import { PresetsType } from "./pressets/pressets.type";
import { URLType } from "./search/url.type";
import { ThemePagination } from "./theme/theme.interface";

export type PaginationType<T> = {
    items: T[];
    children: React.ReactNode;
    mode?: "vertical" | "horizontal";
    navigation?: "start" | "end" | "full";
    itemsPerPage?: number;
    theme?: ThemePagination;
    selectTheme?: PresetsType;
    animationSpeed?: `${number}ms`;
    indexing?: URLType;
} & ParamsPagination;
