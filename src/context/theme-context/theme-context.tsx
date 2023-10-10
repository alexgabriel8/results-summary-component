import { useState, useEffect, createContext } from "react";

import { themeLocalStorageKey } from "../../constants/themes";

import { saveOnLocalStorage } from "../../scripts/localStorage";
import { loadInitialTheme } from "./load-initial-theme";

import { TTheme } from "../../constants/themes";

import { themes } from "../../constants/themes";

export type TThemeContext = {
    activeTheme: TTheme
    setActiveTheme: React.Dispatch<React.SetStateAction<TTheme>>
}

export const ThemeContext = createContext<TThemeContext | null>(null)

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
    const [ activeTheme, setActiveTheme ] = useState(loadInitialTheme())

    useEffect(() => {
        if(activeTheme.name === 'light') {
            document.querySelector('body')!.style.backgroundColor = themes.light.bgColor
        } else if(activeTheme.name === 'dark') {
            document.querySelector('body')!.style.backgroundColor = themes.dark.bgColor
        }
    }, [])
    useEffect(() => {
        saveOnLocalStorage(themeLocalStorageKey, activeTheme)
    }, [activeTheme])

    return(
        <ThemeContext.Provider value={{activeTheme, setActiveTheme}!}>
            {children}
        </ThemeContext.Provider>
    )
}