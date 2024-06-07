import React from 'react';
import '../styles/reservation.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input, Select } from "antd";
import DateRangeSelector from './Calendar';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

const { Option } = Select;

export const Reservation = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Imię i Nazwisko są wymagane'),
    phoneNumber: Yup.string().required('Numer Telefonu jest wymagany'),
    castle: Yup.string().required('Rodzaj Zamku jest wymagany'),
    delivery: Yup.string().required('Rodzaj dostawy jest wymagany'),
    payment: Yup.string().required('Rodzaj płatności jest wymagany'),
    checkbox: Yup.boolean().oneOf([true], 'Musisz wyrazić zgodę'),
  });

  const onSubmit = (values: any) => {
    console.log('Wartości formularza:', values);
  };

  const handleDateChange = (ranges: { startDate: Date | null, endDate: Date | null }) => {
    console.log('Zakres dat:', ranges);
  };

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <section className="reservation">
      <div className="container mt-10 mx-auto max-w-7xl flex">
        <div className="form-container mx-8">
          <h1 className="heading-reservation mb-5">Rezerwacja</h1>
          <Formik
            initialValues={{
              name: "",
              phoneNumber: "",
              castle: "",
              delivery: "",
              payment: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form>
                <div className="form-group mb-4">
                  <Input
                    type="text"
                    name="name"
                    className="name"
                    placeholder="Imię i Nazwisko"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group mb-4">
                  <Input
                    type="text"
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
                  <Select
                    className="castle-option"
                    placeholder="Wybierz rodzaj dmuchanej atrakcji"
                    value={values.castle || undefined}
                    onChange={(value) => {
                      handleChange("castle")(value);
                    }}
                    onBlur={handleBlur}
                  >
                    <Option value="first-option">
                      Nadmuchiwany zamek do skakania ze zjeżdżalnią
                    </Option>
                    <Option value="second-option">
                      Nadmuchiwany plac zabaw park wodny
                    </Option>
                    <Option value="third-option">
                      Wodny dmuchany zamek ze zjeżdżalnią
                    </Option>
                  </Select>
                  <ErrorMessage
                    name="castle"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group mb-7">
                  <h4 className="choose-day mb-4">
                    Wybierz dzień dostawy i odbioru:
                  </h4>
                  <DateRangeSelector
                    onDateChange={handleDateChange}
                    disabled={!values.castle}
                  />
                </div>
                <div className="form-group mb-4">
                  <Select
                    className="delivery-option"
                    placeholder="Wybierz rodzaj dostawy"
                    value={values.delivery || undefined}
                    onChange={(value) => {
                      handleChange("delivery")(value);
                    }}
                    onBlur={handleBlur}
                  >
                    <Option value="first-option">Odbiór osobisty</Option>
                    <Option value="second-option">
                      Dostawa na wybrany adres
                    </Option>
                  </Select>
                  <ErrorMessage
                    name="delivery"
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
                      handleChange("payment")(value);
                    }}
                    onBlur={handleBlur}
                  >
                    <Option value="first-option">Gotówka</Option>
                    <Option value="second-option">Karta płatnicza</Option>
                    <Option value="third-option">BLIK</Option>
                  </Select>
                  <ErrorMessage
                    name="payment"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="checkbox whitespace-nowrap max-w-xl mt-8 mb-14 flex">
                  <Checkbox onChange={onChange}>
                    <p className="text-lg ">
                      Wyrażam zgode na przetwarzanie moich danych osobowych w
                      celu i zakresie koniecznym do udzielenie odpowiedzi na
                      przesłane zapytanie.
                    </p>
                  </Checkbox>
                </div>
                <button
                  type="submit"
                  className="btn-submit btn-primary mb-14"
                  onClick={onSubmit}
                >
                  REZERWUJ
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="bubbles-container mr-10 mt-14">
          <figure className="bubbles-images mb-28">
            <div className="cup cup1 smaller"></div>
            <div className="cup cup1 larger"></div>
            <div className="chosen-castle"></div>
          </figure>
          <figure className="bubbles-images">
            <div className="cup cup2 smaller2"></div>
            <div className="cup cup2 larger2"></div>
            <div className="chosen-castle"></div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
