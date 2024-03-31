import React, { useState } from 'react';
import {
  Container,
  ErrorMessage,
  Field,
  Form,
  Send,
} from './FormRegister.styled';
import { Formik } from 'formik';
import Eye from 'SvgComponents/EyeSVG/Eye';

export default function FormRegister({ onClose }) {
  const [view, setView] = useState(false);
  function onToggleView() {
    setView(prev => !prev);
  }
  return (
    <Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password.length < 8) {
            errors.password = 'Need 8 characters or more';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          //dispatch -> setSubmitting {type: 'SET_ISSUBMITTING', payload: isSubmitting}
          //   getAuth(values);
          // dispatch(signUp(values));
          setTimeout(() => onClose(false), 500);
          actions.resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              Iм`я
              <Field type="text" name="first-name" />
              <ErrorMessage name="first-name" component="p" />
            </label>
            <label>
              Прiзвище
              <Field type="text" name="last-name" />
              <ErrorMessage name="last-name" component="p" />
            </label>
            <label>
              Номер телефону
              <Field type="tel" name="tel" placeholder="+380 (__) ___-__-__" />
              <ErrorMessage name="tel" component="p" />
            </label>
            <label>
              Електронна пошта
              <Field
                type="email"
                name="email"
                placeholder="tanya@example.com"
              />
              <ErrorMessage name="email" component="p" />
            </label>
            <label>
              Пароль
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="p" />
              <Eye view={view} onToggleView={onToggleView} />
            </label>
            <Send type="submit" disabled={isSubmitting}>
              Зареєструватись
            </Send>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
