import styled from "styled-components";

import { closeModal } from "./close-modal";

export const ModalCloseButton = () => {
    const handleClick = () => {
        closeModal()
    }
    return(
        <StyledImg
         src="./assets/xmark-solid.svg"
         onClick={handleClick}
        />
    )
}

const StyledImg = styled.img`
    width: 30px;
    cursor: pointer;
    align-self: flex-end;
`