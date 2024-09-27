import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputField from './InputField';
import DateFormField from './DateFormField';
import GenderSelect from './GenderSelect';
import ProfilePictureSelect from './ProfilePictureSelect';
import {
  ContainerName,
  FormContainer,
  Image,
  UserFieldName,
} from './ProfilePage.styled';
import { selectMyUser } from '../../../redux/auth/selector';
import { update } from '../../../redux/auth/thunk';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { theme } from 'utils/theme';
import {
  InputColumn,
  RedactContainer,
  RedactButton,
  CancelRedactingButton,
} from './ProfilePage.styled';
import DefaultProfilePicture from './DefaultProfilePicture';

export default function PersonalDataForm({
  redacting,
  onSaveChanges,
  onCancelChanges,
  onStartRedacting,
}) {
  const user = useSelector(selectMyUser);
  const { width } = useWindowDimensions();

  return (
    <>
      <FormContainer
        $justifycontent={'space-between'}
        $redacting={redacting}
        $gap={
          (redacting ? '24px' : null) || width <= parseInt(theme.breakPoints.sx)
            ? '50px'
            : null
        }
      >
        <Form redacting={redacting} user={user} />
      </FormContainer>
      <RedactContainer>
        {redacting ? (
          <>
            <RedactButton
              onClick={() => {
                onSaveChanges();
              }}
            >
              Зберегти
            </RedactButton>
            <CancelRedactingButton
              onClick={() => {
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

function Form({ redacting, user }) {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');
  const [gender, setGender] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
    if (!user) return;
    setLastName(user.lastName);
    setFirstName(user.firstName);
    setSurName(user.surName);
    setGender(user.gender);
    setImg(user.profilePictureSrc);
  }, [user]);

  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  return redacting ? (
    <>
      <InputColumn $setfullwidth={true} $setitemscenter={true}>
        <InputField
          label={"Ім'я"}
          placeholder={"Введіть ім'я"}
          onChange={event => setFirstName(event.target.value)}
          onBlur={() => dispatch(update({ firstName: firstName }))}
          required={true}
          value={firstName}
          disabled={!redacting}
        />
        <InputField
          label={'Прізвище'}
          placeholder={'Введіть прізвище'}
          onChange={event => {
            if (event.target.value.length > 21) return;
            setLastName(event.target.value);
          }}
          onBlur={() => dispatch(update({ lastName: lastName }))}
          required={true}
          value={lastName}
          disabled={!redacting}
        />
        <InputField
          label={'По батькові'}
          placeholder={'Введіть по батькові'}
          onChange={event => {
            if (event.target.value.length > 21) return;
            setSurName(event.target.value);
          }}
          onBlur={() => dispatch(update({ surName: surName }))}
          required={true}
          value={surName}
          disabled={!redacting}
        />
      </InputColumn>
      <InputColumn $justifycontent={'flex-start'}>
        <DateFormField
          label={'Дата народження'}
          disabled={!redacting}
          value={user?.birthDate}
          onChange={value => dispatch(update({ birthDate: value }))}
        />
        <GenderSelect
          disabled={!redacting}
          value={gender}
          onChange={event => {
            dispatch(update({ gender: event.target.value }));
          }}
        />
      </InputColumn>
      <InputColumn>
        <ProfilePictureSelect
          disabled={!redacting}
          img={img}
          redacting={redacting}
        />
      </InputColumn>
    </>
  ) : (
    <ContainerName>
      <InputColumn>
        <UserFieldName>
          <h3>Ім'я</h3>
          {user?.firstName ? <p>{user.firstName}</p> : <p>--</p>}
        </UserFieldName>
        <UserFieldName>
          <h3>Прізвище</h3>
          {user?.lastName ? <p>{user.lastName}</p> : <p>--</p>}
        </UserFieldName>
        <UserFieldName>
          <h3>По батькові</h3>
          {user?.surName ? <p>{user.surName}</p> : <p>--</p>}
        </UserFieldName>
      </InputColumn>
      <InputColumn
        $gap={width <= parseInt(theme.breakPoints.md) ? '65px' : null}
        $justifycontent={
          width <= parseInt(theme.breakPoints.md)
            ? 'space-between'
            : 'flex-start'
        }
      >
        <UserFieldName>
          <h3>День народження</h3>
          {user?.birthDate ? <p>{user.birthDate}</p> : <p>--</p>}
        </UserFieldName>
        <UserFieldName>
          <h3>Стать</h3>
          {user?.gender ? (
            <p>{user.gender === 'male' ? 'Чоловіча' : 'Жіноча'}</p>
          ) : (
            <p>--</p>
          )}
        </UserFieldName>
      </InputColumn>
      <Image>
        {img ? (
          <img src={img} alt="user.firstName" />
        ) : (
          <DefaultProfilePicture />
        )}
      </Image>
    </ContainerName>
  );
}
