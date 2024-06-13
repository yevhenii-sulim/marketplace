import { Field, Price, Sign } from './AddProductComponent.styled';
import Label from './Label';

export default function FieldPrice({
  name,
  label,
  disabled,
  handleChange,
  setSubmitting,
  required,
  className,
  children,
}) {
  return (
    <>
      <label>
        {required ? (
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
            required={required}
            disabled={disabled}
          />
          грн
        </Price>
      </label>
    </>
  );
}
