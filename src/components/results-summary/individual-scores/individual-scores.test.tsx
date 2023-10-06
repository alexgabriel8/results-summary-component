import { it, vi } from "vitest";
import { render } from "@testing-library/react";

import { IndividualScores } from "./individual-scores";

import { ThemeProvider } from "../../../context/theme-context/theme-context";
import scoreInfo from './score-info.json'

it("Should render all scores and their values", () => {
    Object.defineProperty(window, 'matchMedia', {
        value: vi.fn().mockImplementation(() => ({
          matches: true
        }))
    })

    const { getByText } = render(
        <ThemeProvider>
            <IndividualScores />
        </ThemeProvider>
    )

    scoreInfo.scores.forEach((score) => {
        getByText(score.name)
        getByText(score.value)
    })
})