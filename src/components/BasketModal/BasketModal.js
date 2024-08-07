import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCart from 'SvgComponents/ShoppingСart/ShoppingСart';
import DeleteSvg from 'SvgComponents/DeleteSvg/DeleteSvg';
import { theme } from 'utils/theme';
import { selectBasket } from '../../redux/basket/select';
import { selectMyUser } from '../../redux/auth/selector';
import { deleteProduct } from '../../redux/basket/slice';
import { toggleOrdering } from '../../redux/myOrder/slice';
import {
  addFavoriteProduct,
  removeFavoriteProduct,
} from '../../redux/product/thunk';
import {
  About,
  Actives,
  Backdrop,
  continueShoppingButton,
  cssButtonClose,
  Discount,
  Empty,
  Image,
  Link,
  List,
  makeShoppingButton,
  Price,
  Sum,
  Title,
  TitleSection,
  Total,
  TotalPrice,
  WrapperButton,
  WrapperBuy,
  WrapperOrder,
  WrapperProduct,
} from './BasketModal.styled';

function defineWordByCount(product) {
  if (product === 1) return 'товар';
  if (
    String(product).slice(-2, String(product).length - 1) !== '1' &&
    (String(product).slice(-1) === '2' ||
      String(product).slice(-1) === '3' ||
      String(product).slice(-1) === '4')
  )
    return 'товари';
  return 'товарів';
}

export default function BasketModal() {
  const basket = useSelector(selectBasket);
  const user = useSelector(selectMyUser);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  let total = 0;
  let totalPrice = 0;
  let totalDiscount = 0;
  let totalCount = 0;

  function toggleFavorite(id) {
    if (user.favorites.some(({ _id }) => id === _id)) {
      dispatch(removeFavoriteProduct(id));
    } else {
      dispatch(addFavoriteProduct(id));
    }
  }

  function onClose() {
    dispatch(toggleOrdering(false));
  }

  useEffect(() => {
    function onCloseByEsc(evt) {
      if (evt.code === 'Escape') {
        dispatch(toggleOrdering(false));
      }
    }
    window.addEventListener('keydown', onCloseByEsc);
    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [dispatch]);

  const deleteFromBasket = id => {
    dispatch(deleteProduct(id));
  };
  const makeOrder = () => {
    navigation('/ordering');
    onClose();
  };
  const continueShopping = () => {
    onClose();
  };

  function oncloseByClickOutside(evt) {
    if (evt.currentTarget !== evt.target) return;
    onClose();
  }
  function onCloseWithButton() {
    onClose();
  }

  return (
    <Backdrop onClick={oncloseByClickOutside}>
      {basket.length === 0 ? (
        <Empty>
          <TitleSection>Мій кошик</TitleSection>
          <>
            <IconButton sx={cssButtonClose} onClick={onCloseWithButton}>
              <CloseIcon className="close" />
            </IconButton>
            <ShoppingCart />
            <p>Зробіть ваше переше замовлення</p>
            <Link to="/" onClick={continueShopping}>
              Перейти до товарів
            </Link>
          </>
        </Empty>
      ) : (
        <>
          <WrapperOrder>
            <TitleSection>Мій кошик</TitleSection>
            <IconButton sx={cssButtonClose} onClick={onCloseWithButton}>
              <CloseIcon className="close" />
            </IconButton>
            <ul>
              {basket.map(
                ({ id, title, price, img, discount, discountPrice, count }) => {
                  total += discount ? discountPrice * count : price * count;
                  totalPrice += price * count;
                  totalDiscount += discount && (price - discountPrice) * count;
                  totalCount += count;
                  return (
                    <List key={id}>
                      <WrapperProduct>
                        <Image>
                          <img height="114" src={img} alt={title} />
                        </Image>
                        <About>
                          <Title>{title}</Title>
                          <Price>
                            {discount ? (
                              <>
                                <p className="price-discount">
                                  {price} &#8372;
                                </p>
                                <p className="discount">
                                  {discountPrice} &#8372;
                                </p>
                              </>
                            ) : (
                              <p className="price">{price} &#8372;</p>
                            )}
                          </Price>
                          <Actives>
                            <button
                              type="button"
                              className="favorite"
                              onClick={() => toggleFavorite(id)}
                            >
                              {user?.favorites.some(({ _id }) => id === _id) ? (
                                <FavoriteIcon
                                  sx={{ color: theme.color.bgNumberBasket }}
                                />
                              ) : (
                                <FavoriteBorderIcon sx={{ color: '#727272' }} />
                              )}
                            </button>
                            <button
                              type="button"
                              className="delete"
                              onClick={() => deleteFromBasket(id)}
                            >
                              <DeleteSvg />
                            </button>
                          </Actives>
                        </About>
                      </WrapperProduct>
                    </List>
                  );
                }
              )}
            </ul>
            <WrapperBuy>
              <TotalPrice>
                <Sum>
                  <span className="info">
                    {totalCount} {defineWordByCount(totalCount)} на суму
                  </span>
                  <span className="info-price">{totalPrice} &#8372;</span>
                </Sum>
                <Discount>
                  <span className="info">Знижка</span>
                  <span className="info-price info-price_discount">
                    {totalDiscount} &#8372;
                  </span>
                </Discount>

                <Total>
                  <span>Загальна сума</span>
                  <span>{total} &#8372;</span>
                </Total>
              </TotalPrice>
            </WrapperBuy>
            <WrapperButton>
              <Button
                type="button"
                sx={continueShoppingButton}
                onClick={continueShopping}
              >
                Продовжити покупки
              </Button>
            </WrapperButton>
            <WrapperButton>
              <Button type="button" onClick={makeOrder} sx={makeShoppingButton}>
                Оформити замовлення
              </Button>
            </WrapperButton>
          </WrapperOrder>
        </>
      )}
    </Backdrop>
  );
}
