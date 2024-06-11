import React, { useState } from 'react';
import { Select, Input, TimePicker } from 'antd';
import dayjs from 'dayjs';
import '../../styles/delivery.css'

const { Option } = Select;
const format = 'HH:mm';

interface DeliveryOptionProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

const DeliveryOption: React.FC<DeliveryOptionProps> = ({ value, onChange }) => {
    const [showAddressFields, setShowAddressFields] = useState(false);

    const handleDeliveryChange = (value: string) => {
        onChange(value);
        setShowAddressFields(value === 'home-delivery');
      };

      return (
        <>
          <Select
            className="delivery-option mb-4"
            placeholder="Wybierz rodzaj dostawy"
            value={value}
            onChange={handleDeliveryChange}
          >
            <Option value="personal-collect">Odbiór osobisty</Option>
            <Option value="home-delivery">Dostawa na wybrany adres</Option>
          </Select>
          {showAddressFields && (
            <>
              <div className="adress-inputs mb-4">
                <Input
                    type="text"
                  placeholder="Miejscowość"
                  className="address-field mr-8"
                  name="city"
                />
                <Input type="text" placeholder="Ulica" className="address-field" name="street"/>
              </div>
              <div className="adress-inputs mb-4">
                <Input
                type="number"
                  placeholder="Numer domu"
                  className="address-field mr-8"
                  name="home-number"
                />
                <Input type="text" pattern="[0-9]{2}-[0-9]{3}" placeholder="Kod pocztowy" className="address-field" name="zip-code"/>
              </div>
              <div className="time-pickers flex mb-4">
                <div className="time-field mr-8">
                  <h5 className="mb-1">Preferowana godzina dostawy:</h5>
                  <TimePicker
                    defaultValue={dayjs("12:00", format)}
                    format={format}
                  />
                </div>
                <div className='time-field'>
                  <h5 className="mb-1">Preferowana godzina odbioru:</h5>
                  <TimePicker
                    defaultValue={dayjs("12:00", format)}
                    format={format}
                  />
                </div>
              </div>
            </>
          )}
        </>
      );
    };

export default DeliveryOption;