import PencilSvg from 'SvgComponents/PencilSVG/PencilSvg';
import { ProfilePictureSelectField, ProfilePictureSelectInput } from './ProfilePage.styled';
import DefaultProfilePicture from './DefaultProfilePicture';
import { useState } from 'react';

export default function ProfilePictureSelect({ disabled, onChange }) {

  const [profilePictureSrc, setProfilePictureSrc] = useState('');

  const handleChange = event => {
    const file = event.target.files?.[0];
    setProfilePictureSrc(file ? URL.createObjectURL(file) : '');
  }

  return (
    <ProfilePictureSelectField>
      {profilePictureSrc ? (
        <img src={profilePictureSrc} alt='' />
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
            onChange(event);
            handleChange(event)
          }} />
        </ProfilePictureSelectInput>
      )}
    </ProfilePictureSelectField>
  );
}