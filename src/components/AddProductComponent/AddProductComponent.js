import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FieldComponent from './FieldComponent';
import FieldAddImages from './FieldAddImages';
import Label from './Label';
import PriceComponent from './PriceComponent';
import FieldsCheckboxes from './FieldsCheckboxes';
import { createProduct } from '../../redux/product/thunk';
import { toggleModalView } from '../../redux/modalViewProduct/slice';
import { selectorViewAddingProductModal } from '../../redux/modalViewProduct/selectors';
import ViewAheadComponent from 'components/PreviewCheckAddedProduct/ViewAheadComponent';
import { togglePoster } from '../../redux/myPoster/slice';
import SignupSchema from './validationSchema';
import { navigationList } from 'data/navListData';
import {
  pictures,
  sizeFootwear,
  sizeClothes,
  colorProduct,
} from 'data/forAddProductPage';
import {
  Box,
  Buttons,
  ContainerAddProduct,
  Explainment,
  FieldImagesList,
  Form,
  NavLink,
  addProductButton,
  viewProductButton,
} from './AddProductComponent.styled';
import SelectorsOptions from './SelectorsOptions';

const modalEnter = document.querySelector('#modal');

export default function AddProductComponent() {
  const dispatch = useDispatch();
  const onViewProduct = useSelector(selectorViewAddingProductModal);
  function aheadViewProduct() {
    dispatch(toggleModalView(true));
  }
  function translateSexValue(value) {
    switch (value) {
      case 'Для жінок':
        return 'female';
      case 'Для чоловіків':
        return 'male';
      default:
        return 'unsex';
    }
  }
  function translateStateValue(value) {
    switch (value) {
      case 'Новий товар':
        return 'Нове';
      default:
        return 'Уживаний товар';
    }
  }
  function setCondition() {
    dispatch(togglePoster(false));
  }
  function handleSubmit(values) {
    const formData = new FormData();
    for (const key in values) {
      if (!values.hasOwnProperty(key)) return;
      if (key === 'sex') {
        formData.append('sex', translateSexValue(values[key]));
      } else if (key === 'state') {
        formData.append('state', translateStateValue(values[key]));
      } else if (key === 'subCategory') {
        formData.append('subCategory', values[key] || null);
      } else if (key === 'size') {
        if (values[key].length === 0) {
          formData.append('size', 'Без розміру');
        } else {
          formData.append('size', values[key]);
        }
      } else if (key === 'file') {
        values[key].forEach(file => formData.append('file', file));
      } else if (key === 'price') {
        formData.append('price', values[key] || 0);
      } else {
        formData.append(key, values[key]);
      }
    }
    dispatch(createProduct(formData));
  }

  return (
    <ContainerAddProduct>
      <NavLink to="/user_page/my_post_list" onClick={setCondition}>
        <CloseIcon />
      </NavLink>
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
          size: [],
          color: [],
          describe: '',
          sex: '',
          brand: '',
          isUkraine: false,
          file: [],
        }}
        validationSchema={SignupSchema}
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
          errors,
          touched,
          handleBlur,
        }) => (
          <Form>
            <Box>
              <FieldComponent
                name="title"
                require={true}
                type="text"
                label="Назва"
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                className="title"
                errors={errors.title}
                touched={touched.title}
                explainment={
                  touched.title && errors.title
                    ? errors.title
                    : 'Назва повинна містити мінімум 3 та максимум 100 символів'
                }
                placeholder="Додайте назву товару, наприклад: Нічний крем для сухої шкіри, 50 мл"
              />
              <FieldComponent
                require={true}
                as="textarea"
                handleBlur={handleBlur}
                name="describe"
                className="describe"
                label="Опис товару"
                handleChange={e => {
                  handleChange(e);
                }}
                setSubmitting={setSubmitting}
                errors={errors.describe}
                touched={touched.describe}
                explainment={
                  touched.describe && errors.describe
                    ? errors.describe
                    : 'Опис повинен містити від 30 до 4000 символів'
                }
                placeholder="Додайте детальний опис товару, наприклад: користуючись нашою косметикою ви помітите ефект вже через пару місяців"
              />
              <FieldComponent
                name="brand"
                className="brand"
                type="text"
                label="Бренд"
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                touched={touched.brand}
                errors={errors.brand}
                explainment={
                  touched.brand && errors.brand
                    ? errors.brand
                    : 'Назва бренду не повинна перевищувати 50 символів'
                }
                placeholder="Введіть бренд товару"
              />
            </Box>
            <Box>
              <SelectorsOptions
                handleChange={handleChange}
                setFieldValue={setFieldValue}
                setSubmitting={setSubmitting}
                navigationList={navigationList}
                errors={errors}
                touched={touched}
                values={values}
                colorProduct={colorProduct}
                sizeFootwear={sizeFootwear}
                sizeClothes={sizeClothes}
              />
            </Box>
            <Box>
              <label>
                <Label label="Фото" />
                <Explainment>
                  Додайте фотографії вашого товару гарної якості. Перше фото
                  буде обкладинкою оголошення.
                  {touched.file && errors.file && (
                    <p className="error">{errors.file}</p>
                  )}
                </Explainment>
                <FieldImagesList>
                  {pictures.map((_, index) => (
                    <FieldAddImages
                      key={index}
                      values={values}
                      setFieldValue={setFieldValue}
                      name="file"
                    />
                  ))}
                </FieldImagesList>
              </label>
            </Box>
            <Box>
              <label className="checkbox">
                <FieldsCheckboxes
                  title="Екологічність продукту"
                  handleChange={handleChange}
                  setSubmitting={setSubmitting}
                  name="eco"
                  text="Відмітьте, якщо ваш продукт виготовлений з натуральних
                    матеріалів, не тестувався на тваринах або процес його
                    виробництва не має негативного впливу на оточуюче
                    середовище."
                />
              </label>
            </Box>
            <Box>
              <label className="checkbox">
                <FieldsCheckboxes
                  title="Український продукт"
                  handleChange={handleChange}
                  setSubmitting={setSubmitting}
                  name="isUkraine"
                  text="Відмітьте, якщо ваш товар від українського виробника."
                />
              </label>
            </Box>
            {values.category !== 'Подарую' && (
              <PriceComponent
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                values={values}
                error={errors.price}
                touched={touched.price}
              />
            )}
            <Buttons>
              <Button
                type="button"
                sx={viewProductButton}
                disabled={isSubmitting || JSON.stringify(errors) !== '{}'}
                onClick={aheadViewProduct}
              >
                Попередній перегляд
              </Button>
              <Button
                type="submit"
                sx={addProductButton}
                disabled={isSubmitting || JSON.stringify(errors) !== '{}'}
              >
                Опублікувати
              </Button>
            </Buttons>
            {onViewProduct &&
              createPortal(
                <ViewAheadComponent
                  values={values}
                  onSubmit={() => handleSubmit(values)}
                  errors={errors}
                />,
                modalEnter
              )}
          </Form>
        )}
      </Formik>
    </ContainerAddProduct>
  );
}
