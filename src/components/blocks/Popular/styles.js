import styled, { css } from "styled-components";
import { Container } from "@styled";

export const StyledPopular = styled.section`    
    background-color: ${({ theme }) => theme.bgWhite};
`;

const Flex = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PopularContainer = styled(Container)`
    ${Flex};
    gap: 32px;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        gap: 50px; 
    }  
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
    border: 1px solid ${({ theme }) => theme.primaryButtonColor};
    border-radius: 4px;
    cursor: pointer;
    padding: 12px 24px;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        padding: 16px 36px;
    }  

    &:hover {
        color: ${({ theme }) => theme.primaryButtonColor}; 
        background-color: ${({ theme }) => theme.secondaryButtonColor};        
    }
`;

export const SwiperWrapper = styled.div`
    width: 100%; 

    .swiper {
        width: 100%;
        overflow: hidden;   
    }

    .swiper-wrapper {
        display: flex;
        flex-direction: row;
    }    
`;
