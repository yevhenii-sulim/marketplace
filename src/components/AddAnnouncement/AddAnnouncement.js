import React, { memo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import ModalForm from 'components/ModalForm/ModalForm';
import { AddProduct } from './AddAnnouncement.styled';
import { selectAuth } from '../../redux/auth/selector';

const modalEnter = document.querySelector('#modal');

export default memo(function AddAnnouncement() {
  const [hide, setHide] = useState(false);
  const isLoaded = useSelector(selectAuth);

  function onClose(bool) {
    setHide(bool);
  }
  return (
    <div>
      <AddProduct to="add_product" onClick={() => setHide(true)}>
        Створити оголошення
      </AddProduct>
      {!isLoaded &&
        hide &&
        createPortal(<ModalForm onClose={onClose} />, modalEnter)}
    </div>
  );
});
