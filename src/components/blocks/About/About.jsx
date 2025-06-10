import React from "react";
import Title, { TitleSize } from "@ui/Title/title";
import Form from "../Form/Form";
import { StyledAbout, StyledContainer } from "./styled";

function About() {
    return (
        <StyledAbout id="about">
            <StyledContainer>
                <Title size={TitleSize.BIG} color='#fdfdfd' $uppercase $marginBottom={41}>
                    Насладись прогулкой в горы с&nbsp;командой единомышленников
                </Title>
                <Form />
            </StyledContainer>
        </StyledAbout>
    );
}

export default About;
