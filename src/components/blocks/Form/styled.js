import styled from 'styled-components';
import { InputTemplate } from '@styled';

export const StyledForm = styled.form`
    display: flex;
    align-items: start;
    gap: 24px;    

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        padding: 40px 42px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;   
    } 
`;

export const InputWrapper = styled.div`
    display: none;       

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        display: flex;    
        gap: 24px;     
    } 
`;

export const SelectContainer = styled.div`
    position: relative;
    display: inline-block;
    min-width: 270px;
`;

export const InputQuantity = styled.input`
    ${InputTemplate}

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: textfield;
    }
`;

export const SelectLabel = styled.span`
  display: block;  
  padding: 0 8px;
  margin: 0;
  font-weight: 400;
  color: ${(props) => 
    props.$isError 
      ? props.theme.errorTextColor 
      : props.$isSuccess 
        ? props.theme.secondaryTextColor 
        : props.theme.secondaryTextColor};
`;
