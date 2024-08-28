import styled from 'styled-components';

export const OrderSectionWrapper = styled.article`
  display: flex;
  width: 100%;
  background-color: white;
  border-radius: 12px;
  height: 450px;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const OrderSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 10px;
  margin: 0 auto;
`;
export const ProductName = styled.p`
  display: flex;
  justify-content: space-between;
  font-family: Jost;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
  align-items: center;
  @media (max-width: 767px) {
    background-color: white;
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    padding-top: 16px;
    justify-content: center;
  }
`;
export const ProductNameWrapper = styled.div`
  width: 85%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  background-color: #bbeac0;
  padding: 8px;
  border-radius: 50%;
`;
export const ProductCost = styled.section`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    padding: 8px 0 25px 0;
    background-color: white;
  }
`;
export const StrikePrice = styled.div`
  display: flex;
  flex-direction: column;

  color: #5e5f5f;
  font-size: 22px;
  @media (max-width: 767px) {
    width: 85%;
    margin: 0 auto;
  }
`;
export const SalePrice = styled.div`
  display: flex;
  flex-direction: column;
  color: #f04438;
  font-size: 32px;
  font-weight: 700;
  margin-top: 4px;

  @media (max-width: 767px) {
    width: 85%;
    margin: 0 auto;
  }
`;
