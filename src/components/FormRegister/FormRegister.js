import React, { useState } from 'react';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import {
  BoxEye,
  ContainerForm,
  ErrorMessage,
  Field,
  Form,
  Link,
  Send,
  View,
} from './FormRegister.styled';

import { Formik } from 'formik';
import MarkSvg from 'SvgComponents/MarkSVG/MarkSvg';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/thunk';

export default function FormRegister({ onClose }) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  function onToggleView() {
    console.log(visible);
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
            errors.firstName = 'Required';
          } else if (
            values.firstName.length < 2 ||
            values.firstName.length > 20
          ) {
            errors.firstName = 'Need reng 2 - 20 elements';
          } else if (
            values.firstName.slice(0, 1) ===
            values.firstName.slice(0, 1).toLowerCase()
          ) {
            errors.firstName = 'must start with a capital letter';
          } else if (/[А-Яа-я]/i.test(values.firstName)) {
            errors.firstName = 'Write the first name in Latin';
          }

          if (!values.lastName) {
            errors.lastName = 'Required';
          } else if (
            values.lastName.length < 2 ||
            values.lastName.length > 20
          ) {
            errors.lastName = 'Need reng 2 - 20 elements';
          } else if (
            values.lastName.slice(0, 1) ===
            values.lastName.slice(0, 1).toLowerCase()
          ) {
            errors.lastName = 'must start with a capital letter';
          } else if (/[А-Яа-я]/i.test(values.firstName)) {
            errors.firstName = 'Write the last name in Latin';
          }

          if (!values.numberPhone) {
            errors.numberPhone = 'Required';
          } else if (
            !/^((\+)?(3)?(8)?[- ]?)?(\(?(0)\d{2}\)?[- ]?)?\d{2}[- ]?\d{1}[- ]?\d{1}[- ]?\d{1}[- ]?\d{2}$/i.test(
              values.numberPhone
            )
          ) {
            errors.numberPhone = 'Invalid number';
          }

          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          } else if (
            !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={};:'",.<>?/\\[\]|]).{6,20}$/.test(
              values.password
            )
          ) {
            errors.password = 'is not strong enough';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          dispatch(signUp(values));
          setTimeout(() => onClose(false), 500);
          actions.resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              Iм`я
              <MarkSvg />
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="p" />
            </label>
            <label>
              Прiзвище
              <MarkSvg />
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component="p" />
            </label>
            <label>
              Номер телефону
              <MarkSvg />
              <Field
                type="tel"
                name="numberPhone"
                placeholder="+380 (__) ___-__-__"
              />
              <ErrorMessage name="numberPhone" component="p" />
            </label>
            <label>
              Електронна пошта
              <MarkSvg />
              <Field
                type="email"
                name="email"
                placeholder="tanya@example.com"
              />
              <ErrorMessage name="email" component="p" />
            </label>
            <label>
              <MarkSvg />
              Пароль
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
            <p>
              Реєструючись, ви погоджуєтеся з{' '}
              <Link to="#">угодою користувача</Link> і{' '}
              <Link to="#">політикою конфіденційності</Link>
            </p>
            <Send type="submit">Зареєструватись</Send>
          </Form>
        )}
      </Formik>
    </ContainerForm>
  );
}
