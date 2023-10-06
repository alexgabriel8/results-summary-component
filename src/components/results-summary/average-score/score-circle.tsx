import { useContext } from 'react'
import styled from "styled-components";

import { ThemeContext } from '../../../context/theme-context/theme-context';

import { TThemeContext } from '../../../context/theme-context/theme-context';

export const ScoreCircle = () => {
    const { activeTheme } = useContext(ThemeContext) as unknown as TThemeContext
    
    return (
        <StyledDiv theme={activeTheme}>
            <span className="highlighted">76</span>
            <span className='semi-visible'>of 100</span>
        </StyledDiv>
    )
}


const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-image: linear-gradient(to bottom, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0));
    width: 175px;
    height: 175px;

    .highlighted {
        font-weight: bold;
        font-size: 58px;
        color: ${props => props.theme.name === 'light' ? 'white' : 'black'};
    }

    .semi-visible {
        color: ${props => props.theme.primaryTxtColor};
        opacity: 0.6;
    }
`