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
            errors.firstName = 'Має бути від 2 до 20 елементів';
          } else if (
            values.firstName.slice(0, 1) ===
            values.firstName.slice(0, 1).toLowerCase()
          ) {
            errors.firstName = 'Має починатися з великої літери';
          } else if (/[А-Яа-я]/i.test(values.firstName)) {
            errors.firstName = "Ім'я латиницею";
          }

          if (!values.lastName) {
            errors.lastName = "Обов'язкове поле";
          } else if (
            values.lastName.length < 2 ||
            values.lastName.length > 20
          ) {
            errors.lastName = 'Має бути від 2 до 20 елементів';
          } else if (
            values.lastName.slice(0, 1) ===
            values.lastName.slice(0, 1).toLowerCase()
          ) {
            errors.lastName = 'Має починатися з великої літери';
          } else if (/[А-Яа-я]/i.test(values.lastName)) {
            errors.lastName = 'Прізвище латиницею';
          }

          if (!values.numberPhone) {
            errors.numberPhone = "Обов'язкове поле";
          } else if (
            !/^((\+)?(3)?(8)?[- ]?)?(\(?(0)\d{2}\)?[- ]?)?\d{2}[- ]?\d{1}[- ]?\d{1}[- ]?\d{1}[- ]?\d{2}$/i.test(
              values.numberPhone
            )
          ) {
            errors.numberPhone = 'Не валідний номер';
          }

          if (!values.email) {
            errors.email = "Обов'язкове поле";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Не правильна email адреса';
          }
          if (!values.password) {
            errors.password = "Обов'язкове поле";
          } else if (
            !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={};:'",.<>?/\\[\]|]).{6,20}$/.test(
              values.password
            )
          ) {
            errors.password = 'Не достатньо надійний';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          dispatch(signUp(values));
          actions.resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              <p>
                <span>
                  Iм`я
                  <MarkSvg />
                </span>
              </p>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="p" />
            </label>
            <label>
              <p>
                <span>
                  Прiзвище
                  <MarkSvg />
                </span>
              </p>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component="p" />
            </label>
            <label>
              <p>
                <span>
                  Номер телефону
                  <MarkSvg />
                </span>
              </p>
              <Field
                type="tel"
                name="numberPhone"
                placeholder="+380 (__) ___-__-__"
              />
              <ErrorMessage name="numberPhone" component="p" />
            </label>
            <label>
              <p>
                <span>
                  Електронна пошта
                  <MarkSvg />
                </span>
              </p>
              <Field
                type="email"
                name="email"
                placeholder="tanya@example.com"
              />
              <ErrorMessage name="email" component="p" />
            </label>
            <label>
              <p>
                <span>
                  Пароль
                  <MarkSvg />
                </span>
              </p>
              {visible ? (
                <Field type="text" name="password" />
              ) : (
                <Field type="password" name="password" />
              )}
              <ErrorMessage name="password" component="p" />
              <BoxEye onClick={onToggleView} type="button">
                {visible && <View></View>}
                <RemoveRedEyeOutlinedIcon />
              </BoxEye>
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
