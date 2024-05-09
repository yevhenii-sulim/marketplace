import styled from 'styled-components';

export const DescribeInfoWrapper = styled.section`
  background-color: white;
  border-radius: 12px;
  margin-top: 16px;
`;
export const DescribeInfoContainer = styled.article`
  width: 93%;
  display: flex;
  flex-direction: column;
  margin: 16px auto;
`;

export const DescribeInfoHeader = styled.span`
  display: block;
  font-size: 22px;
  font-weight: 700;
`;
export const DescribeInfoState = styled.span`
  display: flex;
  font-size: 22px;
  font-weight: 700;
  margin: 16px 0;
`;

export const DescribeInfoStateItem = styled.div`
  display: flex;
  margin-right: 16px;
`;
export const DescribeInfoParagraph = styled.p``;
export const DescribeInfoComplaintBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 0;
  cursor: pointer;
`;

export const DescribeInfoComplaint = styled.a`
  color: #f04438;
`;
