import { getLocalStorageItem } from "../../scripts/localStorage"

import { themes } from "../../constants/themes"

export function loadInitialTheme() {
    return getLocalStorageItem('lastUsedTheme') ?? (
                window.matchMedia('(prefers-color-scheme: light)').matches
                ? themes.light
                : themes.dark
            )
}