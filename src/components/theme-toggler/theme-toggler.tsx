import { useRef, useContext } from "react";
import styled from "styled-components";

import { ThemeContext, TThemeContext } from "../../context/theme-context/theme-context";
import { ThemeTogglerIcon } from "./theme-toggler-icon";


export const ThemeToggler = () => {
    const styledDivRef = useRef<HTMLDivElement>(null!)
    const { activeTheme } = useContext(ThemeContext) as unknown as TThemeContext

    const handleClick = () => {
        styledDivRef.current.classList.toggle("clicked")
    }

    return(
        <WrapperDiv ref={ styledDivRef }>
            <ThemeTogglerIcon />
            <StyledDiv $gradient={activeTheme.gradientColor} onClick={ handleClick }>
                <img src="./assets/angle-down-solid.svg" alt="arrow down icon" className="arrow" />
            </StyledDiv>
        </WrapperDiv>
    )
}

const WrapperDiv = styled.div`
    width: 80px;
    position: absolute;
    top: -55px;
    transition: top 0.5s ease-out;

    margin: 0 auto 0 auto;
    left: 0;
    right: 0;

    &&.clicked {
        top: 0px;
    }

    &&.clicked .arrow {
        transform: rotate(180deg);
    }
`

type TStyledDiv = {
    $gradient: string
}

const StyledDiv = styled.div<TStyledDiv>`
    height: 25px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 50px 50px;
    background-image: linear-gradient(to bottom, ${props => props.$gradient});
    margin-top: -5px;

    cursor: pointer;
    .arrow {
        width: 25px;
        transition: transform 0.3s;
    }

`