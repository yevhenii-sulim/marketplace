import PencilSvg from 'SvgComponents/PencilSVG/PencilSvg';
import { update } from '../../../redux/auth/thunk';
import DefaultProfilePicture from './DefaultProfilePicture';
import {
  ProfilePictureSelectField,
  ProfilePictureSelectInput,
} from './ProfilePage.styled';
import { useDispatch } from 'react-redux';

export default function ProfilePictureSelect({ disabled, img, redacting }) {
  const dispatch = useDispatch();
  const handleChange = event => {
    const formData = new FormData();
    const file = event.target.files?.[0];
    if (!file) return;
    formData.append('img', file);
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onloadend = () => {
      dispatch(update(formData));
    };
  };
  return (
    <ProfilePictureSelectField $redacting={redacting}>
      {img !== '' ? <img src={img} alt="" /> : <DefaultProfilePicture />}
      {disabled ? (
        <ProfilePictureSelectInput>Фото профілю</ProfilePictureSelectInput>
      ) : (
        <ProfilePictureSelectInput>
          Фото профілю
          <PencilSvg />
          <input type="file" alt="" onChange={handleChange} />
        </ProfilePictureSelectInput>
      )}
    </ProfilePictureSelectField>
  );
}
