import styled from 'styled-components';
import { NavLink as LinkAux } from 'react-router-dom';

export const NavLink = styled(LinkAux)`
  font-size: 0;
  position: relative;
  &.active:before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.colorButtonText};
  }
  svg {
    color: ${({ theme }) => theme.color.colorButtonText};
    width: 32px;
    height: 32px;
  }
`;

export const AuxiliaryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const TotalProduct = styled.span`
  position: absolute;
  background-color: ${({ theme }) => theme.color.bgNumberBasket};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  bottom: 65%;
  right: -5px;
  padding: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.color.colorSecondText};
  font-weight: 600;
  line-height: 0.4;
`;
