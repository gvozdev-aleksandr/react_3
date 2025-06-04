import styled from "styled-components";
import Arrow from '@assets/select-arrow.svg?react';
import { Ul } from '@styled';

export const SelectContainer = styled.div`
    position: relative;
    display: inline-block;
    min-width: 270px;
`;

export const SelectButton = styled.button`
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
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }

    &::after {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        border-left: 2px solid ${(props) => props.theme.secondaryTextColor};
        border-bottom: 2px solid ${(props) => props.theme.secondaryTextColor};
        right: 16px;
        top: 23px;
        transform: translateY(-50%) rotate(-45deg);
        
        transition: transform 0.2s ease;
    }

    &.open::after {
        transform: rotate(135deg);
    }
`;

export const DropDownList = styled(Ul)`
    position: absolute;
    top: 54px;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.secondaryButtonColor};
    border: 1px solid #e1e3e4;
    border-radius: 0 0 8px 8px;
    overflow-y: auto;
    z-index: 100;
`;

export const DropDownItem = styled.li`
    padding: 14px 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${(props) => props.theme.bgLightGrey};
        box-shadow: 0 0 8px 5px ${(props) => props.theme.primaryButtonColor} inset;
    }

    &.selected {
        background-color: ${(props) => props.theme.primaryButtonColor};
        color: ${(props) => props.theme.secondaryTextColor};
    }

    &:last-child {
        border-radius: 0 0 6px 6px;
    }
`;

export const SelectLabel = styled.label`
  display: block;  
  padding: 0 8px;
  font-weight: 400;
  color: ${(props) => props.theme.secondaryTextColor};
`;
