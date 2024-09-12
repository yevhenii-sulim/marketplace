import {
  YellowTitle,
  OrderProductDataContainer,
  OrderDate,
  OrderProductImageAndTitle,
  OrderProductPrice,
  Divider,
  OrderProductData,
  OrderReceiverData,
  OrderProductContainer,
} from './OrderConfirmedComponent.styled';
import { formatDate } from 'data/formatDate';

export default function OrderProduct({
  pay,
  firstName,
  lastName,
  imgSrc,
  title,
  price,
  createDate,
  status,
  tel,
  building,
  postOffice,
  town,
  apartment,
  street,
}) {
  return (
    <>
      <OrderProductContainer>
        <OrderProductData>
          <YellowTitle $state={status}>{status}</YellowTitle>
          <OrderProductDataContainer>
            <OrderProductImageAndTitle>
              <img src={imgSrc} alt="" />
              {title}
            </OrderProductImageAndTitle>
            <OrderProductPrice>{price} ₴</OrderProductPrice>
          </OrderProductDataContainer>
          <OrderDate>{formatDate(createDate)}</OrderDate>
        </OrderProductData>
        <OrderReceiverData>
          <p>
            <strong>Доставка:</strong>
            {building === ''
              ? `${town[0]}, ${postOffice}`
              : `${town[0]}, вулиця: ${street} будівля: ${building}, квартира: ${apartment}`}
          </p>
          <p>
            <strong>Оплата:</strong> {pay}
          </p>
          <p>
            <strong>Отримувач:</strong> {lastName}&nbsp;
            {firstName}, {tel}
          </p>
        </OrderReceiverData>
      </OrderProductContainer>
      <Divider />
    </>
  );
}
