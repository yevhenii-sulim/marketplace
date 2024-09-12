import React from 'react';
import { Field, Label } from './Placing.styled';
export default function WayPay({
  payWay,
  id,
  handleChange,
  pay,
  errors,
  label,
  forCheckbox,
  setSubmitting,
}) {
  return (
    <>
      <Field
        id={id}
        type="radio"
        name="pay"
        value={payWay}
        checked={pay === payWay}
        onChange={evt => {
          setSubmitting(false);
          handleChange(evt);
        }}
      />
      <Label $style={!!errors.pay && !pay} htmlFor={forCheckbox}>
        {label}
      </Label>
    </>
  );
}
