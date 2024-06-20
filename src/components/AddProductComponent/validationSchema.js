import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Щонайменше 3 символи')
    .max(50, 'Щонайбільше 50 символів')
    .required('Будь ласка додайте назву товару'),
  describe: Yup.string()
    .min(30, 'Щонайменше 30 символи')
    .max(4000, 'Щонайбільше 4000 символів')
    .required('Будь ласка додайте опис товару'),
  brand: Yup.string().max(50, 'Забагато символів'),
  category: Yup.string().required("Обов'язкове поле"),
  subCategory: Yup.string().required("Обов'язкове поле"),
  //   subCategory: Yup.string().when('category', {
  //     is: category => category !== 'Подарую',
  //     then: Yup.string().required("Обов'язкове поле"),
  //     otherwise: Yup.string().notRequired(),
  //   }),
  color: Yup.array().of(Yup.string().required()).min(1, "Обов'язкове поле"),
  sex: Yup.string().required("Обов'язкове поле"),
  size: Yup.array().of(Yup.string().required()).min(1, "Обов'язкове поле"),
  //   size: Yup.array().when('category', {
  //     is: category => category !== 'Подарую',
  //     then: Yup.array()
  //       .of(Yup.string().required("Обов'язкове поле"))
  //       .min(1, "Обов'язкове поле"),
  //     otherwise: Yup.array().notRequired(),
  //   }),
  file: Yup.array()
    .of(Yup.string().required())
    .min(1, 'Додайте мінімум 1 картинку'),
  price: Yup.number().min(1, 'Встановіть ціну').required("Обов'язкове поле"),
  //   price: Yup.number().when('category', {
  //     is: category => category !== 'Подарую',
  //     then: Yup.number().min(1, 'Встановіть ціну').required("Обов'язкове поле"),
  //     otherwise: Yup.number().notRequired(),
  //   }),
});

export default SignupSchema;
