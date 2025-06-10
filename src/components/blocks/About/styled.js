import styled from "styled-components";
import { Container } from "@styled";

export const StyledAbout = styled.section`    
    margin: 0;    
`;

export const StyledContainer = styled(Container)`
    padding: 234px ${({ theme }) => theme.mobilePaddingX} ${({ theme }) => theme.mobilePaddingY};

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        padding: 463px ${({ theme }) => theme.desktopPaddingX} 82px;    
    } 
`;
