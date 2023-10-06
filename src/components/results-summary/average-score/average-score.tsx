import { useContext } from 'react'
import styled from "styled-components";

import { ScoreCircle } from './score-circle';

import { ThemeContext } from '../../../context/theme-context/theme-context';

import { TThemeContext } from '../../../context/theme-context/theme-context';

export const AverageScore = () => {
    const { activeTheme } = useContext(ThemeContext) as unknown as TThemeContext
    
    return(
        <StyledDiv theme={activeTheme}>
            <h1>Your Result</h1>
            <ScoreCircle />
            <h2>Great</h2>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
        </StyledDiv>
    )    
}


const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(to bottom, ${props => props.theme.gradientColor});
    max-width: 300px;
    border-radius: 25px;
    padding: 30px 50px;
    gap: 20px;

    h1 {
        color: ${props => props.theme.primaryTxtColor};
        font-size: 20px;
    }

    h2 {
        color: ${props => props.theme.primaryTxtColor};
        font-size: 28px;
    }

    p {
        color: ${props => props.theme.primaryTxtColor};
        text-align: center;
    }
`