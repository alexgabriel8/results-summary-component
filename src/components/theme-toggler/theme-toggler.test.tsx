import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { ThemeToggler } from "./theme-toggler";
import { ThemeProvider } from '../../context/theme-context/theme-context';
import { themes } from '../../constants/themes';

import { getLocalStorageItem } from '../../scripts/localStorage';

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
  
describe('Click on theme toggler icon', () => {
    const key = 'lastUsedTheme'
    matchMediaMock.false()

    const user = userEvent.setup()

    const { getByAltText } = render(
        <ThemeProvider>
            <ThemeToggler />
        </ThemeProvider>
    )

    it('Should save new theme in Local Storage', async () => {
        const toggler = getByAltText('theme toggler icon')

        expect(getLocalStorageItem(key)).toStrictEqual(themes.dark)
        await user.click(toggler)
        expect(getLocalStorageItem(key)).toStrictEqual(themes.light)
    })
})