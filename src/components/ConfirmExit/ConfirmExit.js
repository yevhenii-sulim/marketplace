import { Button } from '@mui/material';
import { Backdrop } from 'components/ModalForm/ModalForm.styled';
import React from 'react';
import {
  Buttons,
  WrapperModal,
  exitOutButton,
  stayInButton,
} from './ConfirmExit.styled';

export default function ConfirmExit({ onExit, onToggleModal }) {
  function oncloseByClickOutside(evt) {
    if (evt.currentTarget !== evt.target) return;
    onToggleModal(false);
  }

  function onExitOutAccount() {
    onExit();
    window.location.reload();
  }

  return (
    <Backdrop onMouseDown={oncloseByClickOutside}>
      <WrapperModal>
        <p> Бажаєте вийти з акаунту?</p>
        <Buttons>
          <Button type="button" sx={exitOutButton} onClick={onExitOutAccount}>
            Так, вийти
          </Button>
          <Button
            type="submit"
            sx={stayInButton}
            onClick={() => onToggleModal(false)}
          >
            Залишитись
          </Button>
        </Buttons>
      </WrapperModal>
    </Backdrop>
  );
}
