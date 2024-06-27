import React, { useEffect } from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ContainerForBreadcrumbs, Link } from './BreadcrumbsComponent.styled';
import { useDispatch, useSelector } from 'react-redux';
import { productForProductPage } from '../../../redux/productPage/selectors';
import { changeCategory } from '../../../redux/category/slice';

function BreadcrumbsComponent() {
  const dispatch = useDispatch();
  const product = useSelector(productForProductPage);
  console.log(product);

  useEffect(() => {
    if (!product.category) return;
    dispatch(
      changeCategory({
        category: {
          en: product.category.mainCategory.en,
          ua: product.category.mainCategory.ua,
        },
        subCategory: {
          en: product.subCategory.subCategory.en,
          ua: product.subCategory.subCategory.ua,
        },
      })
    );
  }, [
    dispatch,
    product.category,
    product.subCategory.subCategory.en,
    product.subCategory.subCategory.ua,
  ]);

  const breadcrumbs = [
    <Link key="1" to="/marketplace">
      Головна сторінка
    </Link>,
    <Link key="2" to={`/${product?.category.mainCategory.en}`}>
      {product?.category.mainCategory.ua}
    </Link>,
    <Link
      key="2"
      to={`/${product?.category.mainCategory.en}/${product?.subCategory.subCategory.en}`}
    >
      {product?.subCategory.subCategory.ua}
    </Link>,
    <Typography key="3" href="/marketplace/headphone/36">
      {product?.title}
    </Typography>,
  ];
  return (
    <ContainerForBreadcrumbs>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        {breadcrumbs}
      </Breadcrumbs>
    </ContainerForBreadcrumbs>
  );
}

export default BreadcrumbsComponent;
