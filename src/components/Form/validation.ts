import * as Yup from 'yup';


export const formValidation = Yup.object({
    fullName: Yup.string()
    .matches(/^[A-Za-z]+( [A-Za-z]+)?$/, "Imię i Nazwisko może zawierać tylko litery i jedną spację")
    .min(4, "Imię i Nazwisko musi zawierać co najmniej 4 znaki")
    .max(64, "Imię i Nazwisko może zawierać maksymalnie 64 znaki")
    .required('Imię i Nazwisko są wymagane'),
    phoneNumber: Yup.string()
    .matches(/^\d{9}$/, "Podaj prawidłowy numer telefonu")
    .required('Numer Telefonu jest wymagany'),
    castleType: Yup.string().required('Rodzaj Zamku jest wymagany'),
    deliveryType: Yup.string().required('Rodzaj dostawy jest wymagany'),
    payment: Yup.string().required('Rodzaj płatności jest wymagany'),
    checkbox: Yup.boolean().oneOf([true], 'Musisz wyrazić zgodę'),
    addressCity: Yup.string().when('deliveryType', {
      is: (value: string) => value === 'home-delivery',
      then: (schema) => schema.required('Miejscowość jest wymagana')
      .max(64, "Miasto może zawierać maksymalnie 64 znaki"),
      otherwise: (schema) => schema.notRequired()
    }),
    addressStreet: Yup.string().when('deliveryType', {
      is: (value: string) => value === 'home-delivery',
      then: (schema) => schema.required('Ulica jest wymagana')
      .max(64, "Ulica może zawierać maksymalnie 64 znaki"),
      otherwise: (schema) => schema.notRequired()
    }),
    addressHomeNumber: Yup.string().when('deliveryType', {
      is: (value: string) => value === 'home-delivery',
      then: (schema) => schema.required('Numer domu jest wymagany')
      .max(6, "Numer lokalu może zawierać maksymalnie 6 znaków"),
      otherwise: (schema) => schema.notRequired()
    }),
    addressZipCode: Yup.string().when('deliveryType', {
      is: (value: string) => value === 'home-delivery',
      then: (schema) => schema.matches(/^[0-9]{2}-[0-9]{3}$/, 'Kod pocztowy musi być w formacie xx-xxx')
      .required('Kod pocztowy jest wymagany'),
      otherwise: (schema) => schema.notRequired()
    }),
    deliveryTime: Yup.number().when('deliveryType', {
      is: (value: string) => value === 'home-delivery',
      then: (schema) => schema.required('Preferowana godzina dostawy jest wymagana'),
      otherwise: (schema) => schema.notRequired()
    }),
    pickUpTime: Yup.number().when('deliveryType', {
      is: (value: string) => value === 'home-delivery',
      then: (schema) => schema.required('Preferowana godzina odbioru jest wymagana'),
      otherwise: (schema) => schema.notRequired()
    }),
  });