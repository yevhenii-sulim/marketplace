import React from 'react';
import Slider from '../Slider/Slider';
import DescribeInfo from '../DescribeInfo/DescribeInfo';
import { DescriptionProductWrapper } from './DescriptionContainerProduct.styled';
import Comments from '../Comments/Comments';
import CommentsHeader from '../Comments/CommentsHeader';

function DescriptionContainerProduct({ showAccordion, sizeWindow }) {
  return (
    <DescriptionProductWrapper>
      <Slider />
      <DescribeInfo showAccordion={showAccordion} sizeWindow={sizeWindow} />
      {showAccordion ? null : (
        <>
          <CommentsHeader />
          <Comments sizeWindow={sizeWindow} />
        </>
      )}
    </DescriptionProductWrapper>
  );
}

export default DescriptionContainerProduct;
