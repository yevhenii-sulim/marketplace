import React from 'react';
import { AboutProductWrapper } from './AboutProduct.styled';
import DescriptionContainerProduct from '../DescriptionContainerProduct/DescriptionContainerProduct';
import PriceSection from '../PriceSection/PriceSection';

function AboutProduct({ showAccordion }) {
  return (
    <AboutProductWrapper>
      <DescriptionContainerProduct showAccordion={showAccordion} />
      <PriceSection />
    </AboutProductWrapper>
  );
}

export default AboutProduct;
