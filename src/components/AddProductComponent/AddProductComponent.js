import { Formik } from 'formik';
import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { navigationList } from 'data/navListData';
import {
  Box,
  Buttons,
  ContainerAddProduct,
  Explainment,
  Field,
  FieldImagesList,
  Form,
  IsCheckbox,
  SelectorsList,
  Sign,
  TextCheckbox,
  addProductButton,
  viewProductButton,
} from './AddProductComponent.styled';
import FieldComponent from './FieldComponent';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/product/thunk';
import FieldAddImages from './FieldAddImages';
import Label from './Label';
import FieldCheckbox from './FieldCheckbox';
import FieldPrice from './FieldPrice';
const sizeFootwear = [
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
];
const sizeClothes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const colorProduct = [
  { name: 'Білий', sign: '#ffffff' },
  { name: 'Чорний', sign: '#000000' },
  { name: 'Сірий', sign: '#D9D9D9' },
  { name: 'Бежевий', sign: '#F8DFC4' },
  { name: 'Червоний', sign: '#ff0000' },
  { name: 'Жовтий', sign: '#FFF500' },
  { name: 'Помаранчевий', sign: '#FFBF00' },
  { name: 'Синій', sign: '#0068CE' },
  { name: 'Блакитний', sign: '#BCD7FF' },
  { name: 'Рожевий', sign: '#FFAEED' },
  { name: 'Зелений', sign: '#43C550' },
  { name: 'Фіолетовий', sign: '#DB01FF' },
  { name: 'Золотий', sign: ['#F9D993', '#D9AC35'] },
  { name: 'Сріблястий', sign: ['#D9D9D9', '#737373'] },
];

