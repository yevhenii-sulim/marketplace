import { createPortal } from 'react-dom';
import {
  OrderSectionContainer,
  OrderSectionWrapper,
  ProductName,
} from './OrderSection.styled';
import ButtonBlock from './ButtonBlock/ButtonBlock';
import DatePublication from './DatePublication/DatePublication';
import { useDispatch, useSelector } from 'react-redux';
import { productForProductPage } from '../../../redux/productPage/selectors';
import { addProduct } from '../../../redux/basket/slice';
import { selectBasket } from '../../../redux/basket/select';
import BasketModal from 'components/BasketModal/BasketModal';
import { useState } from 'react';
import ProductCostSection from './ProductCost';
import ButtonFavorite from './ButtonFavorite';

const body = document.querySelector('body');
const modalEnter = document.querySelector('#modal');
const widthScroll = window.innerWidth - body.offsetWidth;

function OrderSection() {
  const product = useSelector(productForProductPage);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const basket = useSelector(selectBasket);

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
          <ButtonFavorite productId={product._id} />
        </ProductName>
        <ProductCostSection product={product} />
        <ButtonBlock
          sendIdProduct={sendIdProduct}
          tel={product.producer.numberPhone}
        />
        <DatePublication />
      </OrderSectionContainer>
      {isOpen &&
        createPortal(<BasketModal setIsOpen={setIsOpen} />, modalEnter)}
    </OrderSectionWrapper>
  );
}

export default OrderSection;
