import {
  YellowTitle,
  OrderProductDataContainer,
  OrderDate,
  OrderProductPrice,
  Divider,
  OrderReceiverData,
  OrderProductContainer,
  OrderProductImage,
  Value,
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
        <div>
          <YellowTitle $state={status}>{status}</YellowTitle>
          <OrderProductDataContainer>
            <OrderProductImage>
              <img src={imgSrc} alt="" />
            </OrderProductImage>
            <Value>
              <h2>{title}</h2>
              <OrderProductPrice>{price}&nbsp;₴</OrderProductPrice>
            </Value>
          </OrderProductDataContainer>
          <OrderDate>{formatDate(createDate)}</OrderDate>
        </div>
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
