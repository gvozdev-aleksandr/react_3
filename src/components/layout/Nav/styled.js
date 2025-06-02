import styled from "styled-components";
import { Ul } from '@components/styled'

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
    font-size: 16px;
    line-height: 100%;
    `;

export const NavLink = styled.a`
    color: #fdfdfd;
    text-decoration: none;
`;
