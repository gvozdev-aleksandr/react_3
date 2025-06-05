import React from "react";
import { StyledFooter, InfoWrapper, InfoContacts, InfoDescription, ContactsLinks, Link, SocialList, SocialItem, SocialLink, CopyrightWrapper, FooterContainer, CopyrightName, CopyrightPolicy } from "./styled";
import Title , { TitleSize } from "@ui/Title/title";
import TgIcon from "@assets/icons/social/TgIcon";
import VkIcon from "@assets/icons/social/VkIcon";
import PinterestIcon from "@assets/icons/social/PinterestIcon";
import SkypeIcon from "@assets/icons/social/SkypeIcon";

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
                    <InfoContacts>
                        <Title size={TitleSize.SMALL} color='#fdfdfd' $marginBottom={17}>Компания «РумТибет»</Title>
                        <InfoDescription>
                            Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.
                        </InfoDescription>
                        <ContactsLinks>
                            <Link href="/">info@domain.com</Link>
                            <Link href="/">+7 (123) 456-78-90</Link>
                        </ContactsLinks>
                        <SocialList>
                            {socials.map(({ name, Icon}) => (  // eslint-disable-line no-unused-vars
                                <SocialItem key={name}>
                                    <SocialLink href="#" $color='ffffff'>
                                        <Icon />
                                    </SocialLink>
                                </SocialItem>
                            ))}
                        </SocialList>
                    </InfoContacts>
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
