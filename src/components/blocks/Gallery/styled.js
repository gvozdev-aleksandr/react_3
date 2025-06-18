import styled from "styled-components";
import { Container, Ul, Img } from "@styled";
import { GALLERY_ITEM } from "./const";
import { Swiper } from 'swiper/react';
import { StyledButton } from "@ui/Button/styled";

export const StyledGallery = styled.section`
    background-color: ${({ theme }) => theme.bgWhite};    
`;

export const GalleryContainer = styled(Container)`
    padding-bottom: 198px;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    margin-bottom: 40px;  
`;

export const GalleryList = styled(Ul)`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: ${({ theme }) => theme.mobilePaddingY};
`;

export const DesktopGallery = styled(GalleryList)`
    display: none;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        display: flex;
    }
`;

export const GalleryItem = styled.li`
    padding: 0;
    margin: 0;
    width: ${GALLERY_ITEM.width};
    height: ${GALLERY_ITEM.height};

    &:nth-child(4n + 1) {
        width: ${GALLERY_ITEM.widthLarge};

        img {
            width: 100%;
        }
    }
`;

export const StyledImg = styled(Img)`
    width: ${GALLERY_ITEM.width};
    height: 100%;
    object-fit: cover; 
`;

export const MobileSwiper = styled(Swiper)`    
    display: block;
    margin-bottom: ${({ theme }) => theme.mobilePaddingY};
    overflow: hidden;
        
        .swiper-wrapper {
            display: flex;
        }
        
        .swiper-slide {
            width: ${GALLERY_ITEM.width};
            height: ${GALLERY_ITEM.height};
        }

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        display: none;
    }
`;

export const GalleryButton = styled(StyledButton)`
    display: block;    
    margin: 0 auto; 
`;
