import React, { useState, useEffect } from 'react';
import { DateRange, Range, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../../styles/calendar.css';
import { checkAvailability, OrderData, CastleOption } from './castleAvailability';
import { message } from 'antd';

interface DateRangeSelectorProps {
  onDateChange: (ranges: { startDate: Date | null, endDate: Date | null }) => void; 
  disabled: boolean;
  orders: OrderData[];
  selectedCastle: CastleOption | null;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({ onDateChange, disabled, orders, selectedCastle }) => {
    //Disable today's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
  
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(), 
      key: 'selection'
    }
  ]);

  useEffect(() => {
    setState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);
  }, [orders, selectedCastle]);

  //Handles changes in a selected date range
  const handleChange = (item: RangeKeyDict) => {
    const newRange = [item.selection];
    const startDate = item.selection.startDate || new Date();
    const endDate = item.selection.endDate || startDate;

    //Checks the availability of the selected date range
    const isAvailable = checkAvailability(selectedCastle, startDate, endDate, orders);

    if (!isAvailable) {
      message.error('Wybrany zakres dat jest niedostępny. Proszę wybrać inny termin.');
    } //if not available give a message

    setState(newRange); //after changing range selection
    onDateChange({
      startDate: isAvailable ? startDate : null,
      endDate: isAvailable ? endDate : null
    });
  };

  //function for checking if date should be disabled or not - basing on orders for selected castle
const disabledDay = (date: Date): boolean => {
    return selectedCastle && !checkAvailability(selectedCastle, date, date, orders) ? true : false;
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
        minDate={tomorrow}
        weekStartsOn={1}
        disabledDay={disabledDay}
      />
    </div>
  );
};

export default DateRangeSelector;
