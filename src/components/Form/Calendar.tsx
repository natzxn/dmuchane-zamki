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

  const handleChange = (item: RangeKeyDict) => {
    setState([item.selection]);
    const startDate = item.selection.startDate || new Date();
    const endDate = item.selection.endDate || startDate;

    if (!checkAvailability(selectedCastle, startDate, endDate, orders)) {
      message.error('Wybrany zakres dat jest niedostępny. Proszę wybrać inny termin.');
    }

    onDateChange({
      startDate: startDate,
      endDate: endDate || null
    });
  };

  const disabledDay = (date: Date): boolean => {
    if (selectedCastle && !checkAvailability(selectedCastle, date, date, orders)) return true;

    return false;
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

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
