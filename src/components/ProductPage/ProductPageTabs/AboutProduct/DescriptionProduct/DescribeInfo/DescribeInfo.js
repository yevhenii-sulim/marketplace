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
import { useProductPageContext } from 'components/ProductPage/context/ProductPageProvider';

function DescribeInfo() {
  const context = useProductPageContext();
  return (
    <DescribeInfoWrapper>
      <DescribeInfoContainer>
        <DescribeInfoHeader>Опис</DescribeInfoHeader>
        <DescribeInfoState>
          <DescribeInfoStateItem>
            Стан:{' '}
            <span style={{ fontWeight: 400 }}>{context.product.state}</span>
          </DescribeInfoStateItem>
          <DescribeInfoStateItem>
            Розмір:{' '}
            <span style={{ fontWeight: 400 }}>{context.product.size}</span>
          </DescribeInfoStateItem>
          <DescribeInfoStateItem>
            Стан:{' '}
            <span style={{ fontWeight: 400 }}>{context.product.state}</span>
          </DescribeInfoStateItem>
        </DescribeInfoState>
        <DescribeInfoParagraph>
          {context.product.describe}
        </DescribeInfoParagraph>
        <DescribeInfoComplaintBlock>
          <DescribeInfoComplaint>Поскаржитися</DescribeInfoComplaint>
        </DescribeInfoComplaintBlock>
      </DescribeInfoContainer>
    </DescribeInfoWrapper>
  );
}

export default DescribeInfo;
