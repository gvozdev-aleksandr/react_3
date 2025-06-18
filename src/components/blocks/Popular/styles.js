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
