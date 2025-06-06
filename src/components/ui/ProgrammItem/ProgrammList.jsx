import React from "react";
import { StyledList, StyledItem, IconWrapper, Description } from "./styled";
import Title , { TitleSize } from "@ui/Title/title";

function ProgrammList({ programs = [] }) {
    return (
        <StyledList>
            {programs.map((item) => (
                <StyledItem key={item.name}>
                    <IconWrapper>
                        <item.Icon />
                    </IconWrapper>
                    <div>
                        <Title size={TitleSize.EXTRA_SMALL} $marginBottom={4}>{item.titleText}</Title>
                        <Description>{item.description}</Description>
                    </div>
                </StyledItem>
            ))}
        </StyledList>
    );
}

export default ProgrammList;
