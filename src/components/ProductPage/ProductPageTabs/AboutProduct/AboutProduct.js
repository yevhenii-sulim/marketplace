import React from 'react';
import { AboutProductWrapper } from './AboutProduct.styled';
import DescriptionProduct from './DescriptionProduct/DescriptionProduct';
import PriceSection from './PriceSection/PriceSection';

function AboutProduct() {
  return (
    <AboutProductWrapper>
      <DescriptionProduct />
      <PriceSection />
    </AboutProductWrapper>
  );
}

export default AboutProduct;
