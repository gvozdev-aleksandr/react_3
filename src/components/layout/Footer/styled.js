import styled, { css } from "styled-components";
import { Container, Ul } from "@styled";

export const StyledFooter = styled.footer`
    color: ${({ theme }) => theme.secondaryTextColor}
`;

export const FooterContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FooterText = css`
    color: ${({ theme }) => theme.bgWhite};
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
`;

export const InfoWrapper = styled.div`
    padding: 179px 0 80px;    
    background-color: ${({ theme }) => theme.primaryButtonColor};
`;

export const CopyrightWrapper = styled.div`
    padding: 24px 0;
    margin: 0;
    background-color: ${({ theme }) => theme.primaryTextColor};
`;

export const CopyrightName = styled.span`    
    ${FooterText};
    font-weight: 600;
`;

export const CopyrightPolicy = styled.a`
    ${FooterText};
    font-weight: 600;

    &:hover {
        color: ${({ theme }) => theme.noteTextColor};
    }
`;
