import React from 'react';
import { ContainerError, ErrorList, TitleError } from './ModalForm.styled';

export default function AuthError({ errorAuth }) {
  return (
    <ContainerError>
      {errorAuth.map(({ field, message }) => {
        return (
          <ErrorList>
            <TitleError>{field}</TitleError>
            <ul>
              {message.map((item, index) => {
                return (
                  <li>
                    {index + 1} : {item}
                  </li>
                );
              })}
            </ul>
          </ErrorList>
        );
      })}
    </ContainerError>
  );
}
