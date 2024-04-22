import { memo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import { AuxiliarysContainer, NavLink } from './Auxiliarys.styled';
import ModalForm from 'components/ModalForm/ModalForm';
import { toggleModalForm } from '../../redux/modalForm/slice';
import { selectOpenFormModal } from '../../redux/modalForm/selectors';
import { selectAuth } from '../../redux/auth/selector';

const modalEnter = document.querySelector('#modal');

export default memo(function Auxiliarys() {
  const [hide, setHide] = useState(false);
  const isAuth = useSelector(selectAuth);
  const isOpen = useSelector(selectOpenFormModal);
  const dispatch = useDispatch();

  function onClose() {
    dispatch(toggleModalForm(false));
    setHide(false);
  }
  function onOpen() {
    dispatch(toggleModalForm(true));
    setHide(true);
  }

  return (
    <AuxiliarysContainer>
      <NavLink to="/">
        <ChatBubbleOutlineIcon />
      </NavLink>
      <NavLink to="/">
        <FavoriteBorderIcon />
      </NavLink>
      <NavLink to="user_page" onClick={onOpen}>
        <PersonIcon />
      </NavLink>
      {!isAuth &&
        isOpen &&
        hide &&
        createPortal(<ModalForm onClose={onClose} />, modalEnter)}
    </AuxiliarysContainer>
  );
});
