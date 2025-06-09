import styled from "styled-components";

const Container = styled.div`
    width: ${({ theme }) => theme.mobileWidth};
    padding-left: ${({ theme }) => theme.mobilePadding};
    padding-right: ${({ theme }) => theme.mobilePadding};
    margin: 0 auto;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        width: ${({ theme }) => theme.desktopWidth};
        padding-left: ${({ theme }) => theme.desktopPadding};
        padding-right: ${({ theme }) => theme.desktopPadding};
    }    
`;

export default Container;
