import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { changeStatusSoldProduct } from '../../../../redux/product/thunk';
import { formatDate } from 'data/formatDate';
import {
  ActiveProduct,
  Divider,
  OpenOperation,
  Operation,
  OperationList,
  OrderDate,
  OrderProductContainer,
  OrderProductData,
  OrderProductDataContainer,
  OrderProductImageAndTitle,
  OrderProductPrice,
  OrderReceiverData,
  YellowTitle,
} from './SoldProduct.styled';

export default function SoldProductComponent({
  id,
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
}) {
  const dispatch = useDispatch();
  const ref = useRef(null);

  function closeOperation(evt) {
    const wrapper = evt.target.closest('.wrapper');
    if (!wrapper.className.includes('open')) {
      return;
    }
    const button = wrapper.querySelector('.isOpen');

    if (evt.target === evt.currentTarget) {
      if (wrapper.className.includes('open')) {
        button.classList.remove('isOpen');
        wrapper.classList.remove('open');
      }
    }
  }

  function changStatus(id, status) {
    dispatch(
      changeStatusSoldProduct({
        id,
        status: {
          status: `${status}`,
        },
      })
    );

    const wrapper = ref.current;
    const button = wrapper.querySelector('.isOpen');
    button.classList.remove('isOpen');
    wrapper.classList.remove('open');
  }

  function openOperation(evt) {
    const wrapper = evt.target.closest('.wrapper');
    const button = evt.target.closest('button');

    if (wrapper.className.includes('open')) {
      button.classList.remove('isOpen');
      wrapper.classList.remove('open');
    } else {
      wrapper.classList.add('open');
      button.classList.add('isOpen');
    }
  }

  return (
    <>
      <OrderProductContainer
        className="wrapper"
        onClick={closeOperation}
        ref={ref}
      >
        <OrderProductData>
          <YellowTitle $state={status}>{status}</YellowTitle>
          <OrderProductDataContainer>
            <OrderProductImageAndTitle>
              <img src={imgSrc} alt="" />
              {title}
            </OrderProductImageAndTitle>
            <div>
              <Operation>
                <OpenOperation type="button" onClick={openOperation}>
                  <MoreHorizOutlinedIcon sx={{ pointerEvents: 'none' }} />
                </OpenOperation>
                <OperationList className="story">
                  <ActiveProduct
                    type="button"
                    onClick={() => changStatus(id, 'Очікується відправка')}
                  >
                    Очікується відправка
                  </ActiveProduct>
                  <ActiveProduct
                    type="button"
                    onClick={() => changStatus(id, 'Скасовано')}
                  >
                    Скасовано
                  </ActiveProduct>
                  <ActiveProduct
                    type="button"
                    onClick={() => changStatus(id, 'Виконано')}
                  >
                    Виконано
                  </ActiveProduct>
                </OperationList>
              </Operation>
              <OrderProductPrice>{price} ₴</OrderProductPrice>
            </div>
          </OrderProductDataContainer>
          <OrderDate>{formatDate(createDate)}</OrderDate>
        </OrderProductData>
        <OrderReceiverData>
          <p>
            <strong>Доставка:</strong>{' '}
            {building === ''
              ? `${town[0]}, ${postOffice}`
              : `${town[0]}, ${building}`}
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
