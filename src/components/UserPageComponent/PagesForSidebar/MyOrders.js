import React, { useEffect } from 'react';
import { ContainerOrders, Empty, Link } from './PagesForSidebar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrderProduct } from '../../../redux/product/selector';
import { productForProductPage } from '../../../redux/productPage/selectors';
import { fetchProduct } from '../../../redux/productPage/productPageSlice';
import ShoppingCart from 'SvgComponents/ShoppingСart/ShoppingСart';

export default function MyOrders() {
  const dispatch = useDispatch();
  const idProduct = useSelector(selectOrderProduct);
  const products = useSelector(productForProductPage);

  useEffect(() => {
    if (idProduct.length === 0) return;
    idProduct.forEach(item => dispatch(fetchProduct(item)));
  }, [idProduct, dispatch]);

  console.log(products);

  return (
    <ContainerOrders>
      {idProduct.length === 0 && (
        <Empty>
          <ShoppingCart />
          <p>Зробіть ваше переше замовлення</p>
          <Link to="/">Перейти до товарів</Link>
        </Empty>
      )}
    </ContainerOrders>
  );
}
