import {
  Explainment,
  IsCheckbox,
  SignTitle,
  TextCheckbox,
} from './AddProductComponent.styled';
import FieldCheckbox from './FieldCheckbox';

export default function FieldsCheckboxes({
  title,
  handleChange,
  setSubmitting,
  text,
  name,
}) {
  return (
    <TextCheckbox>
      <SignTitle>{title}</SignTitle>
      <FieldCheckbox
        name={name}
        handleChange={handleChange}
        setSubmitting={setSubmitting}
      />
      <IsCheckbox className="is_checked"></IsCheckbox>
      <Explainment className="sign_checkbox">{text}</Explainment>
    </TextCheckbox>
  );
}
