import PropTypes from 'prop-types';
import Label from './Label';
import { theme } from 'utils/theme';
import {
  ExplainmentInputSign,
  Field,
  Sign,
  WrapperField,
} from './AddProductComponent.styled';

export default function FieldComponent({
  name,
  type,
  label,
  handleChange,
  setSubmitting,
  require,
  as,
  className,
  explainment,
  placeholder,
  errors,
  touched,
  handleBlur,
}) {
  return (
    <WrapperField>
      <label>
        {require ? <Label label={label} /> : <Sign>{label}</Sign>}
        <Field
          as={as}
          name={name}
          type={type}
          placeholder={placeholder}
          onBlur={handleBlur}
          style={
            touched && errors
              ? {
                  border: `3px solid ${theme.color.colorTextErrorForm}`,
                }
              : {}
          }
          onChange={e => {
            setSubmitting(false);
            handleChange(e);
          }}
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
  handleChange: PropTypes.func,
  setSubmitting: PropTypes.func,
  required: PropTypes.bool,
  as: PropTypes.string,
  className: PropTypes.string,
  explainment: PropTypes.string,
  placeholder: PropTypes.string,
};
