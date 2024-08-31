import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCart from 'SvgComponents/ShoppingСart/ShoppingСart';
import { selectBasket } from '../../redux/basket/select';

import {
  Backdrop,
  cssButtonClose,
  Empty,
  Link,
  TitleSection,
  WrapperOrder,
} from './BasketModal.styled';
import BasketProductComponent from 'components/BasketProductComponent/BasketProductComponent';
import BasketTotalPriceComponent from 'components/BasketTotalPriceComponent/BasketTotalPriceComponent';
import BasketButtonsOrder from 'components/BasketButtonsOrder/BasketButtonsOrder';

export default function BasketModal({ setIsOpen }) {
  const basket = useSelector(selectBasket);
  const navigation = useNavigate();
  const location = useLocation();

  let total = 0;
  let totalPrice = 0;
  let totalDiscount = 0;
  let totalCount = 0;

  function onClose() {
    setIsOpen(false);
  }

  useEffect(() => {
    function onCloseByEsc(evt) {
      if (evt.code === 'Escape') {
        setIsOpen(false);
      }
    }
    window.addEventListener('keydown', onCloseByEsc);
    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [setIsOpen]);

  const makeOrder = () => {
    navigation('/ordering');
    onClose();
  };
  const continueShopping = () => {
    navigation(location.state);
  };
  const makeFirstOrder = () => {
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
            <Link to="/" onClick={makeFirstOrder}>
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
                    <BasketProductComponent
                      id={id}
                      img={img}
                      title={title}
                      count={count}
                      discount={discount}
                      price={price}
                      discountPrice={discountPrice}
                    />
                  );
                }
              )}
            </ul>
            <BasketTotalPriceComponent
              totalDiscount={totalDiscount}
              totalCount={totalCount}
              totalPrice={totalPrice}
              total={total}
            />
            <BasketButtonsOrder
              continueShopping={continueShopping}
              makeOrder={makeOrder}
            />
          </WrapperOrder>
        </>
      )}
    </Backdrop>
  );
}
