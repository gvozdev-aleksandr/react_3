import React from "react";
import { Main } from "./styled";

function PageWrapper({children}) {
    return (
        <>
            <Main>
                {children}
            </Main>
        </>
    );
}

export default PageWrapper;
