import styled from "styled-components";

export const StyledButton = styled.button`
    color: ${({ theme }) => theme.secondaryTextColor};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;
    background-color: ${({ theme }) => theme.primaryButtonColor};
    padding: 11px 23px;
    border: 1px solid ${({ theme }) => theme.primaryButtonColor};
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.primaryButtonColor}; 
        background-color: ${({ theme }) => theme.secondaryButtonColor};        
    }
`;
