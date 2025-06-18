import React from "react";
import { StyledFooter, FooterContainer, InfoWrapper, CopyrightContainer, CopyrightWrapper, CopyrightName, CopyrightPolicy } from "./styled";
import TgIcon from "@assets/icons/social/TgIcon";
import VkIcon from "@assets/icons/social/VkIcon";
import PinterestIcon from "@assets/icons/social/PinterestIcon";
import SkypeIcon from "@assets/icons/social/SkypeIcon";
import InfoContacts from "@blocks/InfoContacts/InfoContacts";
import InfoList from "@blocks/InfoList/InfoList";
import { Services } from "@mocks/services";
import { GuideInfo } from "@mocks/guideInfo";

function Footer() {
    const socials = [
        { name: 'Tg', Icon: TgIcon },
        { name: 'Vk', Icon: VkIcon },
        { name: 'Pinterest', Icon: PinterestIcon },
        { name: 'Skype', Icon: SkypeIcon }
    ];

    return (
        <StyledFooter id="footer">
            <FooterContainer>
                <InfoWrapper>
                    <InfoContacts list={socials} />
                    <InfoList list={Services} title={'Наши услуги'} />
                    <InfoList list={GuideInfo} title={'Важно для путешествий'} marginRight={'0'} />
                </InfoWrapper>
            </FooterContainer>
            <CopyrightContainer>
                <CopyrightWrapper>
                    <CopyrightName>ИП Константинопольский К.К., 2023</CopyrightName>
                    <CopyrightPolicy href="/">Политика обработки персональных данных</CopyrightPolicy>
                </CopyrightWrapper>
            </CopyrightContainer>
        </StyledFooter>
    );
}

export default Footer;
