import React from 'react'
import { LinkReg, Tytle } from './RegisterArea.styled'
import ContinueVia from 'components/ContinueVia/ContinueVia'
import FormRegister from 'components/FormRegister/FormRegister'

export default function RegisterArea({ onClose, toggleWind }) {
  return (
    <>
      <Tytle>Реєстрація</Tytle>
      <FormRegister onClose={onClose} />
      <LinkReg type="button" onClick={toggleWind}>
        Я вже зареєстрований
      </LinkReg>
      <ContinueVia/>
    </>
  )
}
