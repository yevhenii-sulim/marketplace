import { useCallback, useEffect, useState } from 'react';
import { FormField, NewPasswordField } from './ProfilePage.styled';
import CorrectSvg from 'SvgComponents/CorrectSVG/CorrectSvg';
import FalseSvg from 'SvgComponents/FalseSVG/FalseSvg';

export default function NewPasswordInput() {
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordStatus, setNewPasswordStatus] = useState({
    correctLength: false,
    correctChars: false,
    hasSpecialSymbol: false,
    hasCapitalLetter: false,
    hasNumber: false
  });

  const validateNewPassword = useCallback(() => {
    setNewPasswordStatus({
      correctLength: newPassword.length >= 6 && newPassword.length <= 20,
      correctChars: /[A-Za-z0-9]/.test(newPassword),
      hasSpecialSymbol: /[!_]/.test(newPassword),
      hasCapitalLetter: /[A-Z]/.test(newPassword),
      hasNumber: /[0-9]/.test(newPassword)
    });
  }, [newPassword]);

  useEffect(() => {
    validateNewPassword();
  }, [newPassword]);

  return (
    <NewPasswordField>
      <FormField
        required={true}
      >
        <label>Новий пароль</label>
        <input type="text" value={newPassword} onChange={event => setNewPassword(event.target.value)}/>
        <div>
          {newPasswordStatus.correctLength ? <CorrectSvg /> : <FalseSvg />} Від 6
          до 20 символів
        </div>
        <div>
          {newPasswordStatus.correctChars ? <CorrectSvg /> : <FalseSvg />} Тільки
          латинські літери та цифри
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
      <FormField required={true}>
        <label>Підтвердити новий пароль</label>
        <input type='text' />
      </FormField>
    </NewPasswordField>
  );
}
