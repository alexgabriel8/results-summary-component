import { useState, useEffect, createContext } from "react";

import { saveOnLocalStorage } from "../../scripts/localStorage";
import { loadInitialTheme } from "./load-initial-theme";

import { TTheme } from "../../constants/themes";

type TThemeContext = {
    activeTheme: TTheme
    setActiveTheme: React.Dispatch<React.SetStateAction<TTheme>>
}

const ThemeContext = createContext<TThemeContext | null>(null)

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
    const [ activeTheme, setActiveTheme ] = useState(loadInitialTheme())

    useEffect(() => {
        saveOnLocalStorage('lastUsedTheme', activeTheme)
    }, [activeTheme])

    return(
        <ThemeContext.Provider value={{activeTheme, setActiveTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, TThemeContext, ThemeProvider}