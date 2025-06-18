import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    display: block;
    font-size: 16px;
    line-height: ${({ theme }) => theme.primaryLineHeight};
    letter-spacing: ${({ theme }) => theme.letterSpacing};
    color: ${({ theme }) => theme.secondaryTextColor};
    background-color: ${({ theme }) => theme.primaryButtonColor};
    padding: 11px 23px;
    border: 1px solid ${({ theme }) => theme.primaryButtonColor};
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.primaryButtonColor}; 
        background-color: ${({ theme }) => theme.secondaryButtonColor};        
    }

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        padding: 16px 36px;
    }

    ${(props) => props.$secondary &&
        css`
            display: none;

            @media (min-width: ${({ theme }) => theme.desktopWidth}) {
                display: block;
                padding: 11px 23px;
            }
        `}

    ${(props) => props.$white &&
        css`
            color: ${(props) => props.theme.primaryButtonColor};
            background-color: ${(props) => props.theme.secondaryButtonColor}; 

            &:hover {
                color: ${(props) => props.theme.secondaryButtonColor};
                background-color: ${(props) => props.theme.primaryButtonColor};
            }
        `}
`;
