import styled from "styled-components";

export const TitleNotice = styled.span`
    display: block;
    padding: 0;
    margin: 0;
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: ${(props) => props.theme.noteTextColor};

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        font-size: 24px;      
    } 
`;

export default TitleNotice;
