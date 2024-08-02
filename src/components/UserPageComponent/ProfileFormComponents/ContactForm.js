import { FormContainer, InputColumn, RedactContainer, RedactButton, CancelRedactingButton } from "./ProfilePage.styled";
import PhoneNumberFormField from "./PhoneNumberFormField";
import { useSelector } from "react-redux";
import { selectMyUser, selectToken } from "../../../redux/auth/selector";
import { useState } from "react";
import InputField from "./InputField";
import axios from "axios";

export default function ContactForm({ redacting, onSaveChanges, onCancelChanges, onStartRedacting }) {

  const user = useSelector(selectMyUser);
  const token = useSelector(selectToken);

  const [contactDataChanges, setContactDataChanges] = useState({
    email: '',
    phoneNumber: ''
  });

  const saveChanges = async () => {
    const changes = {
      email: contactDataChanges?.email || user?.email,
      numberPhone: contactDataChanges?.phoneNumber || user?.numberPhone
    };

    const { data } = await axios.post('https://internet-shop-api-production.up.railway.app/user', changes, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    });

    console.log(data);
  }

  const cancelChanges = () => {
    setContactDataChanges({
      email: '',
      phoneNumber: ''
    });
  }

  return (
    <>
      <FormContainer>
        <InputColumn>
          <InputField 
            label={'Електрона адреса'}
            placeholder={'Введіть електрону адресу'}
            required={true}
            value={contactDataChanges?.email || user?.email}
            onChange={event => setContactDataChanges({ ...contactDataChanges, email: event.target.value })}
            disabled={!redacting}
          />
        </InputColumn>
        <InputColumn>
          <PhoneNumberFormField 
            label={'Телефон'}
            placeholder={'+38 --- --- -- --'}
            value={contactDataChanges?.phoneNumber || user?.numberPhone}
            onChange={event => setContactDataChanges({ ...contactDataChanges, phoneNumber: event.target.value })}
            disabled={!redacting}
          />
        </InputColumn>
      </FormContainer>
      <RedactContainer>
        {redacting ? (
          <>
            <RedactButton onClick={() => {
              saveChanges();
              onSaveChanges()
            }}>
              Зберегти
            </RedactButton>
            <CancelRedactingButton onClick={() => {
              cancelChanges();
              onCancelChanges()
            }}>
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
  )
}