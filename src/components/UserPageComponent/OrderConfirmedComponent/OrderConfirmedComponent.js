import { useSelector } from 'react-redux';
import { selectBasket } from '../../../redux/basket/select';
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
import { myStory } from 'data/myStory';

export default function OrderConfirmedComponent() {

  const navigation = useNavigate();

  const basket = useSelector(selectBasket);
  console.log(basket);

  const handleMyOrdersButton = () => {
    navigation('/user_page/my_order');
  }

  const handleContinueShoppingButton = () => {
    navigation('/');
  }

  console.log(myStory.filter(product => product.state.waited));

  return (
    <Container>
      <Title>Дякуємо за ваше замовлення!</Title>
      <FullOrderInfo>
        {myStory.filter(product => product.state.waited).length ? (
          <OrderProducts>
            {myStory.filter(product => product.state.waited).map(({ _id, img, title, price }) => {
              return (
                <OrderProduct key={_id} productId={_id} imgSrc={img} title={title} price={price} />
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
