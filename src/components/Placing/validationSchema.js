import * as Yup from 'yup';

const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;

const signupSchema = Yup.object().shape({
  firstName: Yup.string().required("Ваше ім'я"),
  lastName: Yup.string().required('Ваше прізвище'),
  tel: Yup.string()
    .matches(phoneRegExp, 'Некоректний формат номеру телефону')
    .required('Введіть номер телефону'),
  town: Yup.mixed().required('Ваше місто'),
  email: Yup.string().min(10, 'Не валідний').required('Ваш email'),
  wayDelivery: Yup.string().required('Спосіб доставки'),
  postOffice: Yup.string().when('wayDelivery', {
    is: wayDelivery =>
      wayDelivery === 'До відділення Нової Пошти' ||
      wayDelivery === 'До поштомату Нової Пошти',
    then: e => e.required('Вкажіть місце отримання'),
    otherwise: e => e.nullable().default(() => ''),
  }),
  street: Yup.string().when('wayDelivery', {
    is: wayDelivery => wayDelivery === "Кур'єром Нової Пошти",
    then: e => e.required('Вкажіть адресу'),
    otherwise: e => e.nullable().default(() => ''),
  }),
  building: Yup.string().when('wayDelivery', {
    is: wayDelivery => wayDelivery === "Кур'єром Нової Пошти",
    then: e => e.required('Вкажіть адресу'),
    otherwise: e => e.nullable().default(() => ''),
  }),
});

export default signupSchema;
