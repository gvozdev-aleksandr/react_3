import styled, { css } from "styled-components";
import { Container, Ul } from "@styled";

export const StyledProgramms = styled.section`
    padding-top: 80px;
    padding-bottom: 100px;
    background-color: ${({ theme }) => theme.bgLightGrey};
`;

export const ProgrammsContainer = styled(Container)`
    display: grid;
    grid-template-columns: 580px 510px;
    justify-content: space-between;
    align-items: center;
`;

const Flex = css`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const ProgrammsWrapper = styled.div`
    ${Flex};
`;

export const StyledText = styled.p`
    padding: 0;
    margin: 0;
    font-size: 18px;
    line-height: 150%;
    font-weight: 400;
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
    width: 510px;
    height: 510px;    
`;
