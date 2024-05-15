import React from 'react';
import { AboutProductWrapper } from './AboutProduct.styled';
import DescriptionContainerProduct from '../DescriptionContainerProduct/DescriptionContainerProduct';
import PriceSection from '../PriceSection/PriceSection';

function AboutProduct() {
  return (
    <AboutProductWrapper>
      <DescriptionContainerProduct />
      <PriceSection />
    </AboutProductWrapper>
  );
}

export default AboutProduct;
