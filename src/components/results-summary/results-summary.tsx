import { useContext } from 'react'
import styled from "styled-components";

import { ThemeContext, TThemeContext } from '../../context/theme-context/theme-context';
import { AverageScore } from "./average-score/average-score";
import { IndividualScores } from "./individual-scores/individual-scores";

import { mobile } from "../../constants/breakpoints";

export const ResultsSummary = () => {
    const { activeTheme } = useContext(ThemeContext) as unknown as TThemeContext

    return(
        <StyledSection $boxShadowColor={activeTheme.sectionBoxShadowColor} >
            <AverageScore />
            <IndividualScores />
        </StyledSection>
    )
}

type TStyledSection = {
    $boxShadowColor: string
}

const StyledSection = styled.section<TStyledSection>`
    display: flex;
    box-shadow: 5px 5px 20px ${props => props.$boxShadowColor};
    border-radius: 25px;
    margin: 100px 0;

    @media (max-width: ${mobile}px) {
        flex-direction: column;
    }
`