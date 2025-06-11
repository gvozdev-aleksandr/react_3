import styled, { css } from "styled-components";
import { Container, Ul } from "@styled";

export const StyledFooter = styled.footer`
    color: ${({ theme }) => theme.secondaryTextColor}
`;

export const FooterContainer = styled(Container)`
    padding: 0;  
    background-color: ${({ theme }) => theme.primaryButtonColor};
`;

export const FooterText = css`
    color: ${({ theme }) => theme.bgWhite};
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
`;

export const InfoWrapper = styled.div`    
    padding: 50px 16px 80px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: space-between;
    align-items: start;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        flex-direction: row;  
        gap: 0;  
        padding: 178px 370px 80px;    
    }  
`;

export const CopyrightWrapper = styled.div`    
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: space-between;
    align-items: center;     
    padding: 20px 47px;
    margin: 0;
    background-color: ${({ theme }) => theme.primaryTextColor};

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        flex-direction: row;  
        align-items: start; 
        gap: 0;   
        padding: 24px 370px; 
    } 
`;

export const CopyrightName = styled.span`    
    ${FooterText};
    font-weight: 600;
`;

export const CopyrightPolicy = styled.a`
    ${FooterText};    

    &:hover {
        color: ${({ theme }) => theme.noteTextColor};
    }
`;
