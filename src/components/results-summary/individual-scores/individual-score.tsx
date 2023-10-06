import { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../../context/theme-context/theme-context";
import { TThemeContext } from "../../../context/theme-context/theme-context";

type IndividualScoreProps = {
    score: {
        name: string
        value: number
        colorCode: string
        iconPath: string
    }
}

export const IndividualScore = (props: IndividualScoreProps) => {
    const { activeTheme } = useContext(ThemeContext) as unknown as TThemeContext
    return (
        <StyledLi color={props.score.colorCode} $themeName={activeTheme.name}>
            <span className="icon-info">
                <img src={props.score.iconPath} alt={"icon for" + props.score.name} />
                {props.score.name}
            </span>
            <p className="score">
                {props.score.value} <span className="opacity">/ 100</span>
            </p>
        </StyledLi>
    )
} 

type TStyledLi = {
    $themeName: string
}

const StyledLi = styled.li<TStyledLi>`
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    align-items: center;
    width: 250px;
    height: 50px;
    background-color: ${props => props.color + "20"};
    color: ${props => props.color};
    border-radius: 10px;
    margin: 15px 0;

    .icon-info {
        display: flex;
        gap: 10px;
    }
    
    .score {
        color: ${props => props.$themeName === 'light' ? 'black' : '#FFFFFFDA'};
        font-weight: 700;
    }
    .score .opacity {
        opacity: 0.5;
    }
`