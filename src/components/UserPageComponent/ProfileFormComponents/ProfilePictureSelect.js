import PencilSvg from 'SvgComponents/PencilSVG/PencilSvg';
import { ProfilePictureSelectField, ProfilePictureSelectInput } from './ProfilePage.styled';
import DefaultProfilePicture from './DefaultProfilePicture';
import { useState } from 'react';

export default function ProfilePictureSelect({ disabled, value, onChange, redacting }) {

  const [profilePicturePreview, setProfilePicturePreview] = useState('');

  const handleChange = event => {
    const file = event.target.files?.[0];

    console.log(file);

    if (!file) return;

    const imgSrc = URL.createObjectURL(file);

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onloadend = () => {
      console.log('Changed pfp');
      onChange(reader.result);
      setProfilePicturePreview(imgSrc);

      console.log(reader.result);
      console.log(profilePicturePreview);
      console.log(imgSrc);
    }
  }

  return (
    <ProfilePictureSelectField $redacting={redacting}>
      {profilePicturePreview ? (
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
          <input type="file" alt='' onChange={handleChange} />
        </ProfilePictureSelectInput>
      )}
    </ProfilePictureSelectField>
  );
}