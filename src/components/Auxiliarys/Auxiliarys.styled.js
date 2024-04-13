import styled from 'styled-components';
import { NavLink as LinkAux } from 'react-router-dom';

export const NavLink = styled(LinkAux)`
  &.active svg {
    color: ${({ theme }) => theme.color.borderSearch};
  }
  svg {
    color: ${({ theme }) => theme.color.colorButtonText};
    width: 32px;
    height: 32px;
  }
`;

export const AuxiliarysContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;
