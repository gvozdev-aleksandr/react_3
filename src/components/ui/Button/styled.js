import styled from "styled-components";

export const StyledButton = styled.button`
    color: ${(props) => props.theme.secondaryTextColor};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;
    background-color: ${(props) => props.theme.primaryButtonColor};
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;
