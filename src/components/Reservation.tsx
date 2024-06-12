import React, { useState } from 'react';
import '../styles/reservation.css';
import { Formik, Form, ErrorMessage } from 'formik';
import { Input, Select } from "antd";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { Checkbox } from 'antd';

import DateRangeSelector from './Form/Calendar';
import CastleImage from './Form/CastleImage';
import CastleSelect, { CastleOption } from './Form/CastleSelect';
import DeliveryOption from './Form/Delivery';
import { formValidation } from './Form/validation';

const { Option } = Select;

export const Reservation = () => {
  const [selectedCastle, setSelectedCastle] = useState<CastleOption | null>(null);

  //YUP VALIDATION
  const validationSchema = formValidation;

  //FORM VALUES
  const onSubmit = (values: any) => {
    console.log('Wartości formularza:', values);
  };

  const updateDate = (ranges: { startDate: Date | null, endDate: Date | null }, setFieldValue: (field: string, value: any) => void) => {
    setFieldValue('startDate', ranges.startDate);
    setFieldValue('endDate', ranges.endDate);
  };


  return (
    <section className="reservation">
      <div className="container mt-10 max-w-7xl flex">
        <div className="form-container mx-14">
          <h1 className="heading-reservation mb-5">Rezerwacja</h1>
          <Formik
            initialValues={{
              fullName: "",
              phoneNumber: "",
              castleType: "" as CastleOption | "",
              deliveryType: "",
              payment: "",
              checkbox: false,
              addressCity: "",
              addressStreet: "",
              addressHomeNumber: "",
              addressZipCode: "",
              deliveryTime: null,
              pickUpTime: null
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              setFieldValue,
            }) => (
              <Form>
                <div className="form-group mb-4">
                  <Input
                    type="text"
                    name="fullName"
                    className="name"
                    placeholder="Imię i Nazwisko"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group mb-4">
                  <Input
                    type="number"
                    name="phoneNumber"
                    className="phone-number"
                    placeholder="Numer telefonu"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group mb-4">
                  <CastleSelect
                    selectedCastle={selectedCastle}
                    onChange={(value) => {
                      setSelectedCastle(value);
                      setFieldValue("castleType", value);
                    }}
                  />
                  <ErrorMessage
                    name="castleType"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group mb-7">
                  <h4 className="choose-day mb-4">
                    Wybierz dzień dostawy i odbioru:
                  </h4>
                  <div className="flex">
                    <DateRangeSelector
                      onDateChange={(ranges) =>
                        updateDate(ranges, setFieldValue)
                      }
                      disabled={!selectedCastle}
                    />
                    <h5 className="ml-8 max-w-44 my-20 text-sm">
                      Dni zaznaczone na szaro (te których nie da sie wybrać)
                      oznaczają że dana atrakcja w tym terminie jest nie
                      dostępna.
                      <br />
                      <br />
                      Możesz spróbować wybrać innego dmuchańca i sprawdzić
                      dostępność w kalendarzu.
                    </h5>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <DeliveryOption
                    value={values.deliveryType || undefined}
                    onChange={(value) => setFieldValue("deliveryType", value)}
                  />
                  <ErrorMessage
                    name="deliveryType"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group">
                  <Select
                    className="payment-option"
                    placeholder="Wybierz rodzaj płatności przy odbiorze"
                    value={values.payment || undefined}
                    onChange={(value) => {
                      setFieldValue("payment", value);
                    }}
                    onBlur={handleBlur}
                  >
                    <Option value="cash">Gotówka</Option>
                    <Option value="card">Karta płatnicza</Option>
                    <Option value="blik">BLIK</Option>
                  </Select>
                  <ErrorMessage
                    name="payment"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="checkbox-wrapper xl:whitespace-normal max-w-lg mt-8 mb-14">
                  <Checkbox
                    name="checkbox"
                    className={`ant-checkbox ${
                      touched.checkbox && errors.checkbox
                        ? "ant-checkbox-error"
                        : ""
                    }`}
                    checked={values.checkbox}
                    onChange={(e) => {
                      setFieldValue("checkbox", e.target.checked);
                    }}
                  >
                    <p className="text-lg">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych w
                      celu i zakresie koniecznym do udzielenie odpowiedzi na
                      przesłane zapytanie.
                    </p>
                  </Checkbox>
                </div>
                <button type="submit" className="btn-submit btn-primary mb-14">
                  REZERWUJ
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="bubbles-container max-w-lg mr-10 mt-14">
          <figure className="bubbles-images mb-28">
            <div className="cup cup1 smaller"></div>
            <div className="cup cup1 larger"></div>
            <CastleImage selectedCastle={selectedCastle} />
          </figure>
          <figure className="bubbles-images">
            <div className="cup cup2 smaller2"></div>
            <div className="cup cup2 larger2"></div>
          </figure>
        </div>
      </div>
      <aside className="mt-8 mb-6 lg:mx-14 xl:mx-16">
        <p className="text-cyan-700">
          Lorem ipsum dolor sit amet consectetur. Pretium eget aliquam praesent
          vitae mauris pulvinar quam ultricies.
        </p>
      </aside>
    </section>
  );
};

export default Reservation;
