import React, { memo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalForm from 'components/ModalForm/ModalForm';
import { AddProduct } from './AddAnnouncement.styled';
import { selectOpenFormModal } from '../../redux/modalForm/selectors';
import { toggleModalForm } from '../../redux/modalForm/slice';
import { selectAuth } from '../../redux/auth/selector';

const modalEnter = document.querySelector('#modal');

export default memo(function AddAnnouncement() {
  const [hide, setHide] = useState(false);
  const isAuth = useSelector(selectAuth);
  const isOpen = useSelector(selectOpenFormModal);
  const dispatch = useDispatch();

  function onOpen() {
    dispatch(toggleModalForm(true));
    setHide(true);
  }

  function onClose() {
    dispatch(toggleModalForm(false));
  }

  return (
    <div>
      <AddProduct to="add_product" onClick={onOpen}>
        Створити оголошення
      </AddProduct>
      {!isAuth &&
        isOpen &&
        hide &&
        createPortal(<ModalForm onClose={onClose} />, modalEnter)}
    </div>
  );
});
