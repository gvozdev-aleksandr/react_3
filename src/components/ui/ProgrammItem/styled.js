import styled from "styled-components";
import { Ul } from "@styled";

export const StyledList = styled(Ul)`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const StyledItem = styled.li`
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 16px;
    min-height: 64px;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
`;

export const Description = styled.p`
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: #000000;
`;
