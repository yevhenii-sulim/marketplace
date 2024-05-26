import React from 'react';
import {
  IconWrapper,
  OrderSectionContainer,
  OrderSectionWrapper,
  ProductCost,
  ProductName,
  SalePrice,
  StrikePrice,
} from './OrderSection.styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ButtonBlock from './ButtonBlock/ButtonBlock';
import DatePublication from './DatePublication/DatePublication';
import { useDispatch, useSelector } from 'react-redux';
import { productForProductPage } from '../../../redux/productPage/selectors';
import { addProduct } from '../../../redux/basket/slice';
import { nanoid } from 'nanoid';

function OrderSection() {
  const product = useSelector(productForProductPage);
  const dispatch = useDispatch();
  function sendIdProduct() {
    const productAdded = {
      id: nanoid(),
      title: product.title,
      price: product.price,
      img: product.img[0],
      count: 1,
    };
    dispatch(addProduct(productAdded));
  }
  return (
    <OrderSectionWrapper>
      <OrderSectionContainer>
        <ProductName>
          {product.title}
          <IconWrapper>
            <FavoriteBorderIcon />
          </IconWrapper>
        </ProductName>
        <ProductCost>
          <StrikePrice>
            <span
              style={{ textDecoration: product.discount ? 'line-through' : '' }}
            >
              {product.price}
            </span>
          </StrikePrice>
          {product.discount ? (
            <SalePrice>{product.discountPrice}</SalePrice>
          ) : (
            ''
          )}
        </ProductCost>
        <ButtonBlock sendIdProduct={sendIdProduct} />
        <DatePublication />
      </OrderSectionContainer>
    </OrderSectionWrapper>
  );
}

export default OrderSection;