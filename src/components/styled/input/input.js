import { css } from "styled-components";

const InputTemplate = css`
    position: relative;
    width: 100%;
    padding: 13px 40px 13px 16px;
    margin-bottom: 8px;
    border: 1px solid #E1E3E4;
    border-radius: 8px;
    font-size: 16px;
    line-height: 150%;
    color: ${(props) => props.theme.secondaryTextColor};
    background-color: transparent;
    text-align: start;
    cursor: pointer;
    transition: all 0.2s ease; 

    &:focus {
        outline: 2px solid white;        
    }
`;

export default InputTemplate;
