import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ContainerForm,
  ErrorMessage,
  Field,
  Form,
  socialSingInButton,
} from './ChangePassword.styled';
import { Formik } from 'formik';
import { restorePassword } from '../../redux/auth/thunk';

export default function ChangePassword() {
  const dispatch = useDispatch();
  return (
    <ContainerForm>
      <Formik
        initialValues={{ new_password: '', confirm_new_password: '' }}
        validateOnChange={false}
        validateOnBlur={false}
        validate={values => {
          const errors = {};

          if (!values.new_password) {
            errors.new_password = "Обов'язкове поле";
          } else if (
            !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={};:'",.<>?/\\[\]|]).{6,20}$/.test(
              values.new_password
            )
          ) {
            errors.new_password = 'Некоректний пароль';
          }

          if (values.confirm_new_password !== values.new_password) {
            errors.confirm_new_password = 'Пароль не співпадає';
          }

          return errors;
        }}
        onSubmit={values => {
          dispatch(restorePassword(values.new_password));
        }}
      >
        {({ isSubmitting, handleChange, setSubmitting, errors }) => (
          <Form>
            {console.log(errors)}
            <label>
              Введіть пароль
              <Field
                type="text"
                name="new_password"
                onChange={e => {
                  handleChange(e);
                  setSubmitting(false);
                }}
              />
              {!errors.new_password && (
                <p>
                  Пароль повинен мати довжину 6-20 символів, одну велику літеру,
                  одну цифру, один спеціальний символ
                </p>
              )}
              <ErrorMessage name="new_password" component="p" />
            </label>

            <label>
              Підтвердіть пароль
              <Field
                type="text"
                name="confirm_new_password"
                onChange={e => {
                  handleChange(e);
                  setSubmitting(false);
                }}
              />
              <ErrorMessage name="confirm_new_password" component="p" />
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
    // <form
    //   onSubmit={e => {
    //     e.preventDefault();
    //     console.log(e.target.elements.new_password.value);
    //   }}
    // >
    //   <input type="text" name="new_password" />
    //   <Button type="submit">ChsngePassword</Button>
    // </form>
  );
}
