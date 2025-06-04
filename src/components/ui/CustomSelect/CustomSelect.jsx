import React, { useState, useEffect } from "react";
import { SelectContainer, SelectButton, DropDownList, DropDownItem, SelectLabel } from "./styled";

function CustomSelect({ options, name, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleCustomSelect = (option) => {
        setIsOpen(false);
        onChange({
            target: {
                name: name,
                value: option
            }
        });
    };

    useEffect(() => {
        const handleClickOutside = (evt) => {
            if (!evt.target.closest('.SelectContainer')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.addEventListener('click', handleClickOutside)
    }, []);

    return (
        <SelectContainer className="SelectContainer">
            <SelectButton type="button" className={isOpen ? 'open' : ''} onClick={() => setIsOpen(!isOpen)}>
                {value?.label || 'Локация для тура'}
            </SelectButton>

            {isOpen && (
                <DropDownList>
                    {options.map(option => (
                        <DropDownItem
                            key={option.value}
                            className={value?.value === option.value ? 'selected' : ''}                            
                            onClick={() => handleCustomSelect(option)}
                        >
                            {option.label}
                        </DropDownItem>
                    ))}
                </DropDownList>
            )}
            <SelectLabel>выберите из списка</SelectLabel>
        </SelectContainer>
    );
}

export default CustomSelect;
