import React from "react";
import { CardWrapper, PopularImage, Overlay, StarWrapper, StarIcon, StarNumber, TextWrapper, TitleWrapper, TitleDescription, Price, StyledText, Button } from "./styled";
import Title, { TitleSize } from "@ui/Title/title";
import Icon from "@assets/icons/star-icon.svg?react";

function PopularCard({ src, name, description, text, price, star }) {
    return (
        <CardWrapper>
            <PopularImage src={src} alt={name} />
            <StarWrapper>
                <StarIcon>
                    <Icon />
                </StarIcon>
                <StarNumber>{star}</StarNumber>
            </StarWrapper>
            <Overlay>
                <TextWrapper>
                    <TitleWrapper>
                        <Title size={TitleSize.SMALL} color="#fdfdfd" $marginBottom={0}>{name}</Title>
                        <TitleDescription>{description}</TitleDescription>
                        <Price>{price}</Price>
                    </TitleWrapper>
                    <StyledText>{text}</StyledText>
                    <Button>'Программа тура'</Button>
                </TextWrapper>
            </Overlay>
        </CardWrapper>
    );
}

export default PopularCard;
