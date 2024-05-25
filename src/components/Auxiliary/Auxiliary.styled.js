import styled from 'styled-components';
import { NavLink as LinkAux } from 'react-router-dom';

export const NavLink = styled(LinkAux)`
  font-size: 0;
  position: relative;
  &.active svg {
    color: ${({ theme }) => theme.color.borderSearch};
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
  gap: 36px;
`;
export const TotalProduct = styled.span`
  position: absolute;
  bottom: 100%;
  right: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.color.colorSecondText};
  font-weight: 600;
  line-height: 0.4;
`;
