import React from 'react';
import {
  ColorCircle,
  ColorWrapper,
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
import { ParameterWrapper } from '../Comments/CommentItem/CommentItem.styled';

function DescribeInfo() {
  const { parameters, describe } = useSelector(
    state => state.productPage.product
  );

  return (
    <DescribeInfoWrapper>
      <DescribeInfoContainer>
        <DescribeInfoHeader>Опис</DescribeInfoHeader>
        <DescribeInfoState>
          {parameters.state && parameters.state !== '' ? (
            <DescribeInfoStateItem>
              Стан:
              <ParameterWrapper>{parameters.state}</ParameterWrapper>
            </DescribeInfoStateItem>
          ) : null}
          {parameters.size && parameters.size.length > 0 ? (
            <DescribeInfoStateItem>
              Розмір:
              <div
                style={{
                  display: 'flex',
                  height: ' 100%',
                  fontWeight: 400,
                  marginLeft: '5px',
                  fontSize: '14px',
                  marginTop: '2px',
                  alignItems: 'center',
                }}
              >
                {parameters.size.map((el, i) => {
                  if (i === parameters.size.length - 1)
                    return el.replace('EU ', '');
                  if (i === 0) return el + ', ';

                  return el.replace('EU ', '') + ', ';
                })}
              </div>
            </DescribeInfoStateItem>
          ) : null}
          {parameters.brand &&
          parameters.brand !== '' &&
          parameters.brand !== '-' ? (
            <DescribeInfoStateItem>
              Бренд:
              <ParameterWrapper>{parameters.brand}</ParameterWrapper>
            </DescribeInfoStateItem>
          ) : null}
          {parameters.color && parameters.color.length > 0 ? (
            <DescribeInfoStateItem>
              Колір:
              <ParameterWrapper>
                {parameters.color.map(el => (
                  <ColorWrapper key={el._id}>
                    {console.log(el.color)}
                    <span>{el.colorName}</span>
                    <ColorCircle $color={el.color} />
                  </ColorWrapper>
                ))}
              </ParameterWrapper>
            </DescribeInfoStateItem>
          ) : null}
        </DescribeInfoState>
        <DescribeInfoParagraph>{describe}</DescribeInfoParagraph>
        <DescribeInfoComplaintBlock>
          <DescribeInfoComplaint>Поскаржитися</DescribeInfoComplaint>
        </DescribeInfoComplaintBlock>
      </DescribeInfoContainer>
    </DescribeInfoWrapper>
  );
}

export default DescribeInfo;
