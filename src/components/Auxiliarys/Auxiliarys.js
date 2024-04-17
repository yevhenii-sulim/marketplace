import { memo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import { AuxiliarysContainer, NavLink } from './Auxiliarys.styled';
import { selectAuth } from '../../redux/auth/selector';
import ModalForm from 'components/ModalForm/ModalForm';

const modalEnter = document.querySelector('#modal');

export default function Auxiliarys() {
  const [hide, setHide] = useState(false);
  const isLoaded = useSelector(selectAuth);
  console.log(isLoaded);

  function onClose(bool) {
    setHide(bool);
  }
  return (
    <AuxiliarysContainer>
      <NavLink to="/">
        <ChatBubbleOutlineIcon />
      </NavLink>
      <NavLink to="/">
        <FavoriteBorderIcon />
      </NavLink>
      <NavLink to="user_page" onClick={() => setHide(true)}>
        <PersonIcon />
        {!isLoaded &&
          hide &&
          createPortal(<ModalForm onClose={onClose} />, modalEnter)}
      </NavLink>
    </AuxiliarysContainer>
  );
}
