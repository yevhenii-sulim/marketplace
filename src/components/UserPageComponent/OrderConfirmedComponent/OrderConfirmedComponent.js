import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OrderProduct from './OrderProduct';
import { selectMyUser } from '../../../redux/auth/selector';
import { clearAllProducts } from 'data/myStory';
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
  const user = useSelector(selectMyUser);

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
          {user?.purchasedGoods && user.purchasedGoods.length !== 0 ? (
            user.purchasedGoods.map(
              ({
                _id,
                img,
                title,
                product,
                discount,
                discountPrice,
                price,
                createDate = '2024-09-02T17:47:16.424Z',
                status,
                pay,
                firstName,
                lastName,
                tel,
                building,
                postOffice,
                town,
                apartment = 5,
              }) => {
                return (
                  <OrderProduct
                    key={_id}
                    status={status}
                    building={building}
                    postOffice={postOffice}
                    town={town}
                    pay={pay}
                    firstName={firstName}
                    lastName={lastName}
                    tel={tel}
                    id={_id}
                    productId={_id}
                    imgSrc={product ? product.minImage : img}
                    title={title}
                    price={getProduct(product, discount, discountPrice, price)}
                    createDate={createDate}
                    apartment={apartment}
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
