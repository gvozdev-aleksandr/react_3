import React from "react";
import { StyledNav, NavList, NavItem, NavLink } from "./styled";
import Button from "@ui/Button/Button";

const navItems = [
    {path: '/', label: 'Главная'},
    {path: '/about', label: 'Про гида'},
    {path: '/programm', label: 'Программа тура'},
    {path: '/price', label: 'Стоимость'},
    {path: '/blog', label: 'Блог'},
    {path: '/contacts', label: 'Контакты'}
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
                        <NavLink href='/'>{item.label}</NavLink>
                    </NavItem>
                ))}
            </NavList>
            <Button onClick={handleOnClick}>Консультация</Button>
        </StyledNav>
    );
}

export default MainNav;
