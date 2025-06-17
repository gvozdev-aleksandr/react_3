import styled, { css } from "styled-components";
import { Container } from "@styled";

export const StyledFooter = styled.footer`    
    color: ${({ theme }) => theme.secondaryTextColor};    
`;

export const FooterContainer = styled(Container)`
    width: 100%;
    padding: 0;  
    background-color: ${({ theme }) => theme.primaryButtonColor};
`;

export const FooterText = css`
    color: ${({ theme }) => theme.bgWhite};
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
`;

export const InfoWrapper = styled(Container)`
    padding-bottom: 80px;    
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: space-between;
    align-items: start;
    background-color: ${({ theme }) => theme.primaryButtonColor};

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {        
        flex-direction: row;  
        gap: 0;  
        padding-top: 178px;        
    }  
`;

export const CopyrightContainer = styled(Container)` 
    width: 100%;
    padding: 20px 47px;
    display: grid;
    grid-template-columns: 1fr min(390px, 100%) 1fr;        
    background-color: ${({ theme }) => theme.primaryTextColor};

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {        
        grid-template-columns: 1fr min(1180px, 100%) 1fr;           
        padding: 24px 0; 
    } 
`;

export const CopyrightWrapper = styled.div`
    grid-column: 2 / 3;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;     
    padding: 0;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {   
        flex-direction: row;     
        justify-content: space-between;              
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
