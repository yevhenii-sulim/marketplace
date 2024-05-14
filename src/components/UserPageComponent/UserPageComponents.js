import React from 'react';
import { Container } from './UserPageComponent.styled';
import UserPageHeader from './UserPageHeader';
import UserPageMaine from './UserPageMaine';

export default function UserPageComponents({ rating, nameUser, imgUser }) {
  return (
    <Container>
      <UserPageHeader rating={rating} nameUser={nameUser} imgUser={imgUser} />
      <UserPageMaine />
    </Container>
  );
}
