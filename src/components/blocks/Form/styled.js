import styled from 'styled-components';

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
