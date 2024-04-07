import React from 'react';
import Slider from './Slider/Slider';
import DescribeInfo from './DescribeInfo/DescribeInfo';
import { DescriptionProductWrapper } from './DescriptionProduct.styled';

function DescriptionProduct() {
  return (
    <DescriptionProductWrapper>
      <Slider />
      <DescribeInfo />
    </DescriptionProductWrapper>
  );
}

export default DescriptionProduct;
