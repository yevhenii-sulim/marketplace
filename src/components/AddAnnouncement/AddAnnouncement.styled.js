import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const AddProduct = styled(Link)`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 8px;
  height: 48px;
  padding: 6px 16px;
  font-family: 'Jost';
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  outline: none;
  color: ${({ theme }) => theme.color.bgHeader};
  &:hover {
    color: ${({ theme }) => theme.color.bgCommon};
    background-color: ${({ theme }) => theme.color.bgButtonHover};
    box-shadow: inset 0 0 0px 4px ${({ theme }) => theme.color.bgCommon};
  }
  &:active {
    box-shadow: inset 0 0 5px 0px ${({ theme }) => theme.color.bgHeader};
  }
`;
