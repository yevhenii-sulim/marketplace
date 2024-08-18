import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import DescribeInfo from '../DescribeInfo/DescribeInfo';
import { DescriptionProductWrapper } from './DescriptionContainerProduct.styled';
import Comments from '../Comments/Comments';
import CommentsHeader from '../Comments/CommentsHeader';

function DescriptionContainerProduct() {
  const [showAccordion, setShowAccordion] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth >= 767) {
        setShowAccordion(false);
      } else {
        setShowAccordion(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <DescriptionProductWrapper>
      <Slider />
      <DescribeInfo showAccordion={showAccordion} />
      {showAccordion ? null : (
        <>
          <CommentsHeader />
          <Comments />
        </>
      )}
    </DescriptionProductWrapper>
  );
}

export default DescriptionContainerProduct;
