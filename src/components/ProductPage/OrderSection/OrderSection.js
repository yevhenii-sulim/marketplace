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
import { useSelector } from 'react-redux';
import { productForProductPage } from '../../../redux/productPage/selectors';

function OrderSection() {
  const product = useSelector(productForProductPage);
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
        <ButtonBlock />
        <DatePublication />
      </OrderSectionContainer>
    </OrderSectionWrapper>
  );
}

export default OrderSection;
