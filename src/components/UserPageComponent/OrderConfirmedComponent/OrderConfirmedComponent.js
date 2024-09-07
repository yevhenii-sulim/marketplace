import {
  Container,
  ContinueShoppingButton,
  FullOrderInfo,
  MyOrdersButton,
  OrderConfirmedButtons,
  OrderProducts,
  Title,
} from './OrderConfirmedComponent.styled';
import OrderProduct from './OrderProduct';
import { useNavigate } from 'react-router-dom';
import { clearAllProducts } from 'data/myStory';
import { useSelector } from 'react-redux';
import { selectMyUser } from '../../../redux/auth/selector';
import { selectAuth } from '../../../redux/auth/selector';

export default function OrderConfirmedComponent() {
  const navigation = useNavigate();
  const productStory = JSON.parse(localStorage.getItem('productStory')) || [];
  const user = useSelector(selectMyUser);
  const isUserRegistered = useSelector(selectAuth);

  console.log(user);

  const handleMyOrdersButton = () => {
    navigation('/my_order');
  };

  const handleContinueShoppingButton = () => {
    navigation('/');
  };

  const handlePageLeave = () => {
    localStorage.removeItem('productStory');
    clearAllProducts();
  };

  window.addEventListener('visibilitychange', handlePageLeave);

  function getProduct(product, discount, discountPrice, price) {
    if (product) {
      if (product.discount) {
        return product.discountPrice;
      } else {
        return product.price;
      }
    } else {
      if (discount) {
        return discountPrice;
      } else {
        return price;
      }
    }
  }

  return (
    <Container>
      <Title>Дякуємо за ваше замовлення!</Title>
      <FullOrderInfo>
        <OrderProducts>
          {(isUserRegistered ? user.purchasedGoods : productStory).length ? (
            (isUserRegistered ? user.purchasedGoods : productStory).map(
              ({
                _id,
                img,
                title,
                product,
                discount,
                discountPrice,
                price,
              }) => {
                return (
                  <OrderProduct
                    key={_id}
                    productId={_id}
                    imgSrc={product ? product.img : img}
                    title={title}
                    price={getProduct(product, discount, discountPrice, price)}
                  />
                );
              }
            )
          ) : (
            <p>Немає замовлень</p>
          )}
        </OrderProducts>
        <OrderConfirmedButtons>
          <MyOrdersButton onClick={handleMyOrdersButton}>
            Мої замовлення
          </MyOrdersButton>
          <ContinueShoppingButton onClick={handleContinueShoppingButton}>
            Продовжити покупки
          </ContinueShoppingButton>
        </OrderConfirmedButtons>
      </FullOrderInfo>
    </Container>
  );
}
