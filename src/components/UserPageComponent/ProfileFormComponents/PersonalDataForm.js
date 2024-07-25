import { InputColumn, RedactContainer, RedactButton, CancelRedactingButton } from "./ProfilePage.styled";
import InputField from "./InputField";
import DateFormField from "./DateFormField";
import GenderSelect from "./GenderSelect";
import ProfilePictureSelect from "./ProfilePictureSelect";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FormContainer } from "./ProfilePage.styled";
import { selectMyUser } from "../../../redux/auth/selector";

export default function PersonalDataForm({ redacting, onSaveChanges, onCancelChanges, onStartRedacting }) {

  const defaultUserData = useSelector(selectMyUser);

  const [newUserData, setNewUserData] = useState({
    lastName: '',
    firstName: '',
    surname: '',
    birthDate: '',
    gender: '',
    profilePictureSrc: ''
  });

  const [userDataChanges, setUserDataChanges] = useState({
    lastName: '',
    firstName: '',
    surname: '',
    birthDate: '',
    gender: '',
    profilePictureSrc: ''
  });

  const saveChanges = () => {
    setNewUserData({
      lastName: userDataChanges?.lastName || defaultUserData?.lastName,
      firstName: userDataChanges?.firstName || defaultUserData?.firstName,
      surname: userDataChanges?.surname || newUserData?.surname || '',
      birthDate: userDataChanges?.birthDate || newUserData?.birthDate || '',
      gender: userDataChanges?.gender || newUserData?.gender || '',
      profilePictureSrc: userDataChanges?.profilePictureSrc || newUserData?.profilePictureSrc || ''
    });
  }

  const cancelChanges = () => {
    setUserDataChanges({
      lastName: '',
      firstName: '',
      surname: '',
      birthDate: '',
      gender: '',
      profilePictureSrc: ''
    });
  }

  return (
    <>
      <FormContainer justifycontent={'space-between'}>
        <InputColumn>
          <InputField 
            label={'Прізвище'} 
            placeholder={'Введіть прізвище'}
            onChange={event => setUserDataChanges({ ...userDataChanges, lastName: event.target.value })} 
            required={true}
            value={newUserData?.lastName || defaultUserData?.lastName}
            disabled={!redacting}
          />
          <InputField
            label={'Ім\'я'} 
            placeholder={'Введіть ім\'я'}
            onChange={event => setUserDataChanges({ ...userDataChanges, firstName: event.target.value })}
            required={true}
            value={newUserData?.firstName || defaultUserData?.firstName} 
            disabled={!redacting}
          />
          <InputField
            label={'По батькові'} 
            placeholder={'Введіть по батькові'} 
            onChange={event => setUserDataChanges({ ...userDataChanges, surname: event.target.value })}
            required={true}
            value={newUserData?.surname || ''} 
            disabled={!redacting}
          />
        </InputColumn>
        <InputColumn>
          <DateFormField 
            label={'Дата народження'}
            disabled={!redacting}
            value={newUserData?.birthDate || ''}
            onChange={value => setUserDataChanges({ ...userDataChanges, birthDate: value })}
          />
          <GenderSelect 
            disabled={!redacting}
            onChange={event => setUserDataChanges({ ...userDataChanges, gender: event.target.value })} 
          />
        </InputColumn>
        <ProfilePictureSelect 
          disabled={!redacting}
          onChange={event => setUserDataChanges({ ...userDataChanges, profilePictureSrc: event.target.value })}
        />
      </FormContainer>
      <RedactContainer>
        {redacting ? (
          <>
            <RedactButton onClick={() => {
              saveChanges();
              onSaveChanges();
            }}>
              Зберегти
            </RedactButton>
            <CancelRedactingButton onClick={() => {
              cancelChanges();
              onCancelChanges();
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