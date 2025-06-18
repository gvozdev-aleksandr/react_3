import styled, { css } from "styled-components";
import { Ul } from '@components/styled'
import { Link as ScrollLink } from 'react-scroll';

export const StyledNav = styled.nav`    
    display: flex;
    align-items: center;
    gap: 49px;
    min-height: 44px;

    ${(props) => props.$isOpen &&
        `
        position: absolute; 
        top: -20px;
        left: 0;
        right: 0;
        height: 600px;
        align-items: flex-start;
        background-color: #1a3e3e;   
    `}   
`;

export const NavList = styled(Ul)`
    display: none;
    
    ${(props) => props.$isOpen &&
        `
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 50px 16px;   
    `} 

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        display: flex;
        flex-direction: row;
        gap: 24px;
        align-items: center;
    }  
`;

export const NavItem = styled.li`    
    line-height: 18px;
    font-weight: 400;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        font-size: 18px;
        line-height: 100%;
        font-weight: 600;
    }  
`;

export const NavLink = styled(ScrollLink)`
    position: relative;
    padding: 13px 0;
    color: ${({ theme }) => theme.secondaryTextColor};
    text-decoration: none;
    cursor: pointer;

    ${(props) => props.$isOpen &&
        css`
        padding: 0 18px; 
        
        &:hover {
            text-decoration: underline;
        }

        &::before {
            position: absolute;
            left: 0;
            top: 4px;
            content: '';
            width: 7px;
            height: 7px;
            border-top: 2px solid white;
            border-right: 2px solid white;
            transform: rotate(45deg);
        }

        &:hover::before {
            border-color: ${({ theme }) => theme.noteTextColor};
        }
    `} 

    &:hover {
        color: ${({ theme }) => theme.noteTextColor};
    }
`;

export const OpenButton = styled.button`
    position: absolute;    
    right: 16px;
    top: 7px; 
    display: flex;  
    justify-content: center;
    align-items: center; 
    padding: 0;   
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;   
    cursor: pointer;    

    ${(props) => props.$isOpen &&
        css`
        right: 16px;
        top: 16px;        
    `} 

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        display: none;
    } 
`;
