import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OrderProduct from './OrderProduct';
import { selectOrderData } from '../../../redux/orderData/selector';
import {
  Container,
  ContinueShoppingButton,
  FullOrderInfo,
  MyOrdersButton,
  OrderConfirmedButtons,
  OrderProducts,
  Title,
} from './OrderConfirmedComponent.styled';

export default function OrderConfirmedComponent() {
  const navigation = useNavigate();
  const data = useSelector(selectOrderData);

  const handleMyOrdersButton = () => {
    navigation('/my_order');
  };

  const handleContinueShoppingButton = () => {
    navigation('/');
  };

  function getProduct(discount, discountPrice, price) {
    if (discount) {
      return discountPrice;
    } else {
      return price;
    }
  }

  return (
    <Container>
      <Title>Дякуємо за ваше замовлення!</Title>
      <FullOrderInfo>
        <OrderProducts>
          {data.length !== 0 ? (
            data[1].map(
              ({ discount, discountPrice, id, img, price, title }) => {
                return (
                  <OrderProduct
                    key={id}
                    street={data[0].street}
                    status={'Очікується відправка'}
                    building={data[0].building}
                    postOffice={data[0].postOffice}
                    town={data[0].town}
                    pay={data[0].pay}
                    firstName={data[0].firstName}
                    lastName={data[0].lastName}
                    tel={data[0].tel}
                    id={id}
                    productId={id}
                    imgSrc={img}
                    title={title}
                    price={getProduct(discount, discountPrice, price)}
                    createDate={Date()}
                    apartment={data[0].apartment}
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
