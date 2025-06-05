import React from "react";
import { Main, BgImg } from "./styled";
import BgImage from '@assets/bg.png';
import Header from "../Header/Header";
import About from "@blocks/About/About";
import Guide from "@blocks/Guide/Guide";
import Footer from "../Footer/Footer";

function PageWrapper({children}) {
    return (
        <>
            <Main>
                <BgImg src={BgImage} />
                <Header />
                <About />
                <Guide />
                {children}
                <Footer />
            </Main>
        </>
    );
}

export default PageWrapper;
