import { Button } from '@mui/material';
import { Backdrop, WrapperModal } from 'components/ModalForm/ModalForm.styled';
import React from 'react';
import { Buttons, exitOutButton, stayInButton } from './ConfirmExit.styled';

export default function ConfirmExit({ onExit, onToggleModal }) {
  function oncloseByClickOutside(evt) {
    if (evt.currentTarget !== evt.target) return;
    onToggleModal(false);
  }
  return (
    <Backdrop onMouseDown={oncloseByClickOutside}>
      <WrapperModal>
        <p> Бажаєте вийти з акаунту?</p>
        <Buttons>
          <Button
            type="button"
            sx={exitOutButton}
            onClick={onToggleModal(false)}
          >
            Так, вийти
          </Button>
          <Button
            type="submit"
            sx={stayInButton}
            onClick={onToggleModal(false)}
          >
            Залишитись
          </Button>
        </Buttons>
      </WrapperModal>
    </Backdrop>
  );
}
