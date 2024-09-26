import styled from 'styled-components';

export const OrderProductContainer = styled.li`
  display: grid;
  justify-items: center;
  gap: 50px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    grid-template-columns: 1fr 2fr;
  }
`;
export const OrderProductData = styled.div``;
export const YellowTitle = styled.p`
  font: 800 18px 'Nunito Sans';
  white-space: nowrap;
  line-height: 26px;
  color: ${({ $state, theme }) => {
    switch ($state) {
      case 'Виконано':
        return theme.color.colorTextWorkedOrder;
      case 'Очікується відправки':
        return theme.color.colorTextWaitedOrder;
      case 'Скасовано':
        return theme.color.colorTextCancelledOrder;
      default:
        return;
    }
  }};
`;

export const OrderProductDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 112px;
  gap: 20px;
`;
export const OrderProductImageAndTitle = styled.div`
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

export const OrderReceiverData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;
export const OrderDate = styled.p`
  font: 400 14px 'Nunito Sans';
  white-space: nowrap;
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #d0d0d0;
  opacity: 0.5;
`;
export const OrderProductPrice = styled.span`
  white-space: nowrap;
  width: 20%;
  font: 700 22px 'Jost';
`;
export const Operation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const OpenOperation = styled.button`
  margin-left: auto;
  background-color: transparent;
  &.isOpen {
    & ~ .story {
      display: flex;
      position: absolute;
      flex-direction: column;
      gap: 8px;
      background-color: ${({ theme }) => theme.color.bgProduct};
      top: 100%;
      right: 0;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.44;
      z-index: 2;
    }
  }
`;
export const OperationList = styled.div`
  display: none;
`;
export const ActiveProduct = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.bgButton};
  }
`;
