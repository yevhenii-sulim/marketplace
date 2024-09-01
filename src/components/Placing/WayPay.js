import React from 'react';
import { Field } from './Placing.styled';
import { theme } from 'utils/theme';

export default function WayPay({
  payWay,
  id,
  handleChange,
  pay,
  touched,
  errors,
  label,
}) {
  return (
    <>
      <Field
        id={id}
        type="radio"
        name="pay"
        value={payWay}
        checked={pay === payWay}
        onChange={handleChange}
        style={
          touched.pay && errors.pay
            ? {
                border: 'none',
                boxShadow: `inset 0 0 0 3px ${theme.color.colorTextErrorForm}`,
              }
            : {}
        }
      />
      <label className="checkbox" htmlFor="after-pay">
        {label}
      </label>
    </>
  );
}
