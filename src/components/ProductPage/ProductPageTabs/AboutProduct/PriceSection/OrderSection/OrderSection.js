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

function OrderSection() {
  return (
    <OrderSectionWrapper>
      <OrderSectionContainer>
        <ProductName>
          Імя продукту може бути довгим
          <IconWrapper>
            <FavoriteBorderIcon />
          </IconWrapper>
        </ProductName>
        <ProductCost>
          <StrikePrice>968₴</StrikePrice>
          <SalePrice>799₴</SalePrice>
        </ProductCost>
        <ButtonBlock />
        <DatePublication />
      </OrderSectionContainer>
    </OrderSectionWrapper>
  );
}

export default OrderSection;
