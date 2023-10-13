import { useContext } from 'react'
import styled from "styled-components"

import { ModalCloseButton } from "./modal-close-button/modal-close-button";

import { ThemeContext, TThemeContext } from "../../context/theme-context/theme-context";
import { TTheme } from '../../constants/themes';

export const Modal = ({children}: React.PropsWithChildren) => {
    const { activeTheme } = useContext(ThemeContext) as unknown as TThemeContext

    return(
        <Background className="modal-background">
            <StyledDiv $theme={activeTheme}>
                <ModalCloseButton />
                <p>{children}</p>
            </StyledDiv>
        </Background>
    )
}

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000000AA;
    display: none;
    
    &&.open {
        display: block;
    }
`

type TStyledDiv = {
    $theme: TTheme
}
const StyledDiv = styled.div<TStyledDiv>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px 20px 20px 20px;
    background-color: ${props => props.$theme.primary};
    color: ${props => props.$theme.primaryTxtColorAlt};
    width: 300px;
    border-radius: 25px;
    border: solid 2px black;
`