import React from "react";
import { StyledNav, NavList, NavItem, NavLink } from "./styled";
import Button from "@ui/Button/Button";

const navItems = [
    {path: '/', label: 'Главная', id: 'section1'},
    {path: '/about', label: 'Про гида', id: 'section2'},
    {path: '/programm', label: 'Программа тура', id: 'section3'},
    {path: '/price', label: 'Стоимость', id: 'section4'},
    {path: '/blog', label: 'Блог', id: 'section1'},
    {path: '/contacts', label: 'Контакты', id: 'section1'}
];

function MainNav() {
    const handleOnClick = () => {        
        alert('Сработало');
    };

    return (
        <StyledNav>
            <NavList>
                {navItems?.length > 0 && navItems.map((item) => (
                    <NavItem key={item.path}>
                        <NavLink
                            href="/"
                            to={item.id}
                            smooth={true} 
                            duration={500}
                        >
                            {item.label}
                        </NavLink>
                    </NavItem>
                ))}
            </NavList>
            <Button onClick={handleOnClick}>Консультация</Button>
        </StyledNav>
    );
}

export default MainNav;
