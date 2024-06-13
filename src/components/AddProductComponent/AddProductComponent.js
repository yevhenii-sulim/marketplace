import { createPortal } from 'react-dom';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { navigationList } from 'data/navListData';
import FieldComponent from './FieldComponent';
import { useDispatch, useSelector } from 'react-redux';
import FieldAddImages from './FieldAddImages';
import Label from './Label';
import MultipleSelectColor from './MultipleSelectColor';
import MultipleSelectCategory from './MultipleSelectCategory';
import MultipleSelectSubCategory from './MultipleSelectSubCategory';
import MultipleSelectSex from './MultipleSelectSex';
import MultipleSelectState from './MultipleSelectState';
import MultipleSelectSize from './MultipleSelectSize';
import PriceComponent from './PriceComponent';
import FieldsCheckboxes from './FieldsCheckboxes';
import { createProduct } from '../../redux/product/thunk';
import {
  Box,
  Buttons,
  ContainerAddProduct,
  Explainment,
  FieldImagesList,
  Form,
  SelectorsList,
  addProductButton,
  viewProductButton,
} from './AddProductComponent.styled';
import {
  pictures,
  sizeFootwear,
  sizeClothes,
  colorProduct,
} from 'data/forAddProductPage';
import { toggleModalView } from '../../redux/modalViewProduct/slice';
import ViewAheadComponent from 'components/ViewAhead/ViewAheadComponent';
import { selectorViewAddingProductModal } from '../../redux/modalViewProduct/selectors';

const modalEnter = document.querySelector('#modal');

export default function AddProductComponent() {
  const dispatch = useDispatch();
  const onViewProduct = useSelector(selectorViewAddingProductModal);
  function aheadViewProduct() {
    dispatch(toggleModalView(true));
  }
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
          size: [],
          color: [],
          describe: '',
          sex: '',
          brand: '',
          isUkraine: false,
          file: [],
        }}
        onSubmit={values => {
          console.log(values);
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
                name="title"
                required={true}
                type="text"
                label="Назва"
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                className="title"
                explainment="Назва повинна містити мінімум 3 та максимум 100 символів"
                placeholder="Додайте назву товару, наприклад: Нічний крем для сухої шкіри, 50 мл"
              />
              <FieldComponent
                required={true}
                as="textarea"
                name="describe"
                className="describe"
                type="text"
                label="Опис товару"
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                explainment="Опис повинен містити від 30 до 4000 символів"
                placeholder="Додайте детальний опис товару, наприклад: користуючись нашою косметикою ви помітите ефект вже через пару місяців"
              />
              <FieldComponent
                name="brand"
                className="brand"
                type="text"
                label="Бренд"
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                explainment="Назва бренду не повинна перевищувати 50 символів"
                placeholder="Введіть бренд товару"
              />
            </Box>
            <Box>
              <SelectorsList>
                <li>
                  <label>
                    <Label label="Категорія" />
                    <MultipleSelectCategory
                      handleChange={handleChange}
                      setSubmitting={setSubmitting}
                      names={navigationList}
                      name="category"
                    />
                  </label>
                </li>
                {values.category !== 'Подарую/віддам' && (
                  <li>
                    <label>
                      <Label label="Підкатегорія" />
                      <MultipleSelectSubCategory
                        handleChange={handleChange}
                        setSubmitting={setSubmitting}
                        names={navigationList}
                        name="subCategory"
                        values={values}
                      />
                    </label>
                  </li>
                )}
                <li>
                  <label>
                    Стан
                    <MultipleSelectState
                      handleChange={handleChange}
                      setSubmitting={setSubmitting}
                      name="state"
                      placeholder="Оберіть стан товару"
                    />
                  </label>
                </li>
                <li>
                  <label>
                    <Label label="Колір" />
                    <MultipleSelectColor
                      names={colorProduct}
                      handleChange={handleChange}
                      setSubmitting={setSubmitting}
                    />
                  </label>
                </li>

                <li>
                  <label>
                    <Label label="Стать" />
                    <MultipleSelectSex
                      handleChange={handleChange}
                      setSubmitting={setSubmitting}
                      name="sex"
                      placeholder="Оберіть кому підходить товар"
                    />
                  </label>
                </li>
                {(values.category === 'Взуття з натуральних матеріалів' ||
                  values.category === 'Вишивка') && (
                  <li>
                    <label>
                      <Label label="Розмір" />
                      <MultipleSelectSize
                        handleChange={handleChange}
                        setSubmitting={setSubmitting}
                        sizeFootwear={sizeFootwear}
                        sizeClothes={sizeClothes}
                        values={values}
                        name="size"
                      />
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
                  {pictures.map((_, index) => (
                    <FieldAddImages
                      key={index}
                      values={values}
                      setFieldValue={setFieldValue}
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
            {values.category !== 'Подарую/віддам' && (
              <PriceComponent
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                values={values}
              />
            )}
            <Buttons>
              <Button
                type="button"
                sx={viewProductButton}
                disabled={isSubmitting}
                onClick={aheadViewProduct}
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
            {onViewProduct && createPortal(<ViewAheadComponent />, modalEnter)}
          </Form>
        )}
      </Formik>
    </ContainerAddProduct>
  );
}
