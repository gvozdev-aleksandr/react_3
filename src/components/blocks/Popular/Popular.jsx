import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledPopular, PopularContainer, TitleWrapper, PopularButton, SwiperWrapper } from "./styles";
import Title from "@ui/Title/title";
import TitleNotice from "@ui/TitleNotice/titleNotice";
import PopularCard from "@ui/PopularCard/PopularCard";
import { PopularList } from "@mocks/popularList";

function Popular() {
    return (
        <StyledPopular id='section4'>
            <PopularContainer>
                <TitleWrapper>
                    <TitleNotice>по версии отдыхающих</TitleNotice>
                    <Title $marginBottom={0}>Популярные направления</Title>
                </TitleWrapper>                
                <SwiperWrapper>
                    <Swiper                        
                        spaceBetween={20}
                        //slidesPerView="auto"
                        breakpoints={{
                            380: { slidesPerView: 1 },    // Но здесь фиксированное количество
                            1920: { slidesPerView: 3 }
                        }}
                        freeMode={true}
                        grabCursor={true}                        
                        //loop={true}                   
                    >
                        {PopularList.map((item) => (
                            <SwiperSlide key={item.id}>
                                <PopularCard {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperWrapper>
                <PopularButton>Рейтинг направлений</PopularButton>
            </PopularContainer>
        </StyledPopular>
    );
}

export default Popular;