export default function AddProductComponent() {
  const dispatch = useDispatch();
  function handleSubmit(values) {
    const formData = new FormData();
    for (const key in values) {
      if (!values.hasOwnProperty(key)) return;
      if (key === 'file') {
        values[key].forEach(file => formData.append('file', file));
      } else {
        formData.append(key, values[key]);
      }
    }
    dispatch(createProduct(formData));
  }

  return (
    <ContainerAddProduct>
      <Formik
        initialValues={{
          title: '',
          price: 0,
          discount: false,
          eco: false,
          discountPrice: 0,
          category: '',
          subCategory: '',
          state: 'Нове',
          size: 'Без розміру',
          color: [],
          describe: '',
          sex: '',
          brand: '',
          isUkraine: false,
          file: [],
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {({
          setFieldValue,
          values,
          handleChange,
          setSubmitting,
          isSubmitting,
        }) => (
          <Form>
            <Box>
              <FieldComponent
                required={true}
                name="title"
                type="text"
                label="Назва продукту"
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                className="title"
                explainment="Назва повинна містити мінімум 3 та максимум 100 символів"
                placeholder="Додайте назву товару, наприклад: Нічний крем для сухої шкіри, 50 мл"
                max={100}
                min={3}
              />
              <FieldComponent
                as="textarea"
                required={true}
                name="describe"
                className="describe"
                type="text"
                label="Опис товару"
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                explainment="Опис повинен містити від 30 до 4000 символів"
                placeholder="Додайте детальний опис товару, наприклад: користуючись нашою косметикою ви помітите ефект вже через пару місяців"
                max={4000}
                min={30}
              />
              <FieldComponent
                name="brand"
                className="brand"
                type="text"
                label="Бренд"
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                explainment="Додатковий текст"
                placeholder="Введіть бренд товару"
              />
            </Box>
            <Box>
              <SelectorsList>
                <li>
                  <label>
                    <Label label="Категорія" />
                    <Field
                      required={true}
                      as="select"
                      name="category"
                      className="category"
                      onChange={e => {
                        handleChange(e);
                        setSubmitting(false);
                      }}
                    >
                      {navigationList.map(({ nameList }) => {
                        if (nameList === 'Всі оголошення') {
                          return (
                            <option value="" key={nameList} selected>
                              Оберіть одну з категорій
                            </option>
                          );
                        }
                        return (
                          <option value={nameList} key={nameList}>
                            {nameList}
                          </option>
                        );
                      })}
                    </Field>
                  </label>
                </li>
                <li>
                  <label>
                    {!values.category ||
                    values.category === 'Подарую/віддам' ? (
                      <Sign>Підкатегорія</Sign>
                    ) : (
                      <Label label="Підкатегорія" />
                    )}
                    <Field
                      required={
                        values.category || values.category !== 'Подарую/віддам'
                      }
                      as="select"
                      name="subCategory"
                      className="subCategory"
                      label="Підкатегорія"
                      disabled={
                        !values.category || values.category === 'Подарую/віддам'
                      }
                      onChange={e => {
                        handleChange(e);
                        setSubmitting(false);
                      }}
                    >
                      <option value="" selected>
                        Оберіть підкатегорію товару
                      </option>
                      {navigationList
                        .filter(({ nameList }) => {
                          return nameList === values.category;
                        })
                        .map(({ subCategories }) =>
                          subCategories?.map(({ nameList }) => {
                            return (
                              <option value={nameList} key={nameList}>
                                {nameList}
                              </option>
                            );
                          })
                        )}
                    </Field>
                  </label>
                </li>
                <li>
                  <label>
                    Стан
                    <Field
                      as="select"
                      name="state"
                      className="state"
                      onChange={e => {
                        handleChange(e);
                        setSubmitting(false);
                      }}
                    >
                      <option value="Нове" selected>
                        Оберіть стан товару
                      </option>
                      <option value="Нове">Нове</option>
                      <option value="Вживаний товар">Вживаний товар</option>
                    </Field>
                  </label>
                </li>
                <li>
                  <label>
                    <Label label="Колір" />
                    <Field
                      as="select"
                      name="color"
                      className="color"
                      onChange={e => {
                        handleChange(e);
                        setSubmitting(false);
                      }}
                    >
                      <option value="" selected>
                        Оберіть не більше 3 кольорів
                      </option>

                      {colorProduct.map(({ name, sign }) => {
                        return (
                          <option value={name} key={sign}>
                            {name}
                          </option>
                        );
                      })}
                    </Field>
                  </label>
                </li>
                <li>
                  <label>
                    <Label label="Стать" />
                    <Field
                      as="select"
                      name="sex"
                      className="sex"
                      onChange={e => {
                        handleChange(e);
                        setSubmitting(false);
                      }}
                    >
                      <option value="" selected>
                        Оберіть кому підходить товар
                      </option>
                      <option value="Для жінок" selected>
                        Для жінок
                      </option>
                      <option value="Для чоловіків">Для чоловіків</option>
                      <option value="Унісекс">Унісекс</option>
                    </Field>
                  </label>
                </li>
                {(values.category === 'Взуття з натуральних матеріалів' ||
                  values.category === 'Вишивка') && (
                  <li>
                    <label>
                      <Label label="Розмір" />
                      <Field
                        as="select"
                        name="size"
                        className="size"
                        category={values.category}
                        onChange={e => {
                          handleChange(e);
                          setSubmitting(false);
                        }}
                      >
                        <option value="" selected>
                          Оберіть розмір
                        </option>
                        {values.category === 'Взуття з натуральних матеріалів'
                          ? sizeFootwear.map(size => {
                              return (
                                <option value={size} key={size}>
                                  {size}
                                </option>
                              );
                            })
                          : sizeClothes.map(size => {
                              return (
                                <option value={size} key={size}>
                                  {size}
                                </option>
                              );
                            })}
                      </Field>
                    </label>
                  </li>
                )}
              </SelectorsList>
            </Box>
            <Box>
              <label>
                <Label label="Фото" />
                <Explainment>
                  Додайте фотографії вашого товару гарної якості. Перше фото
                  буде обкладинкою оголошення.
                </Explainment>
                <FieldImagesList>
                  <FieldAddImages
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  <FieldAddImages
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  <FieldAddImages
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  <FieldAddImages
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  <FieldAddImages
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  <FieldAddImages
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  <FieldAddImages
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                </FieldImagesList>
              </label>
            </Box>
            <Box>
              <label className="checkbox">
                <TextCheckbox>
                  <Sign>Екологічність продукту</Sign>
                  <FieldCheckbox
                    name="eco"
                    handleChange={handleChange}
                    setSubmitting={setSubmitting}
                  />
                  <IsCheckbox className="is_checked"></IsCheckbox>
                  <Explainment className="sign_checkbox">
                    Відмітьте, якщо ваш продукт виготовлений з натуральних
                    метеріалів, не тестувався на тваринах або процес його
                    виробництва не має негативного впливу на оточуюче
                    середовище.
                  </Explainment>
                </TextCheckbox>
              </label>
            </Box>
            <Box>
              <label className="checkbox">
                <TextCheckbox>
                  <Sign>Український продукт</Sign>
                  <FieldCheckbox
                    name="isUkraine"
                    handleChange={handleChange}
                    setSubmitting={setSubmitting}
                  />
                  <IsCheckbox className="is_checked"></IsCheckbox>
                  <Explainment className="sign_checkbox">
                    Відмітьте, якщо ваш товар від українського виробника.
                  </Explainment>
                </TextCheckbox>
              </label>
            </Box>
            <Box className="price_box">
              <FieldPrice
                name="price"
                label="Ціна"
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                required={true}
                className="price"
              />
              <FieldPrice
                name="discountPrice"
                label="Ціна зі знижкою"
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                required={false}
                disabled={!values.discount}
                className="discountPrice"
              >
                <FieldCheckbox
                  name="discount"
                  handleChange={handleChange}
                  setSubmitting={setSubmitting}
                />
                <div className="is_discount">
                  <CheckIcon />
                </div>
              </FieldPrice>
            </Box>
            <Buttons>
              <Button
                type="button"
                sx={viewProductButton}
                disabled={isSubmitting}
              >
                Попередній перегляд
              </Button>
              <Button
                type="submit"
                sx={addProductButton}
                disabled={isSubmitting}
              >
                Опублікувати
              </Button>
            </Buttons>
          </Form>
        )}
      </Formik>
    </ContainerAddProduct>
  );
}
