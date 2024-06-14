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
            type="text"
            onChange={e => {
              setSubmitting(false);
              handleChange(e);
            }}
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
