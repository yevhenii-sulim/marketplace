import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import {
  ContainerForm,
  Field,
  Form,
  socialSingInButton,
} from './FormForgetPass.styled';
import { restorePassword } from '../../redux/auth/thunk';

export default function FormForgetPass({ onClose }) {
  const dispatch = useDispatch();

  return (
    <ContainerForm>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          dispatch(restorePassword(values));
          setTimeout(() => onClose(false), 500);
          actions.resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              Телефон або ел. пошта
              <Field type="email" name="email" />
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

FormForgetPass.propTypes = {
  onClose: PropTypes.func.isRequired,
};
