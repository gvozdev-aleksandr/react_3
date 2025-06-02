import React from "react";
import { Main } from "./styled";
import Header from "../Header/Header";
import About from "@blocks/About/About";

function PageWrapper({children}) {
    return (
        <>
            <Main>
                <Header />
                <About />
                {children}
            </Main>
        </>
    );
}

export default PageWrapper;
