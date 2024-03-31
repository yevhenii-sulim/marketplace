import { Formik } from 'formik';
import {
  Container,
  ErrorMessage,
  Field,
  Form,
  LinkForget,
} from './FormEnter.styled';
// import { useNavigate } from 'react-router-dom';

export default function FormEnter({ getAuth, onClose }) {
  //   const navigate = useNavigate();
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
              Електронна пошта
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="p" />
            </label>
            <label>
              Пароль
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="p" />
              <LinkForget to="#">Забули пароль?</LinkForget>
            </label>
            <button type="submit" disabled={isSubmitting}>
              Увійти
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
