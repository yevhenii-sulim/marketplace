import styled from 'styled-components';
import { Link as Location } from 'react-router-dom';

export const WrapperPoster = styled.ul`
  gap: 32px;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.44;
  position: relative;
`;
export const Operation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const WrapperBuy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  &.story {
    display: flex;
    align-items: center;
  }
  .info-price {
    font-size: 18px;
    font-weight: 800;
    line-height: 1.44; /* 144.444% */
    &_discount {
      color: ${({ theme }) => theme.color.colorTextPrice};
    }
  }
  .info {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.25;
  }
`;
export const OpenOperation = styled.button`
  margin-left: auto;
  background-color: transparent;
`;
export const OperationList = styled.div`
  display: none;
  &.isOpen {
    position: absolute;
    top: 20px;
    z-index: 2;
    background-color: ${({ theme }) => theme.color.bgProduct};
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 11px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.44;
  }
`;
export const ActiveProduct = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
`;
export const FeedBack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
`;
export const FeedBackSign = styled.p`
  position: relative;
  display: flex;
  gap: 8px;
  svg {
    width: 24px;
    height: 24px;
  }
  .message {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.bgNumberBasket};
    font-family: 'Nunito Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5; /* 150% */
    color: ${({ theme }) => theme.color.colorSecondText};
    top: -6px;
    right: -6px;
  }
`;
export const ListStoryOrder = styled.li`
  position: relative;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  padding: 32px;
  display: grid;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    grid-template-columns: 2fr 300px;
  }
`;
export const Link = styled(Location)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.bgButton};
  color: ${({ theme }) => theme.color.colorButtonText};
  font-family: 'Jost';
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  border-radius: 8px;
  padding: 4px 10px;
`;
export const ToCreatePostLink = styled.div`
  position: absolute;
  top: -68px;
  right: 0;
`;
export const Filter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 24px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
