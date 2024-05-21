import { Field } from './AddProductComponent.styled';
import PropTypes from 'prop-types';

export default function FieldComponent({
  name,
  type,
  label,
  disabled,
  handleChange,
  setSubmitting,
  required,
  as,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field
        as={as}
        name={name}
        type={type}
        disabled={disabled}
        onChange={e => {
          setSubmitting(false);
          handleChange(e);
        }}
        required={required}
      />
    </>
  );
}
FieldComponent.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
};
