import { describe, expect, it, beforeEach, vi } from "vitest";

import { loadInitialTheme } from "./load-initial-theme";
import { saveOnLocalStorage} from "../../scripts/localStorage";

import { themes } from "../../constants/themes";

describe('Load theme in Local Storage', () => {
    const key = 'lastUsedTheme'

    beforeEach(() => {
        localStorage.clear()
    })
    
    it("Should load light theme saved in local storage even if user prefers dark", () => {
        Object.defineProperty(window, 'matchMedia', {
            value: vi.fn().mockImplementation(() => ({
              matches: false,
            })),
          })
          console.log(window.matchMedia('(prefers-color-scheme: light)').matches)
        saveOnLocalStorage(key, themes.light)
        expect(loadInitialTheme()).toStrictEqual(themes.light)
    })

    it("Should load dark theme saved in local storage even if user prefers light", () => {
        Object.defineProperty(window, 'matchMedia', {
            value: vi.fn().mockImplementation(() => ({
              matches: true,
            })),
          })

        saveOnLocalStorage(key, themes.dark)
        expect(loadInitialTheme()).toStrictEqual(themes.dark)
    })

    it("Should load light theme if user prefers it and none is found in local storage", () => {
        Object.defineProperty(window, 'matchMedia', {
            value: vi.fn().mockImplementation(() => ({
              matches: true,
            })),
          })
        expect(loadInitialTheme()).toStrictEqual(themes.light)
    })

    it("Should load dark theme if user prefers it and none is found in local storage", () => {
        Object.defineProperty(window, 'matchMedia', {
            value: vi.fn().mockImplementation(() => ({
              matches: false,
            })),
          })
        expect(loadInitialTheme()).toStrictEqual(themes.dark)
    })
})