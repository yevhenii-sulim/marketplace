import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Ім'я має складатися з щонайменше 3 символи")
    .max(100, "Ім'я має складатися з щонайбільше 100 символів")
    .required('Будь ласка, додайте назву товару'),
  describe: Yup.string()
    .min(30, 'Опис повинен мати щонайменше 30 символи')
    .max(4000, 'Опис товару повинен мати щонайбільше 4000 символів')
    .required('Будь ласка, додайте опис товару'),
  brand: Yup.string().max(50, 'В полі бренд забагато символів'),
  category: Yup.string().required("Категорія є обов'язковим "),
  subCategory: Yup.string().when('category', {
    is: category => category !== 'Подарую',
    then: e => e.required("Підкатегорія є обов'язковим "),
    otherwise: e => e.nullable().default(null),
  }),
  color: Yup.array().min(1, 'Вкажіть колір'),
  sex: Yup.string().required("Стать є обов'язковим полем"),
  size: Yup.array().when('category', {
    is: category =>
      category === 'Одяг' || category === 'Взуття з натуральних матеріалів',
    then: e => e.min(1, 'Вкажіть розмір'),
    otherwise: e => e.nullable().default(() => ['Без розміру']),
  }),
  file: Yup.array()
    .of(Yup.string().required())
    .min(1, 'Додайте мінімум 1 картинку'),
  price: Yup.string().when('category', {
    is: category => category !== 'Подарую',
    then: e => e.required("Ціна є обов'язкове поле"),
    otherwise: e => e.nullable().default(() => '0'),
  }),
});

export default SignupSchema;
