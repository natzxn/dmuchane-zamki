import React from 'react';
import '../styles/reservation.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input, Select } from "antd";
import DateRangeSelector from './Calendar';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const { Option } = Select;

export const Reservation = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Imię i Nazwisko są wymagane'),
    phoneNumber: Yup.string().required('Numer Telefonu jest wymagany'),
    castle: Yup.string().required('Rodzaj Zamku jest wymagany'),
  });

  const onSubmit = (values: any) => {
    console.log('Wartości formularza:', values);
  };

  const handleDateChange = (ranges: { startDate: Date | null, endDate: Date | null }) => {
    console.log('Zakres dat:', ranges);
  };

  return (
    <section className='container mt-10 mx-auto max-w-7xl'>
      <div className='form-container mx-8'>
        <h1 className='heading-reservation mb-5'>Rezerwacja</h1>
        <Formik
          initialValues={{ name: '', phoneNumber: '', castle: '' }}
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
                <ErrorMessage name="name" component="div" className="error-message" />
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
                <ErrorMessage name="phoneNumber" component="div" className="error-message" />
              </div>
              <div className="form-group mb-4">
                <Select
                  className="castle-option"
                  placeholder="Wybierz rodzaj dmuchanej atrakcji"
                  value={values.castle || undefined}
                  onChange={(value) => { handleChange('castle')(value)}}
                  onBlur={handleBlur}
                >
                  <Option value="first-option">Nadmuchiwany zamek do skakania ze zjeżdżalnią</Option>
                  <Option value="second-option">Nadmuchiwany plac zabaw park wodny</Option>
                  <Option value="third-option">Wodny dmuchany zamek ze zjeżdżalnią</Option>
                </Select>
                <ErrorMessage name="castle" component="div" className="error-message" />
              </div>
              <div className="form-group mb-4">
                <h4 className='choose-day mb-4'>Wybierz dzień dostawy i odbioru:</h4>
                <DateRangeSelector onDateChange={handleDateChange} disabled={!values.castle} />
              </div>
              <button type="submit" className="btn btn-primary" disabled={!values.castle}>Wyślij</button>
            </Form>
          )}
        </Formik>
      </div>
      <div className='bubbles-container'></div>
    </section>
  );
};

export default Reservation;
