import { createPortal } from 'react-dom';
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
import BasketModal from 'components/BasketModal/BasketModal';
import { useState } from 'react';
const body = document.querySelector('body');
const modalEnter = document.querySelector('#modal');
const widthScroll = window.innerWidth - body.offsetWidth;

function OrderSection() {
  const product = useSelector(productForProductPage);
  const [isOpen, setIsOpen] = useState(false);

  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();

  function sendIdProduct() {
    setIsOpen(true);
    body.style.paddingright = `${widthScroll}px`;
    for (const item of basket) {
      if (item.id === product._id) return;
    }
    const productAdded = product.subCategory
      ? {
          id: product._id,
          title: product.title,
          price: product.price,
          img: product.img[0],
          discount: product.discount,
          discountPrice: product.discountPrice,
          count: 1,
          category: product.category.mainCategory,
          subCategory: product.subCategory.subCategory,
        }
      : {
          id: product._id,
          title: product.title,
          price: product.price,
          img: product.img[0],
          discount: product.discount,
          discountPrice: product.discountPrice,
          count: 1,
          category: product.category.mainCategory,
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
              {product.price} &#8372;
            </span>
          </StrikePrice>
          {product.discount ? (
            <SalePrice>{product.discountPrice} &#8372;</SalePrice>
          ) : (
            ''
          )}
        </ProductCost>
        <ButtonBlock sendIdProduct={sendIdProduct} />
        <DatePublication />
      </OrderSectionContainer>
      {isOpen &&
        createPortal(<BasketModal setIsOpen={setIsOpen} />, modalEnter)}
    </OrderSectionWrapper>
  );
}

export default OrderSection;
