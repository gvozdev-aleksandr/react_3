import styled, { css } from "styled-components";
import { Container } from "@styled";

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

export const ProggramButton = styled.button`
    align-self: flex-start;
    color: ${(props) => props.theme.secondaryTextColor};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;
    background-color: ${(props) => props.theme.primaryButtonColor};
    padding: 15px 36px;
    border: 1px solid ${(props) => props.theme.primaryButtonColor};
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.primaryButtonColor}; 
        background-color: ${(props) => props.theme.secondaryButtonColor};        
    }
`;

export const PhotoWrapper = styled.div`
    display: none;
    width: 510px;
    height: 510px;
    
    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        display: block;
    }  
`;
