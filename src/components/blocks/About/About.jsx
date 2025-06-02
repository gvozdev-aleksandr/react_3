import React from "react";
import Title, { TitleSize } from "@ui/Title/title";

function About() {
    return (
        <>
            <Title size={TitleSize.BIG} color='#fdfdfd' $uppercase $marginBottom={41}>Насладись прогулкой в горах с&nbsp;командой единомышленников</Title>
        </>
    );
}

export default About;
