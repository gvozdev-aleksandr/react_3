import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'NextArt';
        src: url('@assets/fonts/NEXT_ART_Regular.otf') format('otf');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'NextArt';
        src: url('@assets/fonts/NEXT_ART_Bold.otf') format('otf');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    * {
        box-sizing: border-box;
    }
    
    html {
        height: 100%;
    }

    body,
    html {
        margin: 0;
    }

    body {        
        position: relative;
        min-height: 100%;
        font-family: ${(props) => props.theme.fontFamily};
        font-size: ${(props) => props.theme.primaryFontSize};
        line-height: 20px;
        font-weight: 400;
        color: ${(props) => props.theme.primaryTextColor};
    }
`;
