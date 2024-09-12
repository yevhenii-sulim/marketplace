import React from 'react';
import MarkSvg from 'SvgComponents/MarkSVG/MarkSvg';
import { Field } from './Placing.styled';
import { theme } from 'utils/theme';

export default function PlacingContactsComponent({
  name,
  handleChange,
  placeholder,
  touched,
  label,
  errors,
  value,
  type,
}) {
  console.log(name, touched[name] && errors[name]);

  return (
    <label>
      <p>
        <span className="label-place">
          {label}
          {label !== 'Електрона адреса' && <MarkSvg />}
        </span>
      </p>
      <Field
        type={type}
        name={name}
        value={value.trim()}
        onChange={handleChange}
        placeholder={placeholder}
        style={
          touched[name] && errors[name]
            ? {
                border: 'none',
                boxShadow: `inset 0 0 0 3px ${theme.color.colorTextErrorForm}`,
              }
            : {}
        }
      />
    </label>
  );
}
