import ModalForm from 'components/ModalForm/ModalForm';
import React, { memo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AddButton } from './AddAnnouncement.styled';

export default memo(function AddAnnouncement() {
  const [hide, setHide] = useState(false);
  const modalEnter = document.querySelector('#modal-form');
  function onClose(bool) {
    setHide(bool);
  }

  return (
    <div>
      <AddButton type="button" onClick={() => setHide(true)}>
        Створити оголошення
      </AddButton>
      {hide && createPortal(<ModalForm onClose={onClose} />, modalEnter)}
    </div>
  );
});
