import styled from "styled-components";
import BgImage from '@assets/bg.png';

export const Main = styled.main`
    background-image: url(${BgImage});
    width: ${(props) => props.theme.desktopWidth};
    padding-top: 16px;
    padding-left: ${(props) => props.theme.desktopPadding};
    padding-right: ${(props) => props.theme.desktopPadding};
    margin: 0 auto;
`;
