import { createPortal } from 'react-dom';
import { useState } from 'react';
import ModalForm from 'components/ModalForm/ModalForm';

export default function Header() {
  const [hide, setHide] = useState(false);
  const modalEnter = document.querySelector('#modal-form');
  function onClose(bool) {
    setHide(bool);
  }
  return (
    <div>
      <button type="button" onClick={() => setHide(true)}>
        Створити оголошення
      </button>

      {hide && createPortal(<ModalForm onClose={onClose} />, modalEnter)}
    </div>
  );
}
