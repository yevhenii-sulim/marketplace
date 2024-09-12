import React from 'react';
import ChoosePostOffice from './ChoosePostOffice';
import { Field, Label } from './Placing.styled';
import { theme } from 'utils/theme';
import AddressDeliveryByPostMan from './AddressDeliveryByPostMan';
import ChooseTown from './ChooseTown';

export default function WayDelivery({
  handleChange,
  setSubmitting,
  setFieldValue,
  valueListTown,
  errors,
  touched,
  wayDelivery,
  refTown,
}) {
  return (
    <>
      <label>
        <ChooseTown
          handleChange={handleChange}
          setSubmitting={setSubmitting}
          name="town"
          placeholder="Оберіть ваше місто"
          setFieldValue={setFieldValue}
          valueListTown={valueListTown}
          errors={errors}
          touched={touched}
        />
      </label>
      <Field
        id="at-section"
        type="radio"
        name="wayDelivery"
        onChange={handleChange}
        value="До відділення Нової Пошти"
        checked={wayDelivery === 'До відділення Нової Пошти'}
        style={
          touched.wayDelivery && errors.wayDelivery
            ? {
                border: 'none',
                boxShadow: `inset 0 0 0 3px ${theme.color.colorTextErrorForm}`,
              }
            : {}
        }
      />
      <Label $style={!!errors.wayDelivery && !wayDelivery} htmlFor="at-section">
        До відділення Нової Пошти
      </Label>
      {wayDelivery === 'До відділення Нової Пошти' && (
        <ChoosePostOffice
          handleChange={handleChange}
          setSubmitting={setSubmitting}
          setFieldValue={setFieldValue}
          errors={errors}
          touched={touched}
          town={refTown}
          kindOfSection="Відділення"
        />
      )}
      <Field
        id="at-post"
        type="radio"
        name="wayDelivery"
        value="До поштомату Нової Пошти"
        checked={wayDelivery === 'До поштомату Нової Пошти'}
        onChange={handleChange}
        style={
          touched.wayDelivery && errors.wayDelivery
            ? {
                border: 'none',
                boxShadow: `inset 0 0 0 3px ${theme.color.colorTextErrorForm}`,
              }
            : {}
        }
      />
      <Label $style={!!errors.wayDelivery && !wayDelivery} htmlFor="at-post">
        До поштомату Нової Пошти
      </Label>
      {wayDelivery === 'До поштомату Нової Пошти' && (
        <ChoosePostOffice
          handleChange={handleChange}
          setSubmitting={setSubmitting}
          setFieldValue={setFieldValue}
          errors={errors}
          touched={touched}
          town={refTown}
          kindOfSection={'Поштомат або пункт для видачі'}
        />
      )}
      <Field
        id="by-postman"
        type="radio"
        name="wayDelivery"
        onChange={handleChange}
        value="Кур'єром Нової Пошти"
        checked={wayDelivery === "Кур'єром Нової Пошти"}
        style={
          touched.wayDelivery && errors.wayDelivery
            ? {
                border: 'none',
                boxShadow: `inset 0 0 0 3px ${theme.color.colorTextErrorForm}`,
              }
            : {}
        }
      />
      <Label $style={!!errors.wayDelivery && !wayDelivery} htmlFor="by-postman">
        Кур'єром Нової Пошти
      </Label>
      {wayDelivery === "Кур'єром Нової Пошти" && (
        <AddressDeliveryByPostMan
          handleChange={handleChange}
          setSubmitting={setSubmitting}
          errors={errors}
          setFieldValue={setFieldValue}
          touched={touched}
          town={refTown}
        />
      )}
    </>
  );
}
