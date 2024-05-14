import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import { AuxiliaryContainer, NavLink } from './Auxiliary.styled';
import { selectAuth } from '../../redux/auth/selector';
import { toggleModalForm } from '../../redux/modalForm/slice';

export default memo(function Auxiliary() {
  const isAuth = useSelector(selectAuth);
  const dispatch = useDispatch();

  function onOpen(evt) {
    !isAuth && evt.preventDefault();
    dispatch(toggleModalForm(true));
  }

  return (
    <AuxiliaryContainer>
      <NavLink to="user_page/notification" onClick={onOpen}>
        <ChatBubbleOutlineIcon />
      </NavLink>
      <NavLink to="user_page/selected" onClick={onOpen}>
        <FavoriteBorderIcon />
      </NavLink>
      <NavLink to="user_page/profile" onClick={onOpen}>
        <PersonIcon />
      </NavLink>
    </AuxiliaryContainer>
  );
});
