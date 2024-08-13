import { useSelector } from 'react-redux';
import {
  YellowTitle,
  OrderNumber,
  OrderProductDataContainer,
  OrderDate,
  OrderProductImageAndTitle,
  OrderProductPrice,
  Divider,
  OrderProductData,
  OrderReceiverData,
  OrderProductContainer
} from './OrderConfirmedComponent.styled';
import { selectAuth, selectMyUser } from '../../../redux/auth/selector';

export default function OrderProduct({ productId, imgSrc, title, price }) {

  const isUserRegistered = useSelector(selectAuth);
  const user = useSelector(selectMyUser);

  const productStory = JSON.parse(localStorage.getItem('productStory')) || [];

  let productData = null;

  if (isUserRegistered) {
    productData = user.purchasedGoods.find(item => item._id === productId);
  }
  else {
    productData = productStory.find(item => item._id === productId);
  }

  return (
    <>
      <OrderProductContainer>
        <OrderProductData>
          <YellowTitle>Очікується відправка</YellowTitle>
          <OrderNumber>№125</OrderNumber>
          <OrderProductDataContainer>
            <OrderProductImageAndTitle>
              <img src={imgSrc} alt="" />
              {title}
            </OrderProductImageAndTitle>
            <OrderProductPrice>{price} ₴</OrderProductPrice>
          </OrderProductDataContainer>
          <OrderDate>Від 15:10 08.07.2024</OrderDate>
        </OrderProductData>
        <OrderReceiverData>
          <p>
            <strong>Доставка:</strong> {productData.wayDelivery} {productData.postOffice.slice(10)}
          </p>
          <p>
            <strong>Оплата:</strong> {productData.pay.toLowerCase()}
          </p>
          <p>
            <strong>Отримувач:</strong> {productData.lastName} {productData.firstName} {productData.tel}
          </p>
        </OrderReceiverData>
      </OrderProductContainer>
      <Divider />
    </>
  );
}
