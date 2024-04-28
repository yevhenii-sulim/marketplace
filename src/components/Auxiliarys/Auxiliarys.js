import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import { AuxiliarysContainer, NavLink } from './Auxiliarys.styled';
import { selectAuth } from '../../redux/auth/selector';
import { toggleModalForm } from '../../redux/modalForm/slice';

export default memo(function Auxiliarys() {
  const isAuth = useSelector(selectAuth);
  const dispatch = useDispatch();

  function onOpen(evt) {
    !isAuth && evt.preventDefault();
    dispatch(toggleModalForm(true));
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
    </AuxiliarysContainer>
  );
});
