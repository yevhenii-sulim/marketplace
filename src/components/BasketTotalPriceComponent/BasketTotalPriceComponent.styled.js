import styled from 'styled-components';

export const TotalPrice = styled.div`
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  .info-price {
    font-size: 18px;
    font-weight: 800;
    line-height: 1.44;
    white-space: nowrap;
    &_discount {
      color: ${({ theme }) => theme.color.colorTextPrice};
    }
  }
`;

export const WrapperBuy = styled.div`
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  @media screen and (min-width: 1440px) {
    padding-top: 32px;
    padding-bottom: 32px;
    grid-area: wrapper-buy;
  }
  .info {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.25;
  }
`;

export const Sum = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;
export const Discount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 65px;
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45; /* 145.455% */
  .total-price {
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.45; /* 145.455% */
  }
`;
