import styled, { css } from "styled-components";
import { Container } from "@styled";

export const StyledPopular = styled.section`
    padding-top: 80px;
    padding-bottom: 100px;
    background-color: ${({ theme }) => theme.bgWhite};
`;

const Flex = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PopularContainer = styled(Container)`
    ${Flex};
    gap: 50px;
`;

export const TitleWrapper = styled.div`
    ${Flex};
`;

export const PopularButton = styled.button`
    color: ${({ theme }) => theme.secondaryTextColor};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;
    background-color: ${({ theme }) => theme.primaryButtonColor};
    padding: 16px 36px;
    border: 1px solid ${({ theme }) => theme.primaryButtonColor};
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.primaryButtonColor}; 
        background-color: ${({ theme }) => theme.secondaryButtonColor};        
    }
`;

export const SwiperWrapper = styled.div`
    width: 100%; 

    .swiper {
        width: 100%;
        overflow: visible;   
    }

    .swiper-wrapper {
        display: flex;
        flex-direction: row;
    }
  
    .swiper-slide {
        width: auto; 
        height: auto;
        flex-shrink: 0; /* Предотвращает сжатие слайдов */
    }
`;
