import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import MarkSvg from 'SvgComponents/MarkSVG/MarkSvg';
import { signUp } from '../../redux/auth/thunk';
import {
  BoxEye,
  ContainerForm,
  ErrorMessage,
  Field,
  FieldPassword,
  Form,
  Link,
  View,
  socialSingInButton,
} from './FormRegister.styled';

export default function FormRegister() {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  function onToggleView() {
    setVisible(prev => !prev);
  }

  return (
    <ContainerForm>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          numberPhone: '',
          email: '',
          password: '',
        }}
        validate={values => {
          const errors = {};

          if (!values.firstName) {
            errors.firstName = "Обов'язкове поле";
          } else if (
            values.firstName.length < 2 ||
            values.firstName.length > 20
          ) {
            errors.firstName = 'Має бути від 2 до 20 символів';
          } else if (
            values.firstName.slice(0, 1) ===
            values.firstName.slice(0, 1).toLowerCase()
          ) {
            errors.firstName = 'Має починатися з великої літери';
          }

          if (!values.lastName) {
            errors.lastName = "Обов'язкове поле";
          } else if (
            values.lastName.length < 2 ||
            values.lastName.length > 20
          ) {
            errors.lastName = 'Має бути від 2 до 20 символів';
          } else if (
            values.lastName.slice(0, 1) ===
            values.lastName.slice(0, 1).toLowerCase()
          ) {
            errors.lastName = 'Має починатися з великої літери';
          }

          if (!values.numberPhone) {
            errors.numberPhone = "Обов'язкове поле";
          } else if (
            !/^((\+38)[- ]?)(\(?(0)\d{2}\)?[- ]?)?\d{2}[- ]?\d{1}[- ]?\d{1}[- ]?\d{1}[- ]?\d{2}$/i.test(
              values.numberPhone
            )
          ) {
            errors.numberPhone = 'Некоректний номер';
          }

          if (!values.email) {
            errors.email = "Обов'язкове поле";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Неправильна email адреса';
          }
          if (!values.password) {
            errors.password = "Обов'язкове поле";
          } else if (
            !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={};:'",.<>?/\\[\]|]).{6,20}$/.test(
              values.password
            )
          ) {
            errors.password = 'Некоректний пароль';
          }
          return errors;
        }}
        onSubmit={values => {
          dispatch(signUp(values));
        }}
      >
        {({ values, isSubmitting, handleChange, setSubmitting }) => (
          <Form>
            <label>
              <p>
                <span className="label-place">
                  Iм`я
                  <MarkSvg />
                </span>
              </p>
              <Field
                type="text"
                name="firstName"
                value={values.firstName.trim()}
                onChange={e => {
                  handleChange(e);
                  setSubmitting(false);
                }}
              />
              <ErrorMessage name="firstName" component="p" />
            </label>
            <label>
              <p>
                <span className="label-place">
                  Прiзвище
                  <MarkSvg />
                </span>
              </p>
              <Field
                type="text"
                name="lastName"
                value={values.lastName.trim()}
                onChange={e => {
                  handleChange(e);
                  setSubmitting(false);
                }}
              />
              <ErrorMessage name="lastName" component="p" />
            </label>
            <label>
              <p>
                <span className="label-place">
                  Номер телефону
                  <MarkSvg />
                </span>
              </p>
              <Field
                type="tel"
                name="numberPhone"
                placeholder="+380 (__) ___-__-__"
                value={values.numberPhone.trim()}
                onChange={e => {
                  handleChange(e);
                  setSubmitting(false);
                }}
              />
              <ErrorMessage name="numberPhone" component="p" />
            </label>
            <label>
              <p>
                <span className="label-place">
                  Електронна пошта
                  <MarkSvg />
                </span>
              </p>
              <Field
                type="email"
                name="email"
                placeholder="tanya@example.com"
                value={values.email.trim()}
                onChange={e => {
                  handleChange(e);
                  setSubmitting(false);
                }}
              />
              <ErrorMessage name="email" component="p" />
            </label>
            <label>
              <p>
                <span className="label-place">
                  Пароль
                  <MarkSvg />
                </span>
              </p>
              <FieldPassword>
                {visible ? (
                  <Field
                    type="text"
                    name="password"
                    onChange={e => {
                      handleChange(e);
                      setSubmitting(false);
                    }}
                  />
                ) : (
                  <Field
                    type="password"
                    name="password"
                    onChange={e => {
                      handleChange(e);
                      setSubmitting(false);
                    }}
                  />
                )}
                <BoxEye onClick={onToggleView} type="button">
                  {visible && <View></View>}
                  <RemoveRedEyeOutlinedIcon />
                </BoxEye>
              </FieldPassword>
              <ErrorMessage name="password" component="p" />
            </label>
            <p className="rules">
              Пароль повинен мати довжину 6-20 символів, одну велику літеру,
              одну цифру, один спеціальний символ
            </p>
            <p>
              Реєструючись, ви погоджуєтеся з{' '}
              <Link to="#">угодою користувача</Link> і{' '}
              <Link to="#">політикою конфіденційності</Link>
            </p>
            <Button
              type="submit"
              sx={socialSingInButton}
              disabled={isSubmitting}
            >
              Зареєструватись
            </Button>
          </Form>
        )}
      </Formik>
    </ContainerForm>
  );
}
