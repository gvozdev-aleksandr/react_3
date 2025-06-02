import styled from "styled-components";

export const Main = styled.main`
    width: ${(props) => props.theme.desktopWidth};
    padding-left: ${(props) => props.theme.desktopPadding};
    padding-right: ${(props) => props.theme.desktopPadding};
    margin: 0 auto;
`;
