import React from "react";
import { StyledGuide, ImageWrapper, StyledImg, TextWrapper } from "./styled";
import backImage from '@assets/guide/back-image.png';
import frontImage from '@assets/guide/front-image.png';

function Guide() {
    return (
        <StyledGuide>
            <ImageWrapper>
                <StyledImg src={backImage} alt='back-image' />
                <StyledImg src={frontImage} alt='back-image' $isFront />
            </ImageWrapper>
            <TextWrapper>
                
            </TextWrapper>
        </StyledGuide>
    );
}

export default Guide;
