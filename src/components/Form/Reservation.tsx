import React, { useState } from 'react';
import '../../styles/reservation.css';
import { Formik, Form, ErrorMessage } from 'formik';
import { Input, Select, Checkbox, message } from 'antd';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';

import DateRangeSelector from './Calendar';
import CastleImage from './CastleImage';
import CastleSelect from './CastleSelect';
import { CastleOption } from './castleAvailability';
import DeliveryOption from './Delivery';
import { formValidation } from './validation';
import { orders, checkAvailability, OrderData } from './castleAvailability'; 

//Destructuring the Select object from antd
const { Option } = Select;

export const Reservation = () => {
  const [selectedCastle, setSelectedCastle] = useState<CastleOption | null>(null);

  //Form validation (yup)
  const validationSchema = formValidation;

  //Submission control
  const onSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    const startDate = values.startDate;
    const endDate = values.endDate;

    if (selectedCastle && startDate && endDate) {
      const isAvailable = checkAvailability(selectedCastle, startDate, endDate, orders);

      if (!isAvailable) {
        message.error('Wybrany zakres dat jest niedostępny. Proszę wybrać inny termin.');
        setSubmitting(false); 
        return; 
      }

      const newOrder: OrderData = {
        id: `${Math.random()}`, 
        itemType: selectedCastle,
        rentStartDate: { seconds: startDate.getTime() / 1000 },
        rentEndDate: { seconds: endDate.getTime() / 1000 }
      };

      orders.push(newOrder);
      message.success('Formularz został pomyślnie wysłany.');

      resetForm(); //Resets form
      setSelectedCastle(null); //Resets chosen castle and calendar

      //OUTPUT - values from form
      console.log('Wartości formularza:', values);
    }
  };

  return (
    <section className="reservation">
      <div className="container mt-10 max-w-7xl flex">
        <div className="form-container xl:ml-14 xl:mr-24 lg:mr-20 lg:ml-10 sm:mx-10 xs:mx-4">
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
              pickUpTime: null,
              startDate: null,
              endDate: null
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
              isSubmitting,
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
                  <div className="date-selector flex">
                    <DateRangeSelector
                      onDateChange={(ranges) => {
                        setFieldValue('startDate', ranges.startDate);
                        setFieldValue('endDate', ranges.endDate);
                      }}
                      disabled={!selectedCastle}
                      orders={orders} 
                      selectedCastle={selectedCastle} 
                    />
                    <h5 className="sm:ml-8 max-w-44 sm:my-20 text-sm xs:mb-5 xs:mt-1 xs:ml-2">
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
                <div className="checkbox-wrapper xl:whitespace-normal max-w-lg mt-14 mb-14">
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
                <button type="submit" className="btn-submit btn-primary mb-14" disabled={isSubmitting}>
                  REZERWUJ
                </button>
              </Form>
            )}
          </Formik>
        </div>
        {/* Bubbles section */}
        <div className="bubbles-container max-w-lg mt-14 2xl:ml-12 2xxl:ml-32">
          <figure className="bubbles-images mb-24">
            <div className="cup cup1 smaller"></div>
            <div className="cup cup1 larger"></div>
            {/* Image of the selected castle */}
            <CastleImage selectedCastle={selectedCastle} />
          </figure>
          <figure className="bubbles-images">
            <div className="cup cup2 smaller2"></div>
            <div className="cup cup2 larger2"></div>
          </figure>
        </div>
      </div>
      <aside className="mt-8 mb-6 lg:mx-14 xl:mx-16 xs:mx-10">
        <p className="text-cyan-700">
          Lorem ipsum dolor sit amet consectetur. Pretium eget aliquam praesent
          vitae mauris pulvinar quam ultricies.
        </p>
      </aside>
    </section>
  );
};

export default Reservation;
