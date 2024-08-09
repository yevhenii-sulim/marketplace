import { theme } from 'utils/theme';
import { Error, Field, Price, Sign } from './AddProductComponent.styled';
import Label from './Label';

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
  const handleChangeComponent = event => {
    const dotIndex = event.target.value.indexOf('.');
    if (event.target.value.length > 8) return;
    if (!!~dotIndex) {
      if (event.target.value.length > dotIndex + 3) return;
    }

    handleChange(event);
    setSubmitting(false);
  };
  return (
    <>
      <label>
        {require ? (
          <Label label={label} />
        ) : (
          <Sign $disable={disabled}>{label}</Sign>
        )}
        <Price className={className}>
          {children}
          <Field
            name={name}
            step="1"
            type="number"
            onChange={handleChangeComponent}
            disabled={disabled}
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
