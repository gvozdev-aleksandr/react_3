import React, { useState, useEffect } from "react";
import { StyledNav, NavList, NavItem, NavLink, OpenButton } from "./styled";
import OpenIcon from "@assets/icons/open-icon.svg?react";
import CloseIcon from "@assets/icons/close-icon.svg?react";
import Button from "@ui/Button/Button";

const navItems = [
    {label: 'Главная', id: 'about'},
    {label: 'Про гида', id: 'guide'},
    {label: 'Программа тура', id: 'programm'},
    {label: 'Стоимость', id: 'popular'},
    {label: 'Блог', id: 'section1'},
    {label: 'Контакты', id: 'footer'}
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
                    <NavItem key={item.id}>
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
            <Button secondary={true} onClick={handleOnClick}>Консультация</Button>
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
