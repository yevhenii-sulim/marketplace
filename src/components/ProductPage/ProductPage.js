import React from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WrapperContentPages from 'components/WrapperContentPages/WrapperContentPages';
import { Link } from 'react-router-dom';
import {
  ContainerForBreadcrumbs,
  ContainerProductPage,
} from './ProductPage.styled';
import ProductPageTabs from './ProductPageTabs/ProductPageTabs';

function ProductPage() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Головна сторінка
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Електроніка
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Навушники
    </Link>,
    <Typography key="3" color="text.primary">
      Модель
    </Typography>,
  ];

  return (
    <WrapperContentPages>
      <ContainerProductPage>
        <ContainerForBreadcrumbs>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            {breadcrumbs}
          </Breadcrumbs>
        </ContainerForBreadcrumbs>
        <ProductPageTabs />
      </ContainerProductPage>
    </WrapperContentPages>
  );
}

export default ProductPage;
