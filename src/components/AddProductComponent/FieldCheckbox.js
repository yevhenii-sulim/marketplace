import { Field } from './AddProductComponent.styled';

export default function FieldCheckbox({ name, handleChange, setSubmitting }) {
  return (
    <>
      <Field
        name={name}
        type="checkbox"
        onChange={e => {
          setSubmitting(false);
          handleChange(e);
        }}
      />
    </>
  );
}
