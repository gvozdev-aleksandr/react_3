import React from "react";
import { Main, BgImg } from "./styled";
import Header from "../Header/Header";
import About from "@blocks/About/About";
import Guide from "@blocks/Guide/Guide";
import BgImage from '@assets/bg.png';

function PageWrapper({children}) {
    return (
        <>
            <Main>
                <BgImg src={BgImage} />
                <Header />
                <About />
                <Guide />
                {children}
            </Main>
        </>
    );
}

export default PageWrapper;
