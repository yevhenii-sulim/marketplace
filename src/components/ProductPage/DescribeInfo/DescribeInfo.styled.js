import styled from 'styled-components';

export const DescribeInfoWrapper = styled.section`
  background-color: white;
  border-radius: 12px;
  margin-top: 16px;
  @media (max-width: 767px) {
    margin-top: 0;
  }
`;
export const DescribeInfoContainer = styled.article`
  width: 93%;
  display: flex;
  flex-direction: column;
  margin: 16px auto;
  @media (max-width: 767px) {
    width: 95%;
  }
`;

export const DescribeInfoHeader = styled.span`
  display: block;
  font-size: 22px;
  font-weight: 700;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const DescribeInfoState = styled.span`
  @media (max-width: 1024px) {
    margin: 0;
  }
  @media (max-width: 767px) {
    background-color: white;
  }
`;

export const DescribeInfoStateWrapper = styled.div`
  display: flex;

  font-weight: 700;
  margin: 4px 0;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
    background-color: white;
    padding: 0 7.5%;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const DescribeInfoStateItem = styled.div`
  font-size: 18px;
  display: flex;

  margin: 12px 8px 12px 0;
  align-items: center;
`;
export const DescribeInfoParagraph = styled.p`
  font-size: 18px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const DescribeInfoComplaintBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 0;
  cursor: pointer;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const DescribeInfoComplaint = styled.a`
  display: none;
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
  box-shadow: ${({ $color }) => {
    if ($color.toLowerCase() === '#ffffff') return `inset 0 0 0 1px #43C550`;
  }};
  background: ${({ $color }) => {
    if (typeof $color === 'string') return `${$color}`;
    return `radial-gradient(${$color[0]}, ${$color[1]})`;
  }};
  margin-left: 4px;
`;

export const WrapperNameAndValue = styled.div``;
export const WrapperAllValue = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
