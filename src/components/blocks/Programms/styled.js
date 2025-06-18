import styled, { css } from "styled-components";
import { Container } from "@styled";
import { StyledButton } from "@ui/Button/styled";

export const StyledProgramms = styled.section`    
    background-color: ${({ theme }) => theme.bgLightGrey};
`;

export const ProgrammsContainer = styled(Container)`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        grid-template-columns: 580px 510px;
    }  
`;

const Flex = css`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        gap: 40px;
    }  
`;

export const ProgrammsWrapper = styled.div`
    ${Flex};
`;

export const StyledText = styled.p`
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        font-size: 18px;
    } 
`;

export const ProggramButton = styled(StyledButton)`
    align-self: flex-start;       
`;

export const PhotoWrapper = styled.div`
    display: none;
    width: 510px;
    height: 510px;
    
    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        display: block;
    }  
`;
