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
import useWindowDimensions from "hooks/useWindowDimensions";

export default function PersonalDataForm({ redacting, onSaveChanges, onCancelChanges, onStartRedacting }) {

  const user = useSelector(selectMyUser);
  const token = useSelector(selectToken);
  const { width } = useWindowDimensions();

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
      <FormContainer 
        $justifycontent={'space-between'} 
        $redacting={redacting}
        $gap={(redacting ? '24px' : null) || width <= 475 ? '50px' : null}
      >
        <Form 
          redacting={redacting}
          user={user}
          userDataChanges={userDataChanges}
          setUserDataChanges={setUserDataChanges}
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

function Form({ redacting, user, userDataChanges, setUserDataChanges }) {

  const { width } = useWindowDimensions();

  const DateFormFieldComponent = (
    <DateFormField 
      label={'Дата народження'}
      disabled={!redacting}
      value={userDataChanges?.birthDate || user?.birthDate}
      onChange={value => setUserDataChanges({ ...userDataChanges, birthDate: value })}
    />
  );

  const GenderSelectComponent = (
    <GenderSelect 
      disabled={!redacting}
      value={user?.gender}
      onChange={event => setUserDataChanges({ 
        ...userDataChanges, 
        gender: event.target.value === 'Чоловік' ? 'male' : 'female'
      })}
    />
  );

  const ProfilePictureSelectComponent = (
    <ProfilePictureSelect 
      disabled={!redacting}
      value={user?.profilePictureSrc}
      onChange={imageSrc => setUserDataChanges({ ...userDataChanges, img: imageSrc })}
      redacting={redacting}
    />
  );

  return redacting ? (
    <>
      <InputColumn
        $setfullwidth={true}
        $setitemscenter={true}
      >
        {width <= 762 ? ProfilePictureSelectComponent : null}
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
        {width <= 762 ? DateFormFieldComponent : null}
        {width <= 762 ? GenderSelectComponent : null}
      </InputColumn>
      {width > 762 ? (
        <InputColumn $justifycontent={'flex-start'}>
          {width > 762 ? DateFormFieldComponent : null}
          {width > 762 ? GenderSelectComponent : null}
        </InputColumn>
      ) : null}
      {width > 762 ? (
        <InputColumn>
          {width > 762 ? ProfilePictureSelectComponent : null}
        </InputColumn>
      ) : null}
    </>
  ) : (
    <>
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
        {width <= 762 ? DateFormFieldComponent : null}
      </InputColumn>
      <InputColumn $gap={width <= 672 ? '65px' : null} $justifycontent={width <= 762 ? 'space-between' : 'flex-start'}>
        {width > 762 ? DateFormFieldComponent : null}
        {width > 762 ? GenderSelectComponent : null}

        {width <= 762 ? ProfilePictureSelectComponent : null}
        {width <= 762 ? GenderSelectComponent : null}
      </InputColumn>
      {width > 762 ? (
        <InputColumn>
          {ProfilePictureSelectComponent}
        </InputColumn>
      ) : null}
    </>
  );
}