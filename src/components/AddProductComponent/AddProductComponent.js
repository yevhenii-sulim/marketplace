import { Formik } from 'formik';
import { Button } from '@mui/material';
import { navigationList } from 'data/navListData';
import {
  ContainerAddProduct,
  Discount,
  Field,
  Form,
  socialSingInButton,
} from './AddProductComponent.styled';
import FieldComponent from './FieldComponent';

const size = [
  'Без розміру',
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL',
  'XXXL',
  'EU 36',
  'EU 37',
  'EU 38',
  'EU 39',
  'EU 40',
  'EU 41',
  'EU 42',
  'EU 43',
  'EU 44',
  'EU 45',
];
// const result = new FileReader();
export default function AddProductComponent() {
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
          subCategory: 'Сувеніри',
          state: 'Нове',
          size: 'Без розміру',
          color: '',
          brand: '',
          describe: '',
          file: [],
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({
          isSubmitting,
          values,
          handleChange,
          setSubmitting,
          setFieldValue,
        }) => (
          <Form>
            <FieldComponent
              name="title"
              type="text"
              label="Назва продукту"
              handleChange={handleChange}
              setSubmitting={setSubmitting}
            />
            <FieldComponent
              name="price"
              type="text"
              label="Ціна продукту"
              handleChange={handleChange}
              setSubmitting={setSubmitting}
            />
            <Discount>
              <FieldComponent
                name="discount"
                type="checkbox"
                label="Знижка продукту"
                handleChange={handleChange}
                setSubmitting={setSubmitting}
              />
              <FieldComponent
                name="discountPrice"
                disabled={!values.discount}
                type="text"
                handleChange={handleChange}
                setSubmitting={setSubmitting}
              />
            </Discount>
            <FieldComponent
              name="eco"
              type="checkbox"
              label="Товар з еко матеріалів"
              handleChange={handleChange}
              setSubmitting={setSubmitting}
            />
            <Field
              as="select"
              name="category"
              onChange={e => {
                handleChange(e);
                setSubmitting(false);
              }}
            >
              {navigationList.map(({ nameList }) => {
                if (nameList === 'Всі оголошення') {
                  return (
                    <option value="" key={nameList}>
                      Оберіть категорію
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
            <Field
              as="select"
              name="subCategory"
              disabled={!values.category}
              onChange={e => {
                handleChange(e);
                setSubmitting(false);
              }}
            >
              <option value="">Оберіть підкатегорію</option>
              {navigationList
                .filter(({ nameList }) => nameList === values.category)
                .map(({ subCategories }) =>
                  subCategories.map(({ nameList }) => {
                    return (
                      <option value={nameList} key={nameList}>
                        {nameList}
                      </option>
                    );
                  })
                )}
            </Field>
            <Field
              as="select"
              name="state"
              onChange={e => {
                handleChange(e);
                setSubmitting(false);
              }}
            >
              <option value="Нове">Нове</option>
              <option value="Вживаний товар">Вживаний товар</option>
            </Field>
            <Field
              as="select"
              name="size"
              onChange={e => {
                handleChange(e);
                setSubmitting(false);
              }}
            >
              {size.map(size => {
                return (
                  <option value={size} key={size}>
                    {size}
                  </option>
                );
              })}
            </Field>
            <FieldComponent
              name="color"
              type="text"
              label="Колір"
              handleChange={handleChange}
              setSubmitting={setSubmitting}
            />
            <FieldComponent
              name="brand"
              type="text"
              label="Бренд"
              handleChange={handleChange}
              setSubmitting={setSubmitting}
            />
            <FieldComponent
              name="describe"
              type="text"
              label="Опис товару"
              handleChange={handleChange}
              setSubmitting={setSubmitting}
            />
            <FieldComponent
              name="file"
              type="file"
              label="Додайте картинку"
              setFieldValue={setFieldValue}
              setSubmitting={setSubmitting}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              sx={socialSingInButton}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </ContainerAddProduct>
  );
}
