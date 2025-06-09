import React from "react";
import styled, { css } from "styled-components";

export const TitleSize = {
    BIG: "big",
    MEDIUM: "medium",
    SMALL: "small",
    FOOTER: "footer",
    EXTRA_SMALL: "extra_small"
};

const TitleSizeValue = {
    [TitleSize.BIG]: {
        fontSize: '50px',
        lineHeight: '75px',
        tag: 'h1'
    },
    [TitleSize.MEDIUM]: {
        fontSize: '32px',
        lineHeight: '38px',
        tag: 'h2'
    },
    [TitleSize.SMALL]: {
        fontSize: '24px',
        lineHeight: '32px',
        tag: 'h3'
    },
    [TitleSize.FOOTER]: {
        fontSize: '20px',
        lineHeight: '24px',
        tag: 'h4'
    },
    [TitleSize.EXTRA_SMALL]: {
        fontSize: '18px',
        lineHeight: '20px',
        tag: 'h5'
    }
};

const getSizeValues = (size = TitleSize.MEDIUM) => {
    const values = TitleSizeValue[size];
    return css`
        font-size: ${values.fontSize};
        line-height: ${values.lineHeight};
    `;
};

export const Title = styled(({ size, as, ...props }) => {
  const Tag = as || TitleSizeValue[size]?.tag || "h2";
  return React.createElement(Tag, props);
})`
    padding: 0;
    margin: 0;
    margin-bottom: ${( props ) => props.$marginBottom !== undefined ? `${props.$marginBottom}px` : '40px'};
    font-weight: 700;
    ${(props) => getSizeValues(props.size)};
    color: ${(props) => props.color || props.theme.primaryTextColor};
    text-transform: ${({ $uppercase }) => $uppercase ? 'uppercase' : 'none'};
`;

export default Title;
