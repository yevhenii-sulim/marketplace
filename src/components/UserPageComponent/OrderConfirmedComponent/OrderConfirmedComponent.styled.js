import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 59px 0px;
`;

export const Title = styled.h1`
  font: 700 32px 'Jost';
  line-height: 48px;
  padding: 0px 16px;
`;

export const FullOrderInfo = styled.div`
  background-color: #ffffff;
  padding: 32px 24px 16px 24px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const OrderProductContainer = styled.li`
  display: flex;
  gap: 50px;
`;

export const OrderProductData = styled.div`
  width: 50%;
`;

export const OrderReceiverData = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const OrderProducts = styled.ul`
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const YellowTitle = styled.p`
  font: 800 18px 'Nunito Sans';
  line-height: 26px;
  color: ${({ theme }) => theme.color.colorTextWaitedOrder};
`;

export const OrderProductDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 112px;
  gap: 20px;
`;

export const OrderProductImageAndTitle = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 16px;

  font: 400 16px 'Nunito Sans';
  line-height: 20px;

  img {
    width: 88px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const OrderProductPrice = styled.span`
  width: 20%;
  font: 700 22px 'Jost';
`;

export const OrderDate = styled.p`
  font: 400 14px 'Nunito Sans';
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #d0d0d0;
  opacity: 0.5;
`;

export const OrderConfirmedButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 20px;
`;

export const MyOrdersButton = styled.button`
  width: 264px;
  height: 48px;
  border-radius: 8px;
  background-color: #43c550;
  font: 700 22px 'Jost';
  color: #ffffff;
  line-height: 32px;
  transition: 0.15s box-shadow;

  &:hover {
    box-shadow: 0.3px 0.3px 5px 0px #43c550;
  }
`;

export const ContinueShoppingButton = styled.button`
  width: 264px;
  height: 48px;
  border-radius: 8px;
  background-color: #ffffff;
  border: 1px solid #43c550;
  font: 700 22px 'Jost';
  color: #43c550;
  line-height: 32px;
  transition: 0.15s background-color, color;

  &:hover {
    background-color: #7fd888;
    color: #fff;
  }
`;
