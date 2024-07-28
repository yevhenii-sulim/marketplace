import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  firstName: Yup.string().required("Ваше ім'я"),
  lastName: Yup.string().required('Ваше прізвище'),
  tel: Yup.string().max(13, 'Забагато символів').required('Ваш номер телефону'),
  town: Yup.mixed().required('Ваше місто'),
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
