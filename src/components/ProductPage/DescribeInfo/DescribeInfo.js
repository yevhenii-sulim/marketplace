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
import { useSelector } from 'react-redux';

function DescribeInfo() {
  const product = useSelector(state => state.productPage.product);

  return (
    <DescribeInfoWrapper>
      <DescribeInfoContainer>
        <DescribeInfoHeader>Опис</DescribeInfoHeader>
        <DescribeInfoState>
          <DescribeInfoStateItem>
            Стан:{' '}
            <span style={{ fontWeight: 400, marginLeft: '5px' }}>
              {product.parameters.state}
            </span>
          </DescribeInfoStateItem>
          <DescribeInfoStateItem>
            Розмір:{' '}
            <span style={{ fontWeight: 400, marginLeft: '5px' }}>
              {product.parameters.size}
            </span>
          </DescribeInfoStateItem>
          <DescribeInfoStateItem>
            Стан:{' '}
            <span style={{ fontWeight: 400, marginLeft: '5px' }}>
              {product.parameters.state}
            </span>
          </DescribeInfoStateItem>
        </DescribeInfoState>
        <DescribeInfoParagraph>{product.describe}</DescribeInfoParagraph>
        <DescribeInfoComplaintBlock>
          <DescribeInfoComplaint>Поскаржитися</DescribeInfoComplaint>
        </DescribeInfoComplaintBlock>
      </DescribeInfoContainer>
    </DescribeInfoWrapper>
  );
}

export default DescribeInfo;
