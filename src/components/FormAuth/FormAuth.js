import { Formik } from 'formik';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PropTypes from 'prop-types';
import {
  BoxEye,
  ContainerForm,
  Enter,
  ErrorMessage,
  Field,
  Form,
  LinkForget,
  View,
} from './FormAuth.styled';
import { useState } from 'react';
import MarkSvg from 'SvgComponents/MarkSVG/MarkSvg';
// import { useNavigate } from 'react-router-dom';

export default function FormAuth({ onClose }) {
  //   const navigate = useNavigate();
  const [view, setView] = useState(false);
  function onToggleView() {
    setView(prev => !prev);
  }

  return (
    <ContainerForm>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.password) {
            errors.password = 'Required';
          } else if (
            values.password.length < 6 &&
            values.password.length > 20
          ) {
            errors.password = 'Need reng 6 - 20 elements';
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
              <MarkSvg />
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="p" />
            </label>
            <label>
              Пароль
              <MarkSvg />
              {view ? (
                <Field type="text" name="password" />
              ) : (
                <Field type="password" name="password" />
              )}
              <ErrorMessage name="password" component="p" />
              <BoxEye view={view} onClick={onToggleView} type="button">
                {view && <View></View>}
                <RemoveRedEyeOutlinedIcon />
              </BoxEye>
              <LinkForget to="#">Забули пароль?</LinkForget>
            </label>
            <Enter type="submit" disabled={isSubmitting}>
              Увійти
            </Enter>
          </Form>
        )}
      </Formik>
    </ContainerForm>
  );
}
FormAuth.propTypes = {
  onClose: PropTypes.func.isRequired,
};
