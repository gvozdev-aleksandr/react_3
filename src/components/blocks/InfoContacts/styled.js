import styled, { css } from "styled-components";
import { Ul } from "@styled";

export const FooterText = css`
    color: ${({ theme }) => theme.bgWhite};
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
`;

export const ContactsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 480px;
       
    color: ${({ theme }) => theme.bgWhite};

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        min-height: 263px; 
        padding-right: 24px;
        margin-right: 20px;   
    } 
`;

export const InfoDescription = styled.p`
    ${FooterText};
    display: block;    
    margin: 0;    
    margin-bottom: 30px;
    line-height: 20px;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        margin-bottom: auto;  
    } 
`;

export const ContactsLinks = styled.div`    
    display: flex;
    gap: 24px;
    margin-bottom: 32px;
`;

export const Link = styled.a`
    ${FooterText};
    color: ${({ $color, theme }) => $color || theme.bgWhite};
    font-weight: 600;

    &:hover {
        color: ${({ theme }) => theme.noteTextColor};
    }

    svg {
        fill: currentColor;
    }
`;

export const SocialList = styled(Ul)`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;

export const SocialItem = styled.li`
    width: 32px;
    height: 32px;
`;

export const SocialLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: color 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;