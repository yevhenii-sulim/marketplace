import { FormContainer, InputColumn, RedactContainer, RedactButton, CancelRedactingButton } from "./ProfilePage.styled";
import PhoneNumberFormField from "./PhoneNumberFormField";
import { useSelector } from "react-redux";
import { selectId, selectMyUser } from "../../../redux/auth/selector";
import { useEffect, useState } from "react";
import InputField from "./InputField";

export default function ContactForm({ redacting, onSaveChanges, onCancelChanges, onStartRedacting }) {

  const user = useSelector(selectMyUser);

  const [contactDataChanges, setContactDataChanges] = useState({
    email: '',
    phoneNumber: ''
  });

  const saveChanges = () => {
    /*
    setContactData({
      email: contactDataChanges?.email || user?.email,
      phoneNumber: contactDataChanges?.phoneNumber || user?.phoneNumber
    });
    */
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
            value={user?.email}
            onChange={event => setContactDataChanges({ ...contactDataChanges, email: event.target.value })}
            disabled={!redacting}
          />
        </InputColumn>
        <InputColumn>
          <PhoneNumberFormField 
            label={'Телефон'}
            placeholder={'+38 --- --- -- --'}
            value={user?.numberPhone}
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