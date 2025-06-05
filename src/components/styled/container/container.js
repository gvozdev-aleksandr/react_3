import styled from "styled-components";

const Container = styled.div`
    width: ${(props) => props.theme.desktopWidth};
    padding-left: ${(props) => props.theme.desktopPadding};
    padding-right: ${(props) => props.theme.desktopPadding};
    margin: 0 auto;
`;

export default Container;
