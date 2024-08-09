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

export default function OrderConfirmedComponent() {
  const navigation = useNavigate();
  const productStory = JSON.parse(localStorage.getItem('productStory')) || [];

  const handleMyOrdersButton = () => {
    navigation('/my_order');
  };

  const handleContinueShoppingButton = () => {
    navigation('/');
  };

  const handlePageLeave = () => {
    localStorage.removeItem('productStory');
    clearAllProducts();
  }

  window.addEventListener('visibilitychange', handlePageLeave);

  return (
    <Container>
      <Title>Дякуємо за ваше замовлення!</Title>
      <FullOrderInfo>
        {productStory.length ? (
          <OrderProducts>
            {productStory
              .map(({ _id, img, title, price }) => {
                return (
                  <OrderProduct
                    key={_id}
                    productId={_id}
                    imgSrc={img}
                    title={title}
                    price={price}
                  />
                );
              })}
          </OrderProducts>
        ) : (
          <p>Немає замовлень</p>
        )}
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
