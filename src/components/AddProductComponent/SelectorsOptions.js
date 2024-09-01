import React from 'react';
import MultipleSelectCategory from './MultipleSelectCategory';
import { SelectorsList } from './AddProductComponent.styled';
import Label from './Label';
import MultipleSelectSubCategory from './MultipleSelectSubCategory';
import MultipleSelectState from './MultipleSelectState';
import MultipleSelectColor from './MultipleSelectColor';
import MultipleSelectSexState from './MultipleSelectSexState';
import MultipleSelectSize from './MultipleSelectSize';

export default function SelectorsOptions({
  handleChange,
  setFieldValue,
  setSubmitting,
  navigationList,
  errors,
  touched,
  values,
  colorProduct,
  sizeFootwear,
  sizeClothes,
}) {
  return (
    <SelectorsList>
      <li>
        <label>
          <Label label="Категорія" />
          <MultipleSelectCategory
            handleChange={selectedOption => {
              handleChange(selectedOption);
              setFieldValue('category', selectedOption);
              setFieldValue('subCategory', '');
              setFieldValue('price', '');
              setFieldValue('size', []);
            }}
            setSubmitting={setSubmitting}
            names={navigationList}
            name="category"
            error={errors.category}
            touched={touched.category}
          />
        </label>
      </li>
      {values.category !== 'Подарую' && (
        <li>
          <label>
            <Label label="Підкатегорія" />
            <MultipleSelectSubCategory
              handleChange={handleChange}
              setSubmitting={setSubmitting}
              names={navigationList}
              name="subCategory"
              values={values}
              error={errors.subCategory}
              touched={touched.subCategory}
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
            name="color"
            handleChange={handleChange}
            setSubmitting={setSubmitting}
            error={errors.color}
            touched={touched.color}
          />
        </label>
      </li>

      <li>
        <label>
          <Label label="Стать" />
          <MultipleSelectSexState
            handleChange={handleChange}
            setSubmitting={setSubmitting}
            name="sex"
            placeholder="Оберіть кому підходить товар"
            error={errors.sex}
            touched={touched.sex}
          />
        </label>
      </li>
      {(values.category === 'Взуття з натуральних матеріалів' ||
        values.category === 'Одяг') && (
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
              error={errors.size}
              touched={touched.size}
            />
          </label>
        </li>
      )}
    </SelectorsList>
  );
}
