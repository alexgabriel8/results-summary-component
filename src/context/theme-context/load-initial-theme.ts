import { getLocalStorageItem } from "../../scripts/localStorage"
import { themeLocalStorageKey, TTheme, themes } from "../../constants/themes"

function validateTheme(theme: TTheme) {
    if(
        JSON.stringify(Object.entries(theme).sort()) === JSON.stringify(Object.entries(themes.light).sort())
        || JSON.stringify(Object.entries(theme).sort()) === JSON.stringify(Object.entries(themes.dark).sort())
    ) return theme
    else return window.matchMedia('(prefers-color-scheme: light)').matches
            ? themes.light
            : themes.dark
}

export function loadInitialTheme(): TTheme {
    const theme = getLocalStorageItem(themeLocalStorageKey) as unknown as TTheme
    if(!theme) return window.matchMedia('(prefers-color-scheme: light)').matches
                ? themes.light
                : themes.dark
    else {
        return validateTheme(theme)
    }
}