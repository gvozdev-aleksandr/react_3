import React from "react";
import { StyledFooter, InfoWrapper, CopyrightWrapper, FooterContainer, CopyrightName, CopyrightPolicy } from "./styled";
import TgIcon from "@assets/icons/social/TgIcon";
import VkIcon from "@assets/icons/social/VkIcon";
import PinterestIcon from "@assets/icons/social/PinterestIcon";
import SkypeIcon from "@assets/icons/social/SkypeIcon";
import InfoContacts from "@blocks/InfoContacts/InfoContacts";

function Footer() {
    const socials = [
        { name: 'Tg', Icon: TgIcon },
        { name: 'Vk', Icon: VkIcon },
        { name: 'Pinterest', Icon: PinterestIcon },
        { name: 'Skype', Icon: SkypeIcon }
    ];

    return (
        <StyledFooter>
            <InfoWrapper>
                <FooterContainer>
                    <InfoContacts list={socials}/>                        
                </FooterContainer>
            </InfoWrapper>
            <CopyrightWrapper>
                <FooterContainer>
                    <CopyrightName>ИП Константинопольский К.К., 2023</CopyrightName>
                    <CopyrightPolicy href="/">Политика обработки персональных данных</CopyrightPolicy>
                </FooterContainer>
            </CopyrightWrapper>
        </StyledFooter>
    );
}

export default Footer;
