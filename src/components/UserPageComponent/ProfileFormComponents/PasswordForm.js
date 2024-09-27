import {
  FormContainer,
  InputColumn,
  RedactContainer,
  RedactButton,
  CancelRedactingButton,
} from './ProfilePage.styled';
// import PasswordField from './PasswordField';
import NewPasswordInput from './NewPasswordInput';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../../../redux/auth/selector';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { theme } from 'utils/theme';

export default function PasswordForm({
  redacting,
  onSaveChanges,
  onCancelChanges,
  onStartRedacting,
}) {
  const { width } = useWindowDimensions();

  const token = useSelector(selectToken);

  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [newPasswordStatus, setNewPasswordStatus] = useState({
    correctLength: false,
    correctChars: false,
    hasSpecialSymbol: false,
    hasCapitalLetter: false,
    hasNumber: false,
  });
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState(false);

  const isNewPasswordValid = () => {
    return (
      newPasswordStatus.correctLength &&
      newPasswordStatus.correctChars &&
      newPasswordStatus.hasSpecialSymbol &&
      newPasswordStatus.hasCapitalLetter &&
      newPasswordStatus.hasNumber
    );
  };

  const saveNewPassword = async () => {
    if (newPassword !== confirmNewPassword) {
      setPasswordConfirmationError(true);
      return;
    }

    if (!isNewPasswordValid()) {
      return;
    }

    setPasswordConfirmationError(false);

    const changes = {
      password: newPassword,
    };

    const { data } = await axios.post(
      'https://internet-shop-api-production.up.railway.app/user',
      changes,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    onSaveChanges();
    return data;
  };

  const cancelChanges = () => {
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <>
      <FormContainer
        $justifycontent={width > theme.breakPoints.md ? 'space-between' : null}
      >
        <InputColumn $setfullwidth={true} $width={'100%'}>
          {redacting ? (
            <NewPasswordInput
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              confirmNewPassword={confirmNewPassword}
              setConfirmNewPassword={setConfirmNewPassword}
              newPasswordStatus={newPasswordStatus}
              setNewPasswordStatus={setNewPasswordStatus}
              passwordConfirmationError={passwordConfirmationError}
            />
          ) : null}
        </InputColumn>
      </FormContainer>
      <RedactContainer>
        {redacting ? (
          <>
            <RedactButton
              onClick={() => {
                saveNewPassword();
                setNewPassword('');
                setConfirmNewPassword('');
              }}
            >
              Зберегти
            </RedactButton>
            <CancelRedactingButton
              onClick={() => {
                cancelChanges();
                onCancelChanges();
              }}
            >
              Скасувати
            </CancelRedactingButton>
          </>
        ) : (
          <RedactButton onClick={() => onStartRedacting()}>
            Редагувати
          </RedactButton>
        )}
      </RedactContainer>
    </>
  );
}
