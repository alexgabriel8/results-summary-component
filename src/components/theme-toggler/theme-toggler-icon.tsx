import {useContext} from 'react'
import styled from "styled-components";

import { ThemeContext } from '../../context/theme-context/theme-context';
import { TThemeContext } from '../../context/theme-context/theme-context';
import { themes } from '../../constants/themes';

export const ThemeTogglerIcon = () => {
    const { activeTheme, setActiveTheme } = useContext(ThemeContext) as unknown as TThemeContext

    const handleClick = () => {
        if(activeTheme.name === 'light') {
            setActiveTheme(themes.dark) 
            document.querySelector('body')!.style.backgroundColor = themes.dark.bgColor
        } else if(activeTheme.name === 'dark') {
            setActiveTheme(themes.light)
            document.querySelector('body')!.style.backgroundColor = themes.light.bgColor
        }
    }
    return(
        <StyledImg
            src={
                activeTheme.name === "light"
                    ? "./assets/theme-icons/sun-regular.svg"
                    : "./assets/theme-icons/moon-regular.svg"
            }
            onClick={handleClick}
            $color={activeTheme.primary}
            alt="theme toggler icon"
        /> 
    )
}

type TStyledImg = {
    $color: string
}
const StyledImg = styled.img<TStyledImg>`
    cursor: pointer;
    padding: 5px;
    width: 80px;
    height: 55px;
    background-color: ${props => props.$color + 'dd'}; // change #303b5a50
    border-left: solid 1px #00000050;
    border-right: solid 1px #00000050;

`