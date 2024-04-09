import React from 'react';
import OrderSection from './OrderSection/OrderSection';
import { PriceSectionWrapper } from './PriceSection.styled';
import SellerInfo from './SellerInfo/SellerInfo';

function PriceSection() {
  return (
    <PriceSectionWrapper>
      <OrderSection />
      <SellerInfo />
    </PriceSectionWrapper>
  );
}

export default PriceSection;
