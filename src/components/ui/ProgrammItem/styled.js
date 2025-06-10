import styled from "styled-components";
import { Ul } from "@styled";

export const StyledList = styled(Ul)`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        gap: 40px;
    } 
`;

export const StyledItem = styled.li`
    padding: 0;
    margin: 0;
    display: flex;    
    gap: 16px;
    min-height: 64px;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        align-items: center;
    } 
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
`;

export const Description = styled.p`
    padding: 0;
    margin: 0;    
    color: #000000;
`;
