import { theme } from 'utils/theme';
import { Error, Field, Price, Sign } from './AddProductComponent.styled';
import Label from './Label';
import { useState } from 'react';

export default function FieldPrice({
  name,
  label,
  disabled,
  handleChange,
  setSubmitting,
  require,
  className,
  children,
  error,
  touched,
}) {
  const [value, setValue] = useState('');

  const handleChangeComponent = event => {
    const inputValue = event.target.value;
    const match = inputValue.match(/\D/g);

    if (event.target.value.length > 8) return;
    handleChange(event);
    setSubmitting(false);
    if (match) return;
    setValue(Number(event.target.value).toFixed());
  };
  return (
    <>
      <label>
        {require ? (
          <Label label={label} />
        ) : (
          <Sign $disable={disabled} style={{ paddingLeft: '25px' }}>
            {label}
          </Sign>
        )}
        <Price className={className}>
          {children}
          <Field
            name={name}
            step="1"
            type="number"
            className="price-field"
            onChange={handleChangeComponent}
            disabled={disabled}
            value={value}
            style={
              touched && error
                ? {
                    border: `3px solid ${theme.color.colorTextErrorForm}`,
                  }
                : {}
            }
          />
          грн
        </Price>
        {touched && error && <Error>{error}</Error>}
      </label>
    </>
  );
}
