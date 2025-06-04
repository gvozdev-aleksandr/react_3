import React from "react";
import { StyledGuide, ImageWrapper, StyledImg, TextWrapper, TitleWrapper, StyledText, StyledButton } from "./styled";
import backImage from '@assets/guide/back-image.png';
import frontImage from '@assets/guide/front-image.png';
import { TitleNotice } from "@ui/TitleNotice/titleNotice";
import { Title, TitleSize } from "@ui/Title/title";

function Guide() {
    return (
        <StyledGuide>
            <ImageWrapper>
                <StyledImg src={backImage} alt='back-image' />
                <StyledImg src={frontImage} alt='back-image' $isFront />
            </ImageWrapper>
            <TextWrapper>
                <TitleWrapper>
                    <TitleNotice>о нашем походе</TitleNotice>
                    <Title size={TitleSize.MEDIUM}>Исследуйте все горные массивы мира вместе с нами</Title>
                </TitleWrapper>
                <StyledText>
                    Его корни уходят в один фрагмент классической латыни 45 года н.э.,&nbsp;то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
                </StyledText>
                <StyledButton>Программа тура</StyledButton>
            </TextWrapper>
        </StyledGuide>
    );
}

export default Guide;
