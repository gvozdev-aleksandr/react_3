import styled from "styled-components";
import { Img } from "@styled";

export const StyledGuide = styled.section`
    display: grid;
    grid-template-columns: 480px 1fr;
    gap: 120px;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: ${(props) => props.theme.bgWhite};
`;

export const ImageWrapper = styled.div`
    position: relative;
    min-height: 526px;
`;

export const StyledImg = styled(Img)`
    position: absolute;
    top: ${({ $isFront }) => $isFront ? '126px' : '0'};
    left: ${({ $isFront }) => $isFront ? '130px' : '0'};
    width: 350px;
    height: 400px;
    border-radius: 24px;
`;

export const TextWrapper = styled.div`    
    padding: 64px 0;
    font-size: 18px;
    line-height: 150%;
    color: ${(props) => props.theme.primaryTextColor}
`;

export const TitleWrapper = styled.div`
    padding: 0;
    margin: 0;
`;

export const StyledText = styled.p`
    padding: 0;
    margin: 0;
    margin-bottom: 40px;
    font-size: 20px;
    line-height: 150%;
    font-weight: 400;
`;

export const StyledButton = styled.button`    
    padding: 16px 33px;
    text-align: center;
    color: ${(props) => props.theme.secondaryButtonColor};
    background-color: ${(props) => props.theme.primaryButtonColor};
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 0.02em;
    border-radius: 4px;
    border: none;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.primaryButtonColor};
        background-color: ${(props) => props.theme.secondaryButtonColor};
        outline: 2px solid ${(props) => props.theme.primaryButtonColor};
    }
`;
