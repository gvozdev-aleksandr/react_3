import styled from "styled-components";
import { Ul, Img } from "@styled";

export const PhotosList = styled(Ul)`    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-items: center;        
`;

export const PhotoItem = styled.li`
    width: 250px;
    height: 250px;
    background-color: blue; 
    clip-path: inset(0 round 0 50px 0 50px);
    overflow: hidden;
    
    &:nth-child(2),
    &:nth-child(3) {
        clip-path: inset(0 round 50px 0 50px 0);
    }
`;

export const StyledImg = styled(Img)`    
    height: 100%;
    object-fit: cover;    
`;
