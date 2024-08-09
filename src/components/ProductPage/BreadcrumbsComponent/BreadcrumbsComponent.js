import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ContainerForBreadcrumbs, Link } from './BreadcrumbsComponent.styled';
import { productForProductPage } from '../../../redux/productPage/selectors';
import { changeCategory } from '../../../redux/category/slice';

function sendQueryName(product) {
  switch (true) {
    case !!product.subCategory:
      return {
        category: {
          en: product.category.mainCategory.en,
          ua: product.category.mainCategory.ua,
        },
        subCategory: {
          en: product.subCategory.subCategory.en,
          ua: product.subCategory.subCategory.ua,
        },
      };
    default:
      return {
        category: {
          en: product.category.mainCategory.en,
          ua: product.category.mainCategory.ua,
        },
      };
  }
}

function setRouting(product) {
  if (!product) return;
  return product.subCategory;
}

function BreadcrumbsComponent() {
  const dispatch = useDispatch();
  const product = useSelector(productForProductPage);

  useEffect(() => {
    if (!product.category) return;

    dispatch(changeCategory(sendQueryName(product)));
  }, [dispatch, product]);

  return (
    <ContainerForBreadcrumbs>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        <Link key="1" to="/marketplace">
          Головна сторінка
        </Link>
        <Link key="2" to={`/${product?.category.mainCategory.en}`}>
          {product?.category.mainCategory.ua}
        </Link>
        {setRouting(product) && (
          <Link
            key="3"
            to={`/${product.category.mainCategory.en}/${
              product.subCategory ? product.subCategory.subCategory.en : ''
            }`}
          >
            {product.subCategory.subCategory.ua}
          </Link>
        )}
        <Typography key="3" href="/marketplace/headphone/36">
          {product?.title}
        </Typography>
      </Breadcrumbs>
    </ContainerForBreadcrumbs>
  );
}

export default BreadcrumbsComponent;
