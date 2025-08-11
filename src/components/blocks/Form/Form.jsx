import React, { useState } from "react";
import { StyledForm, InputWrapper, SelectContainer, InputQuantity, SelectLabel } from "./styled";
import CustomSelect from "@ui/CustomSelect/CustomSelect";
import DateInput from "../../ui/DateInput/DateImput";
import Button from '@ui/Button/Button';
import { format } from "date-fns";

const places = [
    { value: 'option1', label: 'Озеро возле гор' },
    { value: 'option2', label: 'Ночь в горах' },
    { value: 'option3', label: 'Йога в горах' }
];

function Form() {
    const [formData, setFormData] = useState({
        quantity: '1',
        place: places[0].label,
        startDate: null,
        endDate: null
    });

    const [quantityError, setQuantityError] = useState(false);
    const [quantitySuccess, setQuantitySuccess] = useState(false);

    const HandleOnSubmit = (evt) => {
        evt.preventDefault();

        if (!quantityError && formData.quantity && formData.startDate && formData.endDate) {
            const payload = {
                quantity: formData.quantity,
                place: formData.place,
                startDate: format(formData.startDate, "yyyy-MM-dd"),
                endDate: format(formData.endDate, "yyyy-MM-dd")
            };
            console.log('Отправленные данные:', payload);
        } else {
            console.log('Ошибка валидации');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'quantity') {
            if (value === '') {
                setQuantityError(false);
                setQuantitySuccess(false);
            } else if (isNaN(value) || value < 1 || value > 8) {
                setQuantityError(true);
                setQuantitySuccess(false);
            } else {
                setQuantityError(false);
                setQuantitySuccess(true);
            }
        }
    };

    const getQuantityLabelText = () => {
        if (quantityError) return 'Не больше 8 человек!';
        if (quantitySuccess) return 'Отлично!';
        return 'Выберите количество';
    };

    return (
        <StyledForm onSubmit={HandleOnSubmit}>
            <InputWrapper>
                <SelectContainer>
                    <InputQuantity
                        type="number"
                        min={1}
                        max={8}
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                    />
                    <SelectLabel $isError={quantityError} $isSuccess={quantitySuccess}>
                        {getQuantityLabelText()}
                    </SelectLabel>
                </SelectContainer>
                <CustomSelect
                    name="place"
                    options={places}
                    value={formData.place}
                    onChange={handleChange}
                />
                <SelectContainer>
                    <DateInput
                        onChange={(range) => {
                            setFormData(prev => ({
                                ...prev,
                                startDate: range.startDate,
                                endDate: range.endDate
                            }));
                        }}
                    />
                    <SelectLabel>Выберите дату</SelectLabel>
                </SelectContainer>
            </InputWrapper>
            <Button white={true} type="submit">Найти программу</Button>
        </StyledForm>
    );
}

export default Form;
