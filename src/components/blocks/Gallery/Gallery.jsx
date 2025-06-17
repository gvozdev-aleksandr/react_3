import React from "react";
import { StyledGallery, GalleryContainer, TitleWrapper, DesktopGallery, GalleryItem, StyledImg, MobileSwiper, GalleryButton } from "./styled";
import { SwiperSlide } from 'swiper/react';
import Title from "@ui/Title/title";
import TitleNotice from "@ui/TitleNotice/titleNotice";
import { GalleryPhotos } from "@mocks/galleryPhotos";

function Gallery() {
    return (
        <StyledGallery>
            <GalleryContainer>
                <TitleWrapper>
                    <TitleNotice>фото-отчет</TitleNotice>
                    <Title $marginBottom={0}>Делимся впечатлениями</Title>
                </TitleWrapper> 
                <DesktopGallery>
                    {GalleryPhotos.length > 0 &&
                        GalleryPhotos.map((photo) => (
                            <GalleryItem key={photo.id}>
                                <StyledImg src={photo.src} alt={photo.alt} />
                            </GalleryItem>
                        ))                    
                    }
                </DesktopGallery>

                <MobileSwiper                    
                    direction="horizontal"
                    spaceBetween={20}
                    slidesPerView="auto"                        
                    freeMode={true}
                    grabCursor={true}                        
                    loop={true} 
                >
                    {GalleryPhotos.length > 0 && 
                        GalleryPhotos.map((photo) => (
                            <SwiperSlide key={photo.id}>
                                <StyledImg src={photo.src} alt={photo.alt} />
                            </SwiperSlide> 
                        ))                    
                    }
                </MobileSwiper>
                <GalleryButton>Наш pinterest</GalleryButton>               
            </GalleryContainer>
        </StyledGallery>
    );
}

export default Gallery;
