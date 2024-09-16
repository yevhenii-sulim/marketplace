import * as Yup from 'yup';

const phoneRegExp =
  /^\s*((\+38)[- ]?)(\(?(0)\d{2}\)?[- ]?)?\d{2}[- ]?\d{1}[- ]?\d{1}[- ]?\d{1}[- ]?\d{2}\s*$/i;
const postSchema = /^\s*[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\s*$/i;

const signupSchema = Yup.object().shape({
  firstName: Yup.string().min(2).required("Ваше ім'я"),
  lastName: Yup.string().required('Ваше прізвище'),
  tel: Yup.string()
    .matches(phoneRegExp, 'Некоректний формат номеру телефону')
    .required('Введіть номер телефону'),
  town: Yup.mixed().required('Ваше місто'),
  email: Yup.string()
    .matches(postSchema)
    .min(10, 'Не валідний')
    .required('Ваше email'),
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
  pay: Yup.string().required('Спосіб оплати'),
});

export default signupSchema;
