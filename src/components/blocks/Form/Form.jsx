import React, { useState } from "react";
import { StyledForm, SubmitButton, InputWrapper } from "./styled";
import CustomSelect from "@ui/CustomSelect/CustomSelect";


const places = [
        { value: 'option1', label: 'Озеро возле гор' },
        { value: 'option2', label: 'Ночь в горах' },
        { value: 'option3', label: 'Йога в горах' }        
    ];

const places2 = [
        { value: 'option1', label: 'Озеро возле гор' },
        { value: 'option2', label: 'Ночь в горах' },
        { value: 'option3', label: 'Йога в горах' }        
    ];

const places3 = [
        { value: 'option1', label: 'Озеро возле гор' },
        { value: 'option2', label: 'Ночь в горах' },
        { value: 'option3', label: 'Йога в горах' }        
    ];

function Form() {
    const [formData, setFormData] = useState({
        place1: places[0].label,
        place2: places2[0].label,
        place3: places3[0].label
    });

    const HandleOnSubmit = (evt) => {
        evt.preventDefault();
        console.log('Отправленные данные:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <StyledForm onSubmit={HandleOnSubmit}>
            <InputWrapper>
                <CustomSelect name="place1" options={places} value={formData.place1} onChange={handleChange} />
                <CustomSelect name="place2" options={places2} value={formData.place2} onChange={handleChange} />
                <CustomSelect name="place3" options={places3} value={formData.place3} onChange={handleChange} />
            </InputWrapper>            
            <SubmitButton type="submit">Найти программу</SubmitButton>
        </StyledForm>
    );
}

export default Form;
