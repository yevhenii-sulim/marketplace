import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AddProduct, Container } from './AddAnnouncement.styled';
import { toggleModalForm } from '../../redux/modalForm/slice';
import { selectAuth } from '../../redux/auth/selector';
import { selectOpenFormModal } from '../../redux/modalForm/selectors';
import ModalForm from 'components/ModalForm/ModalForm';
import { togglePoster } from '../../redux/myPoster/slice';

const modalEnter = document.querySelector('#modal');

export default memo(function AddAnnouncement() {
  const isAuth = useSelector(selectAuth);
  const isOpen = useSelector(selectOpenFormModal);
  const dispatch = useDispatch();

  function onClose() {
    dispatch(toggleModalForm(false));
  }

  function toCreatePost() {
    dispatch(togglePoster(true));
  }

  function onOpen(evt) {
    !isAuth && evt.preventDefault();
    dispatch(toggleModalForm(true));
    isAuth && toCreatePost();
  }

  return (
    <Container>
      <AddProduct to="user_page/my_poster" onClick={onOpen}>
        Створити оголошення
      </AddProduct>
      {!isAuth &&
        isOpen &&
        createPortal(<ModalForm onClose={onClose} />, modalEnter)}
    </Container>
  );
});
