import styled from "styled-components";
import { Img } from "@styled";

export const TextWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 32px;    
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(calc(100% - 90px));
    transition: transform 0.6s cubic-bezier(0.16, 0.77, 0.3, 1);
    will-change: transform;    
    
    clip-path: inset(0 0 calc(100% - 120px) 0);
    transition: transform 1.6s cubic-bezier(0.16, 0.77, 0.3, 1), 
                clip-path 1.6s cubic-bezier(0.16, 0.77, 0.3, 1);
`;

export const StarWrapper = styled.p`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    top: 37px;
    right: 0;
    padding: 4px 8px;
    margin: 0;
    min-height: 32px;
    background-color: rgba(253, 253, 253, 0.4);
    border-radius: 4px 0 0 4px;
    transition: all 0.4s ease-in-out; 
    will-change: opacity; 
`;

export const CardWrapper = styled.div`
    position: relative;
    clip-path: inset(0 round 32px);
    min-width: 380px;
    height: 500px;
    background-color: blue;
    color: ${({ theme }) => theme.secondaryTextColor};
    overflow: hidden;

    &:hover ${TextWrapper} {
        transform: translateY(0);
        clip-path: inset(0 0 0 0);
        padding: 30px 32px 20px;        
    }

    &:hover ${StarWrapper} {
        opacity: 0;        
    }
`;

export const PopularImage = styled(Img)`
    position: absolute;
    height: 100%;
    object-fit: cover;
`;

export const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent 40%);
    display: flex;
    align-items: flex-end;
`;

export const StarIcon = styled.span`
    padding: 0;
    margin: 0;
    width: 24px;
    height: 24px;
`;

export const StarNumber = styled.span`
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.primaryButtonColor};
`;

export const TitleWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 86px;
    column-gap: 20px;
    margin-bottom: 38px;
`;

export const TitleDescription = styled.span`
    grid-row: 2 / 3;
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;     
`;

export const Price = styled.span`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    align-self: center;
    text-align: center;
    padding: 8px 16px;;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;    
`;

export const StyledText = styled.p`
    padding: 0;
    margin: 0;
    margin-bottom: auto;    
`;

export const Button = styled.button`
    align-self: flex-start;
    padding: 12px 24px;
    font-size: 16px; 
    line-height: 20px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.secondaryTextColor};
    background-color: ${({ theme }) => theme.primaryButtonColor};
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.primaryButtonColor};
        background-color: ${({ theme }) => theme.secondaryTextColor};
    }
`;
