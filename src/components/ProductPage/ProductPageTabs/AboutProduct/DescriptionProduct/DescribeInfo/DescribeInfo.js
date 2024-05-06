import React from 'react';
import {
  DescribeInfoComplaint,
  DescribeInfoComplaintBlock,
  DescribeInfoContainer,
  DescribeInfoHeader,
  DescribeInfoParagraph,
  DescribeInfoState,
  DescribeInfoStateItem,
  DescribeInfoWrapper,
} from './DescribeInfo.styled';
import {
  defaultProduct,
  useProductPageContext,
} from 'components/ProductPage/context/ProductPageProvider';

function DescribeInfo() {
  const context = useProductPageContext();
  return (
    <DescribeInfoWrapper>
      <DescribeInfoContainer>
        <DescribeInfoHeader>Опис</DescribeInfoHeader>
        <DescribeInfoState>
          <DescribeInfoStateItem>
            Стан:{' '}
            <span style={{ fontWeight: 400 }}>
              {context.state || defaultProduct.state}
            </span>
          </DescribeInfoStateItem>
          <DescribeInfoStateItem>
            Розмір:{' '}
            <span style={{ fontWeight: 400 }}>
              {context.size || defaultProduct.size}
            </span>
          </DescribeInfoStateItem>
          <DescribeInfoStateItem>
            Стан:{' '}
            <span style={{ fontWeight: 400 }}>
              {context.state || defaultProduct.state}
            </span>
          </DescribeInfoStateItem>
        </DescribeInfoState>
        <DescribeInfoParagraph>
          {context.describe || defaultProduct.describe}
        </DescribeInfoParagraph>
        <DescribeInfoComplaintBlock>
          <DescribeInfoComplaint>Поскаржитися</DescribeInfoComplaint>
        </DescribeInfoComplaintBlock>
      </DescribeInfoContainer>
    </DescribeInfoWrapper>
  );
}

export default DescribeInfo;
