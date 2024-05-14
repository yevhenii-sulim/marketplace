import React from 'react';
import { LinkReg, Title } from './RegisterArea.styled';
import ContinueVia from 'components/ContinueVia/ContinueVia';
import FormRegister from 'components/FormRegister/FormRegister';

export default function RegisterArea({ onClose, toggleWind }) {
  return (
    <>
      <Title>Реєстрація</Title>
      <FormRegister onClose={onClose} />
      <LinkReg type="button" onClick={toggleWind}>
        Я вже зареєстрований
      </LinkReg>
      <ContinueVia />
    </>
  );
}
