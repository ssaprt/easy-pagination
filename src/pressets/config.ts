import { PresetsType } from "src/types/pressets/pressets.type";
import { blueTheme } from "./blue-theme";

import {
    roundedAbyssalTheme,
    roundedAuroraNebulaTheme,
    roundedBlackHoleTheme,
    roundedDeepSpaceVoidTheme,
    roundedInfernoTheme,
    roundedOceanDepthsTheme,
    roundedSolarFlareTheme,
    roundedTrimstoneTheme,
    squaredCyberpunkNeonTheme,
    squaredForestMossTheme,
} from "./collection-themes";
import { darkTheme } from "./dark-theme";
import { lightBlueTheme } from "./light-blue-theme";
import { roundedRichTheme } from "./rounded-rich-theme";
import { RoundedSpaceTheme } from "./rounded-space-theme";
import { whiteTheme } from "./white-theme";

const themes = {
    blueTheme,
    lightBlueTheme,
    whiteTheme,
    darkTheme,
    roundedRichTheme,
    RoundedSpaceTheme,
    roundedAuroraNebulaTheme,
    roundedDeepSpaceVoidTheme,
    roundedSolarFlareTheme,
    roundedBlackHoleTheme,
    roundedInfernoTheme,
    roundedTrimstoneTheme,
    roundedAbyssalTheme,
    roundedOceanDepthsTheme,
    squaredForestMossTheme,
    squaredCyberpunkNeonTheme,
};

export const selectTheme = (theme?: PresetsType) => {
    switch (theme) {
        case "blue":
            return themes.blueTheme;
        case "lightBlue":
            return themes.lightBlueTheme;
        case "white":
            return themes.whiteTheme;
        case "dark":
            return themes.darkTheme;
        case "roundedRich":
            return themes.roundedRichTheme;
        case "roundedSpace":
            return themes.RoundedSpaceTheme;
        case "roundedAuroraNebula":
            return themes.roundedAuroraNebulaTheme;
        case "roundedDeepSpaceVoid":
            return themes.roundedDeepSpaceVoidTheme;
        case "roundedSolarFlare":
            return themes.roundedSolarFlareTheme;
        case "roundedBlackHole":
            return themes.roundedBlackHoleTheme;
        case "roundedInferno":
            return themes.roundedInfernoTheme;
        case "roundedTrimstone":
            return themes.roundedTrimstoneTheme;
        case "roundedAbyssal":
            return themes.roundedAbyssalTheme;
        case "roundedOceanDepths":
            return themes.roundedOceanDepthsTheme;
        case "squaredForestMoss":
            return themes.squaredForestMossTheme;
        case "squaredCyberpunkNeon":
            return themes.squaredCyberpunkNeonTheme;
        default:
            return themes.blueTheme;
    }
};
