import React from "react";
import Title, { TitleSize } from "@ui/Title/title";
import Form from "../Form/Form";
import { StyledAbout } from "./styled";

function About() {
    return (
        <StyledAbout>
            <Title size={TitleSize.BIG} color='#fdfdfd' $uppercase $marginBottom={41}>
                Насладись прогулкой в горах с&nbsp;командой единомышленников
            </Title>
            <Form />
        </StyledAbout>
    );
}

export default About;
