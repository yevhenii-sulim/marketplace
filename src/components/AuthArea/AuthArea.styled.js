import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Tytle = styled.h2`
  font-family: Jost;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
`;
export const LinkReg = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  color: ${({ theme }) => theme.color.colorTextRegistr};
`;
export const LinkGoIn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid ${({ theme }) => theme.color.borderRegistr};
  border-radius: 6px;
  padding: 6px 43px;
  text-decoration: none;
  width: 100%;
  color: inherit;
  span {
    font-weight: 700;
  }
`;
