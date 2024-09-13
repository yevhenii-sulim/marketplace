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
import { useCallback, useEffect, useState } from 'react';
import { theme } from 'utils/theme';

export default function ChangePassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState('');
  const [newPasswordStatus, setNewPasswordStatus] = useState({
    correctLength: false,
    correctChars: false,
    hasSpecialSymbol: false,
    hasCapitalLetter: false,
    hasNumber: false,
  });
  const validateNewPassword = useCallback(() => {
    setNewPasswordStatus({
      correctLength: newPassword.length >= 6 && newPassword.length <= 20,
      correctChars: /[A-Za-z]/.test(newPassword),
      hasSpecialSymbol: /[@$!%*?&()^{}#+._=;:'"₴,<>/№~\-|]/.test(newPassword),
      hasCapitalLetter: /[A-Z]/.test(newPassword),
      hasNumber: /[0-9]/.test(newPassword),
    });
  }, [newPassword, setNewPasswordStatus]);

  useEffect(() => {
    validateNewPassword();
  }, [newPassword, validateNewPassword]);

  function onOpen() {
    navigate('/user_page/profile');
    dispatch(toggleModalAuth(true));
  }

  function handleChangePassword(event, handleChange) {
    setNewPassword(event.target.value);
    handleChange(event);
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
        {({ handleChange, isSubmitting, setSubmitting }) => (
          <Form>
            <label>
              <h2>Новий пароль</h2>
              <FieldPasswordComponent
                setSubmitting={setSubmitting}
                value={newPassword}
                name="new_password"
                handleChange={evt => handleChangePassword(evt, handleChange)}
              />
              <h3 className="rule">Пароль повинен мати:</h3>
              <ul>
                <li
                  className="rule"
                  style={
                    newPasswordStatus.correctLength
                      ? { color: `${theme.color.bgButton}` }
                      : {}
                  }
                >
                  6-20 символів
                </li>
                <li
                  className="rule"
                  style={
                    newPasswordStatus.correctChars
                      ? { color: `${theme.color.bgButton}` }
                      : {}
                  }
                >
                  тільки латинські літери
                </li>
                <li
                  className="rule"
                  style={
                    newPasswordStatus.hasSpecialSymbol
                      ? { color: `${theme.color.bgButton}` }
                      : {}
                  }
                >
                  1 спеціальний символ
                </li>
                <li
                  className="rule"
                  style={
                    newPasswordStatus.hasCapitalLetter
                      ? { color: `${theme.color.bgButton}` }
                      : {}
                  }
                >
                  1 велику літеру
                </li>
                <li
                  className="rule"
                  style={
                    newPasswordStatus.hasNumber
                      ? { color: `${theme.color.bgButton}` }
                      : {}
                  }
                >
                  1 цифру
                </li>
              </ul>
            </label>

            <label>
              <h2>Підтвердження паролю</h2>
              <FieldPasswordComponent
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                name="confirm_new_password"
              />
              <ErrorMessage name="confirm_new_password" component="p" />
            </label>

            <Button
              type="submit"
              disabled={isSubmitting}
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
