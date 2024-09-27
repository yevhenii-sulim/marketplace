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
  error,
  errorText,
}) {
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
            onChange={onChange}
          />
          {error && <p className="error">{errorText}</p>}
        </>
      )}
    </FormField>
  );
}
