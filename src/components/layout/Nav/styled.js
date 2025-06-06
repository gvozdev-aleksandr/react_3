import styled from "styled-components";
import { Ul } from '@components/styled'
import { Link as ScrollLink } from 'react-scroll';

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 49px;
    min-height: 44px;
`;

export const NavList = styled(Ul)`
    display: flex;
    gap: 24px;
    align-items: center;
`;

export const NavItem = styled.li`
    font-size: 18px;
    line-height: 100%;
    font-weight: 600;
    `;

export const NavLink = styled(ScrollLink)`
    padding: 13px 0;
    color: #fdfdfd;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.noteTextColor};
    }
`;
