

// Make Type theme
// Structure Theme
// Make dark theme

export type TTheme = {
    primary: string
    primaryTxtColor: string
    primaryTxtColorAlt: string
    bgColor: string
    cardGradientColor: string
    circleGradientColor: string

    stat1Color: string
    stat2Color: string
    stat3Color: string
    stat4Color: string
}

export type TThemes = {
    [index: string]: TTheme
}

export const themes: TThemes = {
    light: {
        primary: "#303b5a",
        primaryTxtColor: "#c8c7ff",
        primaryTxtColorAlt: "#ebf1ff",
        bgColor: '#FFFFFF',
        cardGradientColor: "#7857ff, #2e2be9",
        circleGradientColor: "hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0)",

        stat1Color: "#ff5757",
        stat2Color: "#ffb01f",
        stat3Color: "#00bd91",
        stat4Color: "#1125d4"
    },
    dark: {
        primary: "#aaaaaa",
        primaryTxtColor: "#111111",
        primaryTxtColorAlt: "#ebf1ff",
        bgColor: '#FFFFFF',
        cardGradientColor: "#7857ff, #2e2be9",
        circleGradientColor: "hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0)",

        stat1Color: "#ff5757",
        stat2Color: "#ffb01f",
        stat3Color: "#00bd91",
        stat4Color: "#1125d4"
    }
}