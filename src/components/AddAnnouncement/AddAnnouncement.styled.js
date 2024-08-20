import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const AddProduct = styled(Link)`
  font-family: 'Jost';
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  outline: none;
  color: ${({ theme }) => theme.color.bgHeader};
  &:hover {
    color: ${({ theme }) => theme.color.colorButtonText};
  }
`;
export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 8px;
  border: solid 1px ${({ theme }) => theme.color.bgHeader};
  height: 48px;
  padding: 6px 16px;
  &:hover {
    background-color: ${({ theme }) => theme.color.bgButtonHover};
    box-shadow: inset 0 0 0px 4px ${({ theme }) => theme.color.colorButtonText};
  }
  &:active {
    box-shadow: inset 0 0 5px 0px ${({ theme }) => theme.color.bgHeader};
  }
  @media screen and (min-width: 1440px) {
    width: 270px;
    margin-top: 0px;
    margin-left: 0;
  }
`;
