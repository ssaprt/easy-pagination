import { ThemeArrow } from "./theme-arrows.type";
import { ThemeTrackButton } from "./theme-button-track.type";
import { ThemeItem } from "./theme-item-track.type";
import { ThemeMain } from "./theme-main.type";
import { ThemeNavigation } from "./theme-navigation.type";
import { ThemeTrack } from "./theme-track.type";

export interface ThemePagination {
    // Parent
    style?: Omit<
        React.CSSProperties,
        "display" | "flexDirection" | "alignItems" | "justifyContent"
    >;
    className?: string;
    // children
    arrows?: ThemeArrow;
    items?: ThemeItem;
    button?: ThemeTrackButton;
    track?: ThemeTrack;
    navigation?: ThemeNavigation;
    main?: ThemeMain;
}
