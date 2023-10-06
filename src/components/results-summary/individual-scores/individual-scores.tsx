import { useContext } from 'react'
import styled from "styled-components";

import { IndividualScore } from "./individual-score";

import scoreInfo from './score-info.json'

import { Button } from "../../button";

import { ThemeContext } from '../../../context/theme-context/theme-context';
import { TThemeContext } from '../../../context/theme-context/theme-context';

export const IndividualScores = () => {
    const { activeTheme } = useContext(ThemeContext) as unknown as TThemeContext
    return (
        <StyledDiv $themeName={activeTheme.name}>
            <h2>Summary</h2>
            <ul>
                {
                    scoreInfo.scores.map((score, index) => (
                        <IndividualScore key={index} score={score} />
                    ))
                }
            </ul>
            <Button>
                Continue
            </Button>
        </StyledDiv>
    )
}

type TStyledDiv = {
    $themeName: string
}

const StyledDiv = styled.div<TStyledDiv>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
    margin: 0 auto;
    padding: 40px 20px;

    h2 {
        color: ${props => props.$themeName === 'light' ? 'black' : 'white'};
    }
`