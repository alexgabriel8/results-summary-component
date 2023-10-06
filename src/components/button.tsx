import { useContext } from 'react';
import styled from "styled-components";

import { ThemeContext } from '../context/theme-context/theme-context';
import { TThemeContext } from '../context/theme-context/theme-context';

export const Button = ({children}: React.PropsWithChildren) => {
    const { activeTheme } = useContext(ThemeContext) as unknown as TThemeContext
    return(
        <StyledButton theme={activeTheme}>
            {children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    border-radius: 25px;    
    background-color: ${props => props.theme.primary};
    color: white;
    height: 50px;
    cursor: pointer;
    
    &&:hover {
        background-image: linear-gradient(to bottom, ${props => props.theme.gradientColor});
    }
`