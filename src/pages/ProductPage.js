import React from 'react';
import WrapperContentPages from 'components/WrapperContentPages/WrapperContentPages';
import { ContainerProductPage } from '../components/ProductPage/BreadcrumbsComponent/BreadcrumbsComponent.styled';
import ProductPageTabs from '../components/ProductPage/ProductPageTabs/ProductPageTabs';
import BreadcrumbsComponent from 'components/ProductPage/BreadcrumbsComponent/BreadcrumbsComponent';

function ProductPage() {
  return (
    <WrapperContentPages>
      <ContainerProductPage>
        <BreadcrumbsComponent />
        <ProductPageTabs />
      </ContainerProductPage>
    </WrapperContentPages>
  );
}

export default ProductPage;
