export type TTheme = {
    name: string
    primary: string
    primaryTxtColor: string
    primaryTxtColorAlt: string
    bgColor: string
    gradientColor: string
    sectionBoxShadowColor: string
}

export type TThemes = {
    [index: string]: TTheme
}

export const themes: TThemes = {
    light: {
        name: "light",
        primary: "#303b5a",
        primaryTxtColor: "#c8c7ff",
        primaryTxtColorAlt: "#ebf1ff",
        bgColor: '#FFFFFF',
        gradientColor: "#7857ff, #2e2be9",
        sectionBoxShadowColor: '#00000015'
    },
    
    dark: {
        name: "dark",
        primary: "#3b4153", // #3b4153 #608aff
        primaryTxtColor: "#111111",
        primaryTxtColorAlt: "#ebf1ff",
        bgColor: '#101010',
        gradientColor: "#7857ff, #2e2be9",
        sectionBoxShadowColor: "#2d2d2d"
    }
}