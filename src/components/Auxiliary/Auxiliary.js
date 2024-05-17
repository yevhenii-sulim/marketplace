import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
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
      <NavLink to="user_page/selected" onClick={onOpen}>
        <FavoriteBorderIcon />
      </NavLink>
      <NavLink to="user_page/my_order" onClick={onOpen}>
        <AddShoppingCartIcon />
      </NavLink>
      <NavLink to="user_page/profile" onClick={onOpen}>
        <PersonOutlineIcon />
      </NavLink>
    </AuxiliaryContainer>
  );
});
