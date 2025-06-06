import React from "react";
import { ContactsWrapper, InfoDescription, ContactsLinks, Link, SocialList, SocialItem, SocialLink } from "./styled";
import Title , { TitleSize } from "@ui/Title/title";

function InfoContacts({list}) {
    return (
        <ContactsWrapper>
            <Title size={TitleSize.FOOTER} color='#f3f5f4' $marginBottom={17}>Компания «РумТибет»</Title>
            <InfoDescription>
                Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.
            </InfoDescription>
            <ContactsLinks>
                <Link href="/">info@domain.com</Link>
                <Link href="/">+7 (123) 456-78-90</Link>
            </ContactsLinks>
            <SocialList>
                {list.map(({ name, Icon }) => (  // eslint-disable-line no-unused-vars
                    <SocialItem key={name}>
                        <SocialLink href="#" $color='ffffff'>
                            <Icon />
                        </SocialLink>
                    </SocialItem>
                ))}
            </SocialList>
        </ContactsWrapper>
    );
}

export default InfoContacts;
