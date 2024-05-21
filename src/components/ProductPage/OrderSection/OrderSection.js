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
import { addProduct } from '../../../redux/product/thunk';

function OrderSection() {
  const product = useSelector(productForProductPage);
  const dispatch = useDispatch();
  function sendIdProduct() {
    console.log(product._id);

    dispatch(addProduct(product._id));
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
