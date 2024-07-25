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
import { selectBasket } from '../../../redux/basket/select';

function OrderSection() {
  const product = useSelector(productForProductPage);
  const basket = useSelector(selectBasket);

  const dispatch = useDispatch();
  function sendIdProduct() {
    for (const item of basket) {
      if (item.id === product._id) return;
    }
    const productAdded = {
      id: product._id,
      title: product.title,
      price: product.price,
      img: product.img[0],
      discount: product.discount,
      discountPrice: product.discountPrice,
      count: 1,
      category: product.category.mainCategory,
      subCategory: product.subCategory.subCategory,
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
              {product.price} грн
            </span>
          </StrikePrice>
          {product.discount ? (
            <SalePrice>{product.discountPrice} грн</SalePrice>
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
