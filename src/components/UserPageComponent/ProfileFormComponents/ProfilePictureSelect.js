import PencilSvg from 'SvgComponents/PencilSVG/PencilSvg';
import { ProfilePictureSelectField, ProfilePictureSelectInput } from './ProfilePage.styled';
import DefaultProfilePicture from './DefaultProfilePicture';
import { useState } from 'react';

export default function ProfilePictureSelect({ disabled, value, onChange }) {

  const [profilePicturePreview, setProfilePicturePreview] = useState('');

  const handleChange = event => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imgSrc = URL.createObjectURL(file);

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onloadend = () => {
      console.log('Changed pfp');
      onChange(reader.result);
      setProfilePicturePreview(imgSrc);
    }
  }

  return (
    <ProfilePictureSelectField>
      {value ? (
        <img src={profilePicturePreview || value} alt='' />
      ) : (
        <DefaultProfilePicture />
      )}
      {disabled ? (
        <ProfilePictureSelectInput>
          Фото профілю
        </ProfilePictureSelectInput>
      ) : (
        <ProfilePictureSelectInput>
          Фото профілю
          <PencilSvg />
          <input type="file" alt='' onChange={event => {
            handleChange(event)
          }} />
        </ProfilePictureSelectInput>
      )}
    </ProfilePictureSelectField>
  );
}