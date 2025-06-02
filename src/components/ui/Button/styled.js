import styled from "styled-components";

export const StyledButton = styled.button`
    color: ${(props) => props.theme.secondaryTextColor};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;
    background-color: ${(props) => props.theme.primaryButtonColor};
    padding: 11px 23px;
    border: 1px solid ${(props) => props.theme.primaryButtonColor};
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.primaryButtonColor}; 
        background-color: ${(props) => props.theme.secondaryButtonColor};        
    }
`;
