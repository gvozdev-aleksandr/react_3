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
    min-height: 263px;
    padding-right: 24px;
    margin-right: 20px;
    color: ${({ theme }) => theme.bgWhite};
`;

export const InfoDescription = styled.p`
    ${FooterText};
    display: block;
    max-width: 480px;
    margin: 0;    
    margin-bottom: auto;
    line-height: 20px;
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