import React from "react";
import { StyledHeader, HeaderContainer } from "./styled";
import Logo from "@ui/Logo/Logo";
import MainNav from "../Nav/Nav";

function Header() {
    return (
        <StyledHeader>
            <HeaderContainer>
                <Logo />
                <MainNav />
            </HeaderContainer>
        </StyledHeader>
    );
}

export default Header;
