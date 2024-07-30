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
  margin: 4px 0;
`;

export const DescribeInfoStateItem = styled.div`
  font-size: 18px;
  display: flex;
  margin: 12px 8px 12px 0;
  align-items: center;
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

export const ColorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-left: 4px;
`;

export const ColorCircle = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  margin-left: 4px;
`;
