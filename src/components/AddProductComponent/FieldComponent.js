import {
  ExplainmentInputSign,
  Field,
  Sign,
  WrapperField,
} from './AddProductComponent.styled';
import PropTypes from 'prop-types';
import Label from './Label';

export default function FieldComponent({
  name,
  type,
  label,
  disabled,
  handleChange,
  setSubmitting,
  required,
  as,
  className,
  explainment,
  min,
  max,
  placeholder,
}) {
  return (
    <WrapperField>
      <label>
        {required ? <Label label={label} /> : <Sign>{label}</Sign>}
        <Field
          as={as}
          name={name}
          type={type}
          disabled={disabled}
          min={min}
          max={max}
          placeholder={placeholder}
          onChange={e => {
            setSubmitting(false);
            handleChange(e);
          }}
          required={required}
          className={className}
        />
        <ExplainmentInputSign>{explainment}</ExplainmentInputSign>
      </label>
    </WrapperField>
  );
}
FieldComponent.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  setSubmitting: PropTypes.func,
  required: PropTypes.bool,
  as: PropTypes.string,
  className: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  explainment: PropTypes.string,
  placeholder: PropTypes.string,
};
