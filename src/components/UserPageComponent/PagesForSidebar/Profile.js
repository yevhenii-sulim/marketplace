import React, { useState } from 'react';
import { Empty } from './PagesForSidebar.styled';
import {
  ProfileContainer,
  PersonalDataContainer,
  ProfilePageTitle,
} from '../ProfileFormComponents/ProfilePage.styled';
import PersonalDataForm from '../ProfileFormComponents/PersonalDataForm';
import ContactForm from '../ProfileFormComponents/ContactForm';
import PasswordForm from '../ProfileFormComponents/PasswordForm';

export default function Profile() {
  const [
    { redactingPersonalData, redactingContacts, redactingPassword },
    setRedactingStatus,
  ] = useState({
    redactingPersonalData: false,
    redactingContacts: false,
    redactingPassword: false,
  });

  const onChanges = (redactingStatus, callback) => {
    setRedactingStatus({ ...redactingStatus });
    callback();
  };

  return (
    <ProfileContainer>
      <Empty>
        <PersonalDataContainer>
          <ProfilePageTitle>Особисті дані</ProfilePageTitle>
          <PersonalDataForm
            redacting={redactingPersonalData}
            onSaveChanges={() =>
              onChanges({
                redactingPersonalData: !redactingPersonalData,
                redactingContacts,
                redactingPassword,
              })
            }
            onCancelChanges={() =>
              onChanges({
                redactingPersonalData: !redactingPersonalData,
                redactingContacts,
                redactingPassword,
              })
            }
            onStartRedacting={() =>
              onChanges({
                redactingPersonalData: !redactingPersonalData,
                redactingContacts,
                redactingPassword,
              })
            }
          />
        </PersonalDataContainer>
      </Empty>
      <Empty>
        <PersonalDataContainer>
          <ProfilePageTitle>Контакти</ProfilePageTitle>
          <ContactForm
            redacting={redactingContacts}
            onSaveChanges={() =>
              onChanges({
                redactingPersonalData,
                redactingContacts: !redactingContacts,
                redactingPassword,
              })
            }
            onCancelChanges={() =>
              onChanges({
                redactingPersonalData,
                redactingContacts: !redactingContacts,
                redactingPassword,
              })
            }
            onStartRedacting={() =>
              onChanges({
                redactingPersonalData,
                redactingContacts: !redactingContacts,
                redactingPassword,
              })
            }
          />
        </PersonalDataContainer>
      </Empty>
      <Empty>
        <PersonalDataContainer>
          <ProfilePageTitle>Пароль</ProfilePageTitle>
          <PasswordForm
            redacting={redactingPassword}
            onSaveChanges={() =>
              onChanges({
                redactingPersonalData,
                redactingContacts,
                redactingPassword: !redactingPassword,
              })
            }
            onCancelChanges={() =>
              onChanges({
                redactingPersonalData,
                redactingContacts,
                redactingPassword: !redactingPassword,
              })
            }
            onStartRedacting={() =>
              onChanges({
                redactingPersonalData,
                redactingContacts,
                redactingPassword: !redactingPassword,
              })
            }
          />
        </PersonalDataContainer>
      </Empty>
    </ProfileContainer>
  );
}
