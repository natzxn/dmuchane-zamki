import React, { useState } from 'react';
import { DateRange, RangeKeyDict, Range } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../styles/calendar.css';

interface DateRangeSelectorProps {
  onDateChange: (ranges: { startDate: Date | null, endDate: Date | null }) => void; // Zmieniłem typy startDate i endDate na Date | null
  disabled: boolean;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({ onDateChange, disabled }) => {
  const [isActive, setIsActive] = useState(false);
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(), // Ustawiamy początkowo startDate na null
      endDate: new Date, // Ustawiamy początkowo endDate na null
      key: 'selection'
    }
  ]);

  const handleChange = (item: RangeKeyDict) => {
    setState([item.selection]);
    onDateChange({
      startDate: item.selection.startDate,
      endDate: item.selection.endDate || null
    });
  };

  return (
    <div className={`calendar-container ${disabled ? 'calendar-disabled' : ''}`}>
      {disabled && (
        <div className="calendar-overlay">
          <span className='mx-12'>Wybierz atrakcje aby sprawdzić dostępne terminy</span>
        </div>
      )}
      <DateRange
        onChange={handleChange}
        moveRangeOnFirstSelection={false}
        ranges={state}
        direction="horizontal"
        disabled={disabled} 
        minDate={new Date()}
      />
    </div>
  );
};

export default DateRangeSelector;
