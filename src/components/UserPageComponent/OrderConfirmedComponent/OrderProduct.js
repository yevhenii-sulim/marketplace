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
import { myStory } from 'data/myStory';

export default function OrderProduct({ productId, imgSrc, title, price }) {

  const orderData = myStory.find(item => item._id === productId);

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
            <strong>Доставка:</strong> {orderData.wayDelivery} {orderData.postOffice.slice(10)}
          </p>
          <p>
            <strong>Оплата:</strong> {orderData.pay.toLowerCase()}
          </p>
          <p>
            <strong>Отримувач:</strong> {orderData.lastName} {orderData.firstName} +380-{orderData.tel}
          </p>
        </OrderReceiverData>
      </OrderProductContainer>
      <Divider />
    </>
  );
}
