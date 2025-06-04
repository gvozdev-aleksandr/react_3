import React from "react";
import { Main } from "./styled";
import Header from "../Header/Header";
import About from "@blocks/About/About";
import Guide from "@blocks/Guide/Guide";

function PageWrapper({children}) {
    return (
        <>
            <Main>
                <Header />
                <About />
                <Guide />
                {children}
            </Main>
        </>
    );
}

export default PageWrapper;
