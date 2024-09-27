import {
  FormContactContainer,
  InputColumn,
  RedactContainer,
  RedactButton,
  CancelRedactingButton,
} from './ProfilePage.styled';
import PhoneNumberFormField from './PhoneNumberFormField';
import { useSelector } from 'react-redux';
import { selectMyUser, selectToken } from '../../../redux/auth/selector';
import { useEffect, useState } from 'react';
import InputField from './InputField';
import axios from 'axios';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { theme } from 'utils/theme';

export default function ContactForm({
  redacting,
  onSaveChanges,
  onCancelChanges,
  onStartRedacting,
}) {
  const { width } = useWindowDimensions();

  const user = useSelector(selectMyUser);
  const token = useSelector(selectToken);

  const [contactDataChanges, setContactDataChanges] = useState({
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    if (!user) return;
    setContactDataChanges({ email: user.email, phoneNumber: user.numberPhone });
  }, [user]);

  function isNumberPhone(value) {
    return !/^\s*((\+38)[- ]?)(\(?(0)\d{2}\)?[- ]?)?\d{2}[- ]?\d{1}[- ]?\d{1}[- ]?\d{1}[- ]?\d{2}\s*$/i.test(
      value.phoneNumber
    );
  }
  function isEmail(value) {
    return !/^\s*[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\s*$/i.test(value.email);
  }

  const saveChanges = async () => {
    const changes = {
      email: contactDataChanges?.email || user?.email,
      numberPhone: contactDataChanges?.phoneNumber || user?.numberPhone,
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
    return data;
  };

  const cancelChanges = () => {
    setContactDataChanges({
      email: '',
      phoneNumber: '',
    });
  };

  return (
    <>
      <FormContactContainer
        $justifycontent={
          width <= parseInt(theme.breakPoints.lg) &&
          width >= parseInt(theme.breakPoints.md)
            ? 'space-between'
            : null
        }
        $gap={width > parseInt(theme.breakPoints.md) && '24px'}
        $desktopwidth={'90%'}
      >
        <Form
          redacting={redacting}
          user={user}
          contactDataChanges={contactDataChanges}
          setContactDataChanges={setContactDataChanges}
        />
      </FormContactContainer>
      <RedactContainer>
        {redacting ? (
          <>
            <RedactButton
              disabled={
                isNumberPhone(contactDataChanges) || isEmail(contactDataChanges)
              }
              onClick={() => {
                saveChanges();
                onSaveChanges();
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

function Form({ redacting, user, contactDataChanges, setContactDataChanges }) {
  const { width } = useWindowDimensions();
  function isNumberPhone(value) {
    return !/^\s*((\+38)[- ]?)(\(?(0)\d{2}\)?[- ]?)?\d{2}[- ]?\d{1}[- ]?\d{1}[- ]?\d{1}[- ]?\d{2}\s*$/i.test(
      value.phoneNumber
    );
  }
  function isEmail(value) {
    return !/^\s*[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\s*$/i.test(value.email);
  }
  console.log(!isEmail(contactDataChanges), isNumberPhone(contactDataChanges));
  return width > 672 ? (
    <>
      <InputColumn $setfullwidth={width <= parseInt(theme.breakPoints.md)}>
        <InputField
          label={'Електрона адреса'}
          placeholder={'Введіть електрону адресу'}
          required={true}
          error={isEmail(contactDataChanges)}
          errorText="Не коректний email"
          value={contactDataChanges?.email || user?.email}
          onChange={event =>
            setContactDataChanges({
              ...contactDataChanges,
              email: event.target.value,
            })
          }
          style={
            isEmail(contactDataChanges)
              ? {
                  border: `3px solid ${theme.color.colorTextErrorForm}`,
                }
              : {}
          }
          disabled={!redacting}
        />
      </InputColumn>
      <InputColumn $setfullwidth={width <= parseInt(theme.breakPoints.md)}>
        <PhoneNumberFormField
          label={'Телефон'}
          placeholder={'+38 --- -- --'}
          value={contactDataChanges?.phoneNumber || user?.numberPhone}
          onChange={event =>
            setContactDataChanges({
              ...contactDataChanges,
              phoneNumber: event.target.value,
            })
          }
          style={
            isNumberPhone(contactDataChanges)
              ? {
                  border: `3px solid ${theme.color.colorTextErrorForm}`,
                }
              : {}
          }
          disabled={!redacting}
        />
      </InputColumn>
    </>
  ) : (
    <InputColumn $setfullwidth={true}>
      <InputField
        label={'Електрона адреса'}
        placeholder={'Введіть електрону адресу'}
        required={true}
        error={isEmail(contactDataChanges)}
        errorText="Не коректний email"
        value={contactDataChanges?.email || user?.email}
        onChange={event =>
          setContactDataChanges({
            ...contactDataChanges,
            email: event.target.value,
          })
        }
        style={
          isEmail(contactDataChanges)
            ? {
                border: `3px solid ${theme.color.colorTextErrorForm}`,
              }
            : {}
        }
        disabled={!redacting}
      />
      <PhoneNumberFormField
        label={'Телефон'}
        placeholder={'+38 --- -- --'}
        value={contactDataChanges?.phoneNumber || user?.numberPhone}
        onChange={event =>
          setContactDataChanges({
            ...contactDataChanges,
            phoneNumber: event.target.value,
          })
        }
        disabled={!redacting}
      />
    </InputColumn>
  );
}
