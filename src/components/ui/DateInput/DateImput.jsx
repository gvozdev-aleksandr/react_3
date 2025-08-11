import React, { useState, useRef, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { StyledDateRange, DateField } from './styled';
import format from 'date-fns/format';

function DateInput({ onChange }) {
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (ranges) => {
        const newRange = ranges.selection;
        setDateRange(newRange);
        onChange?.(newRange);

        if (newRange.startDate && newRange.endDate && newRange.startDate.getTime() !== newRange.endDate.getTime()) {
            setOpen(false);
        }
    };

    return (
        <StyledDateRange ref={ref}>
            <DateField
                readOnly
                value={`${format(dateRange.startDate, 'dd.MM.yyyy')} - ${format(dateRange.endDate, 'dd.MM.yyyy')}`}
                onClick={() => setOpen(!open)}
            />
            {open && (
                <div className="calendar-popup">
                    <DateRangePicker
                        ranges={[dateRange]}
                        onChange={handleChange}
                        months={2}
                        direction="horizontal"
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                    />
                </div>
            )}
        </StyledDateRange>
    );
}

export default DateInput;
