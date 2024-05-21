import { Field } from './AddProductComponent.styled';
import PropTypes from 'prop-types';

const convertToBase64 = file => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = error => {
      reject(error);
    };
  });
};

const handleFileUpload = async (event, setFieldValue) => {
  const file = event.currentTarget.files[0];
  if (file?.size / 1024 / 1024 < 2) {
    const base64 = await convertToBase64(file);
    setFieldValue('file', base64);
  } else {
    console.error('Розмір зображення повинен бути менше 2 МБ');
  }
};
export default function FieldComponent({
  name,
  type,
  label,
  disabled,
  handleChange,
  setSubmitting,
  setFieldValue,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        type={type}
        disabled={disabled}
        onChange={e => {
          setSubmitting(false);
          if (e.target.type === 'file') {
            handleFileUpload(e, setFieldValue);
            return;
          }
          handleChange(e);
        }}
      />
    </>
  );
}
FieldComponent.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
};
