import styled from 'styled-components';

export const OrderSectionWrapper = styled.article`
  display: flex;
  width: 100%;
  background-color: white;
  border-radius: 12px;
  height: 450px;
`;
export const OrderSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 92%;
  padding-top: 10px;
  margin: 0 auto;
`;
export const ProductName = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 28px;
  align-items: center;
`;
export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-item: center;
  margin: auto 0;
  background-color: #bbeac0;
  padding: 8px;
  border-radius: 50%;
`;
export const ProductCost = styled.section`
  display: flex;
  flex-direction: column;
`;
export const StrikePrice = styled.div`
  display: flex;
  flex-direction: column;

  color: #5e5f5f;
  font-size: 22px;
`;
export const SalePrice = styled.div`
  display: flex;
  flex-direction: column;
  color: #f04438;
  font-size: 32px;
  font-weight: 700;
  margin-top: 4px;
`;
