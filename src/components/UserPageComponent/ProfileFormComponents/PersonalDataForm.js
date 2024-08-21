import { InputColumn, RedactContainer, RedactButton, CancelRedactingButton } from "./ProfilePage.styled";
import InputField from "./InputField";
import DateFormField from "./DateFormField";
import GenderSelect from "./GenderSelect";
import ProfilePictureSelect from "./ProfilePictureSelect";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FormContainer } from "./ProfilePage.styled";
import { selectMyUser, selectToken } from "../../../redux/auth/selector";
import axios from "axios";

export default function PersonalDataForm({ redacting, onSaveChanges, onCancelChanges, onStartRedacting }) {

  const user = useSelector(selectMyUser);
  const token = useSelector(selectToken);

  const [userDataChanges, setUserDataChanges] = useState({
    lastName: '',
    firstName: '',
    surname: '',
    birthDate: '',
    gender: '',
    img: ''
  });

  const saveChanges = async () => {
    console.log(user);
    console.log(userDataChanges);

    const changes = {
      lastName: userDataChanges?.lastName || user?.lastName,
      firstName: userDataChanges?.firstName || user?.firstName,
      surName: userDataChanges?.surname || user?.surName,
      gender: userDataChanges?.gender || user?.gender,
      birthDate: userDataChanges?.birthDate || user?.birthDate
    };

    if (userDataChanges?.img) {
      changes.img = userDataChanges?.img;
    } 

    console.log(changes);

    const { data } = await axios.post('https://internet-shop-api-production.up.railway.app/user', changes, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    });

    console.log(data);
  }

  const cancelChanges = () => {
    setUserDataChanges({
      lastName: '',
      firstName: '',
      surname: '',
      birthDate: '',
      gender: '',
      img: ''
    });
  }

  return (
    <>
      <FormContainer $justifycontent={'space-between'}>
        <InputColumn>
          <InputField 
            label={'Прізвище'} 
            placeholder={'Введіть прізвище'}
            onChange={event => setUserDataChanges({ ...userDataChanges, lastName: event.target.value })} 
            required={true}
            value={userDataChanges?.lastName || user?.lastName}
            disabled={!redacting}
          />
          <InputField
            label={'Ім\'я'} 
            placeholder={'Введіть ім\'я'}
            onChange={event => setUserDataChanges({ ...userDataChanges, firstName: event.target.value })}
            required={true}
            value={userDataChanges?.firstName || user?.firstName} 
            disabled={!redacting}
          />
          <InputField
            label={'По батькові'} 
            placeholder={'Введіть по батькові'} 
            onChange={event => setUserDataChanges({ ...userDataChanges, surname: event.target.value })}
            required={true}
            value={userDataChanges?.surname || user?.surName || ''} 
            disabled={!redacting}
          />
        </InputColumn>
        <InputColumn>
          <DateFormField 
            label={'Дата народження'}
            disabled={!redacting}
            value={userDataChanges?.birthDate || user?.birthDate}
            onChange={value => setUserDataChanges({ ...userDataChanges, birthDate: value })}
          />
          <GenderSelect 
            disabled={!redacting}
            value={user?.gender}
            onChange={event => setUserDataChanges({ 
              ...userDataChanges, 
              gender: event.target.value === 'Чоловік' ? 'male' : 'female'
            })} 
          />
        </InputColumn>
        <ProfilePictureSelect 
          disabled={!redacting}
          value={user?.profilePictureSrc}
          onChange={imageSrc => setUserDataChanges({ ...userDataChanges, img: imageSrc })}
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