import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { selectAuth } from '../../redux/auth/selector';
import { togglePoster } from '../../redux/myPoster/slice';
import { toggleModalAuth } from '../../redux/modalAuth/slice';
import { selectOpenFormModalAuth } from '../../redux/modalAuth/selectors';
import ModalForm from 'components/ModalForm/ModalForm';
import { theme } from 'utils/theme';
import {
  AddProduct,
  AddProductResponse,
  Container,
} from './AddAnnouncement.styled';

const modalEnter = document.querySelector('#modal');

export default memo(function AddAnnouncement() {
  const isAuth = useSelector(selectAuth);
  const isOpen = useSelector(selectOpenFormModalAuth);
  const dispatch = useDispatch();

  function onClose() {
    dispatch(toggleModalAuth(false));
  }

  function toCreatePost() {
    dispatch(togglePoster(true));
  }

  function onOpen(evt) {
    !isAuth && evt.preventDefault();
    dispatch(toggleModalAuth(true));
    isAuth && toCreatePost();
  }

  return (
    <Container>
      <AddProductResponse to="user_page/my_poster" onClick={onOpen}>
        <AddIcon
          sx={{
            color: theme.color.bgProduct,
          }}
        />
      </AddProductResponse>
      <AddProduct to="user_page/my_poster" onClick={onOpen}>
        Створити оголошення
      </AddProduct>
      {!isAuth &&
        isOpen &&
        createPortal(<ModalForm onClose={onClose} />, modalEnter)}
    </Container>
  );
});
