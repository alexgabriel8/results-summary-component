import { describe, expect, it, beforeEach, vi } from "vitest";

import { loadInitialTheme } from "./load-initial-theme";
import { saveOnLocalStorage } from "../../scripts/localStorage";

import { themes } from "../../constants/themes";

const matchMediaMock = {
  true: () => (
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn().mockImplementation(() => ({
        matches: true,
      }))
    })
  ),

  false: () => (
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn().mockImplementation(() => ({
        matches: false,
      }))
    })
  )
}

describe('Load theme', () => {
  const key = 'lastUsedTheme'

  beforeEach(() => {
    localStorage.clear()
  })

  describe("Theme saved in local storage", () => {
    it("Should load light theme saved in local storage even if user prefers dark", () => {
      matchMediaMock.false()

      saveOnLocalStorage(key, themes.light)
      expect(loadInitialTheme()).toStrictEqual(themes.light)
    })

    it("Should load dark theme saved in local storage even if user prefers light", () => {
      matchMediaMock.true()

      saveOnLocalStorage(key, themes.dark)
      expect(loadInitialTheme()).toStrictEqual(themes.dark)
    })
  })

  describe("No theme in local storage", () => {
    it("Should load light theme if user prefers it and none is found in local storage", () => {
      matchMediaMock.true()

      expect(loadInitialTheme()).toStrictEqual(themes.light)
    })

    it("Should load dark theme if user prefers it and none is found in local storage", () => {
      matchMediaMock.false()

      expect(loadInitialTheme()).toStrictEqual(themes.dark)
    })
  })
})