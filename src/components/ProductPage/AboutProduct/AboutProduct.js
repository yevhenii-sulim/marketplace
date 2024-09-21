import React from 'react';
import { AboutProductWrapper } from './AboutProduct.styled';
import DescriptionContainerProduct from '../DescriptionContainerProduct/DescriptionContainerProduct';
import PriceSection from '../PriceSection/PriceSection';

function AboutProduct({ showAccordion, sizeWindow }) {
  return (
    <AboutProductWrapper>
      <DescriptionContainerProduct
        showAccordion={showAccordion}
        sizeWindow={sizeWindow}
      />
      <PriceSection />
    </AboutProductWrapper>
  );
}

export default AboutProduct;
