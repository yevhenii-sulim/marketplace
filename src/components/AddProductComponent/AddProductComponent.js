import { Formik } from 'formik';
import { Button } from '@mui/material';
import { navigationList } from 'data/navListData';
import {
  ContainerAddProduct,
  Discount,
  Field,
  Form,
  Images,
  socialSingInButton,
} from './AddProductComponent.styled';
import FieldComponent from './FieldComponent';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/product/thunk';

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
// const handleDeleteIconClick = () => {
//   setImageBig([]);
//   setFieldValue('image', null);
//   const input = inputRef.current;
//   if (input) input.value = '';
// };

export default function AddProductComponent() {
  const [component, setComponent] = useState([1]);
  const [imageBig, setImageBig] = useState([]);
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  function onAddFileByClick() {
    inputRef.current?.click();
  }

  async function handleFileUpload(event, setFieldValue, value) {
    const file = event.currentTarget.files[0];
    if (file.type.split('/')[0] !== 'image') return;
    const img = URL.createObjectURL(file);
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    if (value.length === 0) {
      reader.onloadend = () => {
        setImageBig([img]);
        setFieldValue('file', [file]);
      };
    } else {
      reader.onloadend = () => {
        setImageBig(prev => [...prev, img]);
        setFieldValue('file', [...value, file]);
      };
    }
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
          size: 'Без розміру',
          color: '',
          describe: '',
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
            <FieldComponent
              required={true}
              name="title"
              type="text"
              label="Назва продукту"
              handleChange={handleChange}
              setSubmitting={setSubmitting}
            />
            <FieldComponent
              required={true}
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
              required={!values.category}
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
              required={!values.subCategory}
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
            <Field
              as="select"
              name="color"
              onChange={e => {
                handleChange(e);
                setSubmitting(false);
              }}
            >
              {colorProduct.map(({ name, sign }) => {
                return (
                  <option value={name} key={sign}>
                    {name}
                  </option>
                );
              })}
            </Field>
            <FieldComponent
              as="textarea"
              required={true}
              name="describe"
              type="text"
              label="Опис товару"
              handleChange={handleChange}
              setSubmitting={setSubmitting}
            />

            <Field name="file">
              {() =>
                component.map((_, index) => {
                  return (
                    <Button
                      key={index}
                      type="button"
                      sx={socialSingInButton}
                      onClick={onAddFileByClick}
                    >
                      Додати файл
                      <input
                        className="input-file"
                        type="file"
                        accept="image/*"
                        required={true}
                        ref={inputRef}
                        onChange={event => {
                          handleFileUpload(event, setFieldValue, values.file);
                          event.target.disabled = true;
                        }}
                      />
                    </Button>
                  );
                })
              }
            </Field>
            <Images>
              {imageBig.length !== 0 &&
                imageBig.map(item => {
                  return <img src={item} key={item} alt="img" width={100} />;
                })}
            </Images>

            <Button
              type="button"
              sx={socialSingInButton}
              onClick={evt => setComponent(prev => [...prev, 1])}
            >
              Додати поле для файлу
            </Button>
            <Button
              type="submit"
              sx={socialSingInButton}
              disabled={isSubmitting}
            >
              Створити
            </Button>
          </Form>
        )}
      </Formik>
    </ContainerAddProduct>
  );
}

// const convertToBase64 = file => {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = error => {
//       reject(error);
//     };
//   });
// };

// const handleFileUpload = async (event, setFieldValue, value) => {
//   const file = event.currentTarget.files[0];
//   setFieldValue('image', file);
//   if (file.type.split('/')[0] === 'image') {
//     const img = URL.createObjectURL(file);
//     if (value.length === 0) {
//       setImageBig([img]);
//       setFieldValue('file', [base64]);
//     } else {
//       setImageBig(prev => [...prev, img]);
//       setFieldValue('file', [...value, base64]);
//     }
//   } else {
//     console.error('Розмір зображення повинен бути менше 2 МБ');
//   }
// };
