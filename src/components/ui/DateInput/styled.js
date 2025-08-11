import styled from 'styled-components';
import { InputTemplate } from '@styled';

export const StyledDateRange = styled.div`
  ${InputTemplate}
  position: relative;

  .calendar-popup {
    position: absolute;
    top: 100%;
    left: -342px;
    z-index: 100;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    margin-top: 4px;
  }
`;

export const DateField = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  color: white;
`;
