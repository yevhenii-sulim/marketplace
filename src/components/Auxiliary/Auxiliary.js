import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { AuxiliaryContainer, NavLink, TotalProduct } from './Auxiliary.styled';
import { selectAuth } from '../../redux/auth/selector';
import { toggleModalForm } from '../../redux/modalForm/slice';
import { selectBasket } from '../../redux/basket/select';
import useWindowDimensions from 'hooks/useWindowDimensions';

export default memo(function Auxiliary() {
  const isAuth = useSelector(selectAuth);
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  function onOpen(evt) {
    if (isAuth) return;
    evt.preventDefault();
    dispatch(toggleModalForm(true));
  }

  return (
    <AuxiliaryContainer>
      {width >= 1440 && (
        <NavLink to="/user_page/selected" onClick={onOpen}>
          <FavoriteBorderIcon />
        </NavLink>
      )}
      <NavLink to="/my_order">
        {basket.length !== 0 && (
          <TotalProduct>
            {basket.reduce((cum, item) => {
              cum += item.count;
              return cum;
            }, 0)}
          </TotalProduct>
        )}
        <ShoppingCartOutlinedIcon />
      </NavLink>
      {width >= 1440 && (
        <NavLink to="/user_page/profile" onClick={onOpen}>
          <PersonOutlineIcon />
        </NavLink>
      )}
    </AuxiliaryContainer>
  );
});
