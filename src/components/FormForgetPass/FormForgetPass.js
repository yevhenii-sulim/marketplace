import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import {
  ContainerForm,
  Field,
  Form,
  socialSingInButton,
  ErrorMessage,
} from './FormForgetPass.styled';
import { sendQueryRestorePassword } from '../../redux/auth/thunk';

export default function FormForgetPass() {
  const dispatch = useDispatch();

  return (
    <ContainerForm>
      <Formik
        initialValues={{ email: '' }}
        validateOnChange={false}
        validateOnBlur={false}
        validate={values => {
          const errors = {};

          if (!values.email.trim()) {
            errors.email = "Обов'язкове поле";
          }
          return errors;
        }}
        onSubmit={values => {
          dispatch(sendQueryRestorePassword(values));
        }}
      >
        {({ isSubmitting, handleChange, setSubmitting }) => (
          <Form>
            <label>
              Введіть ел. пошту
              <Field
                type="email"
                name="email"
                onChange={e => {
                  handleChange(e);
                  setSubmitting(false);
                }}
              />
              <ErrorMessage name="email" component="p" />
            </label>

            <Button
              type="submit"
              disabled={isSubmitting}
              sx={socialSingInButton}
            >
              Надіслати код
            </Button>
          </Form>
        )}
      </Formik>
    </ContainerForm>
  );
}
