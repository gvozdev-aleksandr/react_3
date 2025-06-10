import styled from "styled-components";

const Container = styled.div`
    width: ${({ theme }) => theme.mobileWidth};
    padding-top: ${({ theme }) => theme.mobilePaddingY};
    padding-bottom: ${({ theme }) => theme.mobilePaddingY};
    padding-left: ${({ theme }) => theme.mobilePaddingX};
    padding-right: ${({ theme }) => theme.mobilePaddingX};
    margin: 0 auto;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        width: ${({ theme }) => theme.desktopWidth};
        padding-top: ${({ theme }) => theme.desktopPaddingTop};
        padding-bottom: ${({ theme }) => theme.desktopPaddingBottom};
        padding-left: ${({ theme }) => theme.desktopPaddingX};
        padding-right: ${({ theme }) => theme.desktopPaddingX};
    }    
`;

export default Container;
