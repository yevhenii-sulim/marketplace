import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Щонайменше 3 символи')
    .max(100, 'Щонайбільше 100 символів')
    .required('Будь ласка додайте назву товару'),
  describe: Yup.string()
    .min(30, 'Щонайменше 30 символи')
    .max(4000, 'Щонайбільше 4000 символів')
    .required('Будь ласка додайте опис товару'),
  brand: Yup.string().max(50, 'Забагато символів'),
  category: Yup.string().required("Обов'язкове поле"),
  subCategory: Yup.string().when('category', {
    is: category => category !== 'Подарую',
    then: e => e.required("Обов'язкове поле"),
    otherwise: e => e.nullable().default(null),
  }),
  color: Yup.array().min(1, 'Вкажіть колір'),
  sex: Yup.string().required("Обов'язкове поле"),
  size: Yup.array().when('category', {
    is: category =>
      category === 'Одяг' || category === 'Взуття з натуральних матеріалів',
    then: e => e.min(1, 'Вкажіть розмір'),
    otherwise: e => e.nullable().default(() => ['Без розміру']),
  }),
  file: Yup.array()
    .of(Yup.string().required())
    .min(1, 'Додайте мінімум 1 картинку'),
  price: Yup.number().when('category', {
    is: category => category !== 'Подарую',
    then: e =>
      e
        .min(1, 'Встановіть ціну')
        .max(99999999, 'Дуже дорого')
        .required("Обов'язкове поле"),
    otherwise: e => e.nullable().default(() => 0),
  }),
});

export default SignupSchema;
