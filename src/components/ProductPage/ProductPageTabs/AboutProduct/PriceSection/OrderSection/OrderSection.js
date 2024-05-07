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
import { useProductPageContext } from 'components/ProductPage/context/ProductPageProvider';

function OrderSection() {
  const context = useProductPageContext();
  return (
    <OrderSectionWrapper>
      <OrderSectionContainer>
        <ProductName>
          {context.product.title}
          <IconWrapper>
            <FavoriteBorderIcon />
          </IconWrapper>
        </ProductName>
        <ProductCost>
          <StrikePrice> {context.product.price}</StrikePrice>
          <SalePrice>{context.product.discountItem}</SalePrice>
        </ProductCost>
        <ButtonBlock />
        <DatePublication />
      </OrderSectionContainer>
    </OrderSectionWrapper>
  );
}

export default OrderSection;
