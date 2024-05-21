import React from 'react';
import { LinkReg, Title } from './AreaForgetPass.styled';
import ContinueVia from 'components/ContinueVia/ContinueVia';
import FormForgetPass from 'components/FormForgetPass/FormForgetPass';

export default function AreaForgetPass({ onClose, toggleWind }) {
  return (
    <>
      <Title>Забули пароль?</Title>
      <FormForgetPass onClose={onClose} />
      <LinkReg type="button" onClick={toggleWind}>
        Я вже зареєстрований
      </LinkReg>
      <ContinueVia />
    </>
  );
}
