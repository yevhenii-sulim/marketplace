import ModalForm from 'components/ModalForm/ModalForm';
import React, { memo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AddButton } from './AddAnnouncement.styled';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selector';
import { Navigate } from 'react-router-dom';

const modalEnter = document.querySelector('#modal-form');

export default memo(function AddAnnouncement() {
  const [hide, setHide] = useState(false);
  const isLoad = useSelector(selectAuth);
  function onClose(bool) {
    setHide(bool);
  }

  return (
    <div>
      <AddButton type="button" onClick={() => setHide(true)}>
        Створити оголошення
      </AddButton>
      {hide &&
        (isLoad ? (
          <Navigate to="/add_product" />
        ) : (
          createPortal(<ModalForm onClose={onClose} />, modalEnter)
        ))}
    </div>
  );
});
