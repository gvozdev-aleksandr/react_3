import styled, { css } from "styled-components";
import { Ul } from "@styled";

export const ListWrapper = styled.div`
    width: 280px;
    margin-right: ${( props ) => props.$marginRight ? `${props.$marginRight}px` : 'auto'};
`;

export const FooterText = css`
    color: ${({ theme }) => theme.secondaryTextColor};
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
`;

export const StyledList = styled(Ul)`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const StyledItem = styled.li`  
    position: relative;  
    padding: 0;
    padding-left: 18px;
    margin: 0;

    ${({ $isNew, theme }) => $isNew && `
        &::after {
            position: absolute;
            right: 0;
            content: 'new';
            width: 44px;
            height: 20px;
            color: ${theme.bgDark};
            background-color: ${theme.bgWhite};
            text-align: center;
            border-radius: 4px;
        }
    `}    
`;

export const StyledLink = styled.a`
    ${FooterText};
    position: relative;
    
    cursor: pointer;

    &::before {
        position: absolute;
        content: '';
        width: 7px;
        height: 7px;
        border-top: 2px solid ${({ theme }) => theme.secondaryTextColor};
        border-right: 2px solid ${({ theme }) => theme.secondaryTextColor};
        left: -22px;
        top: 4px;
        transform: rotate(45deg);
    }    

    &:hover {
        color: ${({ theme }) => theme.noteTextColor};
        text-decoration: underline;

        &::before {
            border-color: ${({ theme }) => theme.noteTextColor};
        }
    }
`;
