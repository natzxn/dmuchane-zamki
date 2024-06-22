import React, { useState } from 'react';
import { Select, Input, TimePicker } from 'antd';
import { ErrorMessage, useFormikContext } from 'formik';
import '../../styles/delivery.css'

const { Option } = Select;
const format = 'HH:mm';

interface DeliveryOptionProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

const DeliveryOption: React.FC<DeliveryOptionProps> = ({ value, onChange }) => {
    const [showAddressFields, setShowAddressFields] = useState(false);
    //Direct value setting in nested component 
    const { setFieldValue } = useFormikContext(); 

    const handleDeliveryChange = (value: string) => {
        onChange(value);
        setShowAddressFields(value === 'home-delivery');
      };

      return (
        <>
          <Select
            className="delivery-option"
            placeholder="Wybierz rodzaj dostawy"
            value={value}
            onChange={handleDeliveryChange}
          >
            <Option value="personal-collect">Odbiór osobisty</Option>
            <Option value="home-delivery">Dostawa na wybrany adres</Option>
          </Select>
          {/* Conditional display of delivery fields to the selected address */}
          {showAddressFields && (
            <>
              <div className="adress-inputs flex mt-4 mb-4 sm:flex-row xs:flex-col">
                <div className="form-group">
                  <Input
                    type="text"
                    placeholder="Miejscowość"
                    className="address-field mr-8 sm:mb-0 xs:mb-4"
                    name="addressCity"
                    onChange={(e) => {
                      setFieldValue("addressCity", e.target.value); 
                    }}
                  />
                  <ErrorMessage
                    name="addressCity"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="text"
                    placeholder="Ulica"
                    className="address-field"
                    name="addressStreet"
                    onChange={(e) => {
                      setFieldValue('addressStreet', e.target.value); 
                    }}
                  />
                  <ErrorMessage
                    name="addressStreet"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
              <div className="adress-inputs flex mb-4 sm:flex-row xs:flex-col">
                <div className="form-group">
                  <Input
                    type="text"
                    placeholder="Numer domu/lokalu"
                    className="address-field mr-8 sm:mb-0 xs:mb-4"
                    name="addressHomeNumber"
                    onChange={(e) => {
                      setFieldValue('addressHomeNumber', e.target.value); 
                    }}
                  />
                  <ErrorMessage
                    name="addressHomeNumber"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="text"
                    pattern="[0-9]{2}-[0-9]{3}"
                    placeholder="Kod pocztowy"
                    className="address-field"
                    name="addressZipCode"
                    onChange={(e) => {
                      setFieldValue('addressZipCode', e.target.value); 
                    }}
                  />
                  <ErrorMessage
                    name="addressZipCode"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
              {/* Time Pickers for delivery*/}
              <div className="time-pickers flex mb-4 sm:flex-row xs:flex-col">
                <div className="time-field mr-8 xs:mb-4">
                  <h5 className="mb-1">Preferowana godzina dostawy:</h5>
                  <TimePicker
                    defaultValue={null}
                    format={format}
                    name="deliveryTime"
                    onChange={(time) => {
                      const timestamp = time.valueOf();
                      setFieldValue('deliveryTime', timestamp);
                    }}
                  />
                    <ErrorMessage
                    name="deliveryTime"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="time-field">
                  <h5 className="mb-1">Preferowana godzina odbioru:</h5>
                  <TimePicker
                    defaultValue={null}
                    format={format}
                    name="pickUpTime"
                    onChange={(time) => {
                      const timestamp = time.valueOf();
                      setFieldValue('pickUpTime', timestamp);
                    }}
                  />
                    <ErrorMessage
                    name="pickUpTime"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
            </>
          )}
        </>
      );
    };

export default DeliveryOption;