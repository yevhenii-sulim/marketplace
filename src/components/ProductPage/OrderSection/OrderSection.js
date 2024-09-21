import { createPortal } from 'react-dom';
import {
  IconWrapper,
  OrderSectionContainer,
  OrderSectionWrapper,
  ProductName,
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
import ProductCostSection from './ProductCost';
import {
  addFavoriteProduct,
  removeFavoriteProduct,
} from '../../../redux/product/thunk';
import { selectMyUser } from '../../../redux/auth/selector';

const body = document.querySelector('body');
const modalEnter = document.querySelector('#modal');
const widthScroll = window.innerWidth - body.offsetWidth;

function OrderSection() {
  const product = useSelector(productForProductPage);
  const user = useSelector(selectMyUser);
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

  const addFavorite = productId => {
    if (!user) return;
    if (user.favorites.some(el => el._id === product._id)) {
      dispatch(removeFavoriteProduct(productId));
    } else {
      dispatch(addFavoriteProduct(productId));
    }
  };
  return (
    <OrderSectionWrapper>
      <OrderSectionContainer>
        <ProductName>
          {product.title}
          <IconWrapper
            onClick={() => addFavorite(product._id)}
            $favorite={
              user?.favorites
                ? user.favorites.some(el => el._id === product._id)
                : false
            }
          >
            <FavoriteBorderIcon />
          </IconWrapper>
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
