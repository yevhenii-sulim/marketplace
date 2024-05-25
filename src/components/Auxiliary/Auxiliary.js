import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { AuxiliaryContainer, NavLink, TotalProduct } from './Auxiliary.styled';
import { selectAuth } from '../../redux/auth/selector';
import { toggleModalForm } from '../../redux/modalForm/slice';
import { selectBasket } from '../../redux/basket/select';

export default memo(function Auxiliary() {
  const isAuth = useSelector(selectAuth);
  const basket = useSelector(selectBasket);
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
        <TotalProduct>
          {basket.reduce((cum, item) => {
            cum += item.count;
            return cum;
          }, 0)}
        </TotalProduct>
        <ShoppingCartOutlinedIcon />
      </NavLink>
      <NavLink to="user_page/profile" onClick={onOpen}>
        <PersonOutlineIcon />
      </NavLink>
    </AuxiliaryContainer>
  );
});
