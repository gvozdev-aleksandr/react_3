import React from "react";
import Title , { TitleSize } from "@ui/Title/title";
import { ListWrapper, StyledList, StyledItem, StyledLink } from "./styled";

function InfoList({ list, title, marginRight }) {
    return (
        <ListWrapper $marginRight={marginRight}>
            <Title size={TitleSize.FOOTER} color='#f3f5f4' $marginBottom={20}>{title}</Title>
            <StyledList>
                {list.map((item) => (
                    <StyledItem key={item.id} $isNew={item.isNew}>
                        <StyledLink href="/">
                            {item.text}
                        </StyledLink>
                    </StyledItem>
                ))}
            </StyledList>
        </ListWrapper>
    );
}

export default InfoList;
