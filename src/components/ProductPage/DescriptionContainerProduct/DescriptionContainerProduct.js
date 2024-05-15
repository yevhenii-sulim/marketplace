import React from 'react';
import Slider from '../Slider/Slider';
import DescribeInfo from '../DescribeInfo/DescribeInfo';
import {
  DescriptionProductHeaderComments,
  DescriptionProductWrapper,
} from './DescriptionContainerProduct.styled';
import Comments from '../Comments/Comments';

function DescriptionContainerProduct() {
  return (
    <DescriptionProductWrapper>
      <Slider />
      <DescribeInfo />
      <DescriptionProductHeaderComments>
        Коментарі до оголошення
      </DescriptionProductHeaderComments>
      <Comments />
    </DescriptionProductWrapper>
  );
}

export default DescriptionContainerProduct;
