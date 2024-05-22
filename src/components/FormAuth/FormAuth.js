import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Button } from '@mui/material';
import { logIn } from '../../redux/auth/thunk';
import {
  BoxEye,
  ContainerForm,
  ErrorMessage,
  Field,
  FieldPassword,
  Form,
  LinkForget,
  UnView,
  socialSingInButton,
} from './FormAuth.styled';

export default function FormAuth({ onClose, openForgetWind }) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  function onToggleView() {
    setVisible(prev => !prev);
  }

  return (
    <ContainerForm>
      <Formik
        initialValues={{ email: '', password: '' }}
        validateOnChange={false}
        validateOnBlur={false}
        validate={values => {
          const errors = {};

          if (!values.email.trim()) {
            errors.email = "Обов'язкове поле";
          }
          if (!values.password.trim()) {
            errors.password = "Обов'язкове поле";
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          dispatch(logIn(values));
          setTimeout(() => onClose(false), 500);
          actions.resetForm();
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <label>
              Електронна пошта
              <Field type="email" name="email" value={values.email.trim()} />
              <ErrorMessage name="email" component="p" />
            </label>
            <label>
              Пароль
              <FieldPassword>
                {visible ? (
                  <Field type="text" name="password" />
                ) : (
                  <Field type="password" name="password" />
                )}
                <BoxEye onClick={onToggleView} type="button">
                  {visible && <UnView></UnView>}
                  <RemoveRedEyeOutlinedIcon />
                </BoxEye>
              </FieldPassword>
              <ErrorMessage name="password" component="p" />
              <LinkForget type="button" onClick={openForgetWind}>
                Забули пароль?
              </LinkForget>
            </label>
            <Button
              type="submit"
              disabled={isSubmitting}
              sx={socialSingInButton}
            >
              Увійти
            </Button>
          </Form>
        )}
      </Formik>
    </ContainerForm>
  );
}
FormAuth.propTypes = {
  onClose: PropTypes.func.isRequired,
  openForgetWind: PropTypes.func.isRequired,
};
