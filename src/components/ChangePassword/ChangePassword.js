import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { restorePassword } from '../../redux/auth/thunk';
import { toggleModalAuth } from '../../redux/modalAuth/slice';
import FieldPasswordComponent from './FieldPasswordComponent';
import {
  ContainerForm,
  ErrorMessage,
  Form,
  socialSingInButton,
  cancelButton,
} from './ChangePassword.styled';
import { useNavigate } from 'react-router-dom';

export default function ChangePassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onOpen() {
    navigate('/user_page/profile');
    dispatch(toggleModalAuth(true));
  }
  return (
    <ContainerForm>
      <Formik
        initialValues={{ new_password: '', confirm_new_password: '' }}
        validateOnChange={false}
        validateOnBlur={false}
        validate={values => {
          console.log(values);

          const errors = {};

          if (!values.new_password) {
            errors.new_password = "Обов'язкове поле";
          } else if (
            !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()^{}#+._=;:'",<>/№~\-|`])[A-Za-z\d@$!%*?&()^{}#+._=;:'",<>/№~\-|]{6,20}$/.test(
              values.new_password
            )
          ) {
            errors.new_password =
              'Пароль повинен складатись з літер латинниці, мати одну велику літеру, одну цифру, один спеціальний символ та мати довжину 6-20 символів.';
          }

          if (values.confirm_new_password !== values.new_password) {
            errors.confirm_new_password = 'Пароль не співпадає';
          }

          return errors;
        }}
        onSubmit={values => {
          dispatch(restorePassword({ password: values.new_password }));
        }}
      >
        {sas => (
          <Form>
            <label>
              <h2>Новий пароль</h2>
              <FieldPasswordComponent
                handleChange={sas.handleChange}
                setSubmitting={sas.setSubmitting}
                name="new_password"
              />
              <ErrorMessage name="new_password" component="p" />
            </label>

            <label>
              <h2>Підтвердження паролю</h2>
              <FieldPasswordComponent
                handleChange={sas.handleChange}
                setSubmitting={sas.setSubmitting}
                name="confirm_new_password"
              />
              <ErrorMessage name="confirm_new_password" component="p" />
            </label>

            <Button
              type="submit"
              disabled={sas.isSubmitting}
              sx={socialSingInButton}
            >
              Зберегти зміни
            </Button>
            <Button type="button" sx={cancelButton} onClick={onOpen}>
              Скасувати
            </Button>
          </Form>
        )}
      </Formik>
    </ContainerForm>
  );
}
