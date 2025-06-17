import React from "react";
import { Main, BgImg } from "./styled";
import BgImage from '@assets/bg.png';
import Header from "../Header/Header";
import About from "@blocks/About/About";
import Guide from "@blocks/Guide/Guide";
import Footer from "../Footer/Footer";
import Programms from "@blocks/Programms/Programms";
import Popular from "@blocks/Popular/Popular";
import Gallery from "@blocks/Gallery/Gallery";

function PageWrapper() {
    return (
        <>
            <Main>
                <BgImg src={BgImage} />
                <Header />
                <About />
                <Guide />
                <Programms />
                <Popular />
                <Gallery />                
                <Footer />
            </Main>
        </>
    );
}

export default PageWrapper;
