import React from "react";
import { Main } from "./styled";
import Header from "../Header/Header";

function PageWrapper({children}) {
    return (
        <>
            <Main>
                <Header />
                {children}
            </Main>
        </>
    );
}

export default PageWrapper;
