import React from "react";
import { StyledButton } from "./styled";

function Button({ secondary = false, white = false, onClick, children }) {
    return (
        <StyledButton $secondary={secondary} $white={white} onClick={onClick}>
            {children}
        </StyledButton>
    );
}

export default Button;
