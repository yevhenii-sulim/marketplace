import { Field } from './AddProductComponent.styled';

export default function FieldCheckbox({
  name,
  handleChange,
  setSubmitting,
  disabled,
}) {
  return (
    <>
      <Field
        name={name}
        type="checkbox"
        disabled={disabled}
        onChange={e => {
          setSubmitting(false);
          handleChange(e);
        }}
      />
    </>
  );
}
