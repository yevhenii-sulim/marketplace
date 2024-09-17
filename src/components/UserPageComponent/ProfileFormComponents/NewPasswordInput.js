import { useCallback, useEffect } from 'react';
import {
  FormField,
  NewPasswordField,
  PasswordConfirmationError,
} from './ProfilePage.styled';
import CorrectSvg from 'SvgComponents/CorrectSVG/CorrectSvg';
import FalseSvg from 'SvgComponents/FalseSVG/FalseSvg';
import { theme } from 'utils/theme';

export default function NewPasswordInput({
  newPassword,
  setNewPassword,
  confirmNewPassword,
  setConfirmNewPassword,
  newPasswordStatus,
  setNewPasswordStatus,
  passwordConfirmationError,
}) {
  const validateNewPassword = useCallback(() => {
    setNewPasswordStatus({
      correctLength: newPassword.length >= 6 && newPassword.length <= 20,
      correctChars: /[A-Za-z0-9]/.test(newPassword),
      hasSpecialSymbol: /[@$!%*?&()^{}#+._=;:'"₴,<>/№~\-|]/.test(newPassword),
      hasCapitalLetter: /[A-Z]/.test(newPassword),
      hasNumber: /[0-9]/.test(newPassword),
    });
  }, [newPassword, setNewPasswordStatus]);

  useEffect(() => {
    validateNewPassword();
  }, [newPassword, validateNewPassword]);

  return (
    <NewPasswordField>
      <FormField required={true} $width={'100%'} $inputwidth={'70%'}>
        <label>Новий пароль</label>
        <input
          type="text"
          value={newPassword}
          onChange={event => setNewPassword(event.target.value)}
        />
        <div>
          {newPasswordStatus.correctLength ? <CorrectSvg /> : <FalseSvg />} Від
          6 до 20 символів
        </div>
        <div>
          {newPasswordStatus.correctChars ? <CorrectSvg /> : <FalseSvg />}{' '}
          Тільки латинські літери та цифри
        </div>
        <div>
          {newPasswordStatus.hasSpecialSymbol ? <CorrectSvg /> : <FalseSvg />}{' '}
          Щонайменше 1 спеціальний символ
        </div>
        <div>
          {newPasswordStatus.hasCapitalLetter ? <CorrectSvg /> : <FalseSvg />}{' '}
          Щонайменше 1 велика літера
        </div>
        <div>
          {newPasswordStatus.hasNumber ? <CorrectSvg /> : <FalseSvg />}{' '}
          Щонайменше 1 цифра
        </div>
      </FormField>
      <FormField required={true} $width={'100%'} $inputwidth={'70%'}>
        <label>Підтвердити новий пароль</label>
        <input
          type="text"
          value={confirmNewPassword}
          onChange={event => setConfirmNewPassword(event.target.value)}
          style={
            passwordConfirmationError
              ? {
                  border: 'none',
                  boxShadow: `inset 0 0 0 3px ${theme.color.colorTextErrorForm}`,
                }
              : {}
          }
        />
        {passwordConfirmationError ? (
          <PasswordConfirmationError>
            Паролі не співпадають
          </PasswordConfirmationError>
        ) : null}
      </FormField>
    </NewPasswordField>
  );
}
