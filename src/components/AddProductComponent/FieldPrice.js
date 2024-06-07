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
          <Sign disabled={disabled}>{label}</Sign>
        )}
        <Price className={className}>
          {children}
          <Field
            name={name}
            type="text"
            disabled={disabled}
            onChange={e => {
              setSubmitting(false);
              handleChange(e);
            }}
            required={required}
          />
          грн
        </Price>
      </label>
    </>
  );
}
