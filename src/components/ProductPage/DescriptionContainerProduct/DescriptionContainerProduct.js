import React from 'react';
import Slider from '../Slider/Slider';
import DescribeInfo from '../DescribeInfo/DescribeInfo';
import { DescriptionProductWrapper } from './DescriptionContainerProduct.styled';
import Comments from '../Comments/Comments';
import CommentsHeader from '../Comments/CommentsHeader';

function DescriptionContainerProduct() {
  return (
    <DescriptionProductWrapper>
      <Slider />
      <DescribeInfo />
      <CommentsHeader />
      <Comments />
    </DescriptionProductWrapper>
  );
}

export default DescriptionContainerProduct;
