import { useState } from 'react';
import { FormField } from './ProfilePage.styled';

export default function InputField({
  label,
  placeholder,
  onChange,
  value,
  required = false,
  disabled = false,
  inputType = 'text',
  width,
  onBlur,
}) {
  const [error, setError] = useState(false);

  return (
    <FormField required={required} $width={width}>
      {disabled ? (
        <>
          <p>{label}</p>
          <span>{value || '-'}</span>
        </>
      ) : (
        <>
          <label>{label}</label>
          <input
            placeholder={placeholder}
            type={inputType}
            value={value}
            onBlur={onBlur}
            onChange={event => {
              if (event.target.value.length > 21) {
                setError(true);
                return;
              }
              onChange(event);
            }}
          />
          {error && <p className="error">Довжина від 2 до 20 символів</p>}
        </>
      )}
    </FormField>
  );
}
