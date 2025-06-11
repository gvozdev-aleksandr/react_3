import React, { useState, useEffect } from "react";
import { StyledNav, NavList, NavItem, NavLink, NavButton, OpenButton } from "./styled";
import OpenIcon from "@assets/icons/open-icon.svg?react";
import CloseIcon from "@assets/icons/close-icon.svg?react";

const navItems = [
    {path: '/about', label: 'Главная', id: 'about'},
    {path: '/guide', label: 'Про гида', id: 'guide'},
    {path: '/programm', label: 'Программа тура', id: 'programm'},
    {path: '/popular', label: 'Стоимость', id: 'popular'},
    {path: '/blog', label: 'Блог', id: 'section1'},
    {path: '/contacts', label: 'Контакты', id: 'section1'}
];

function MainNav() {
    const [isOpen, setIsOpen] = useState(false); 
    
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const mediaQuery = window.matchMedia(`(min-width: 1980px)`);

        const handleMediaChange = (e) => {
            if (e.matches) {
                setIsOpen(false);
            }
        };

        handleMediaChange(mediaQuery);

        mediaQuery.addEventListener('change', handleMediaChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    const handleOnClick = () => {        
        alert('Сработало');
    }; 
    
    const toggleClick = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);
    }

    const handleNavLinkClick = () => {        
        const mediaQuery = window.matchMedia(`(min-width: 1980px)`);
        if (!mediaQuery.matches) {
            setIsOpen(false);
        }
    };

    return (
        <StyledNav $isOpen={isOpen}>
            <NavList $isOpen={isOpen}>
                {navItems?.length > 0 && navItems.map((item) => (
                    <NavItem key={item.path}>
                        <NavLink
                            onClick={handleNavLinkClick}
                            $isOpen={isOpen}
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
            <NavButton onClick={handleOnClick}>Консультация</NavButton>
            <OpenButton
                $isOpen={isOpen}
                onClick={toggleClick}
                aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            >
                {isOpen ? <CloseIcon /> : <OpenIcon />}
            </OpenButton>
        </StyledNav>
    );
}

export default MainNav;
