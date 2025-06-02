import React from "react";
import { StyledHeader } from "./styled";
import Logo from "@ui/Logo/Logo";
import MainNav from "../Nav/Nav";

function Header() {
    return (
        <StyledHeader>
            <Logo />
            <MainNav />
        </StyledHeader>
    );
}

export default Header;
