import styled from "styled-components";

export const LogoWrapper = styled.div`
    width: 84px;
    height: 44px;

    svg {
        width: 100%;
        height: auto;
    }

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        width: 137px;
        height: 72px;;
    }  
`;
