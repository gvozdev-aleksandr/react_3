import React from "react";
import Title, { TitleSize } from "@ui/Title/title";
import Form from "../Form/Form";
import { StyledAbout } from "./styled";
import { Container } from "@styled";

function About() {
    return (
        <StyledAbout id="section1">
            <Container>
                <Title size={TitleSize.BIG} color='#fdfdfd' $uppercase $marginBottom={41}>
                    Насладись прогулкой в горах с&nbsp;командой единомышленников
                </Title>
                <Form />
            </Container>
        </StyledAbout>
    );
}

export default About;
