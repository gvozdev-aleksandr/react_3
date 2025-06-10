import React from "react";
import { LogoWrapper } from "./styled";
import LogoIcon from '@assets/logo.svg?react';

function Logo() {
    return (
        <LogoWrapper>
            <LogoIcon />
        </LogoWrapper>
    );
}

export default Logo;
