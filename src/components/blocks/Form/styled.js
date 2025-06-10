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

export const SubmitButton = styled.button`
    min-width: 213px;
    padding: 16px;
    text-align: center;
    color: ${(props) => props.theme.primaryButtonColor};
    background-color: ${(props) => props.theme.secondaryButtonColor};
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 0.02em;
    border-radius: 4px;
    border: none;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.secondaryButtonColor};
        background-color: ${(props) => props.theme.primaryButtonColor};
    }
`;
