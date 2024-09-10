import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const AddProduct = styled(Link)`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: block;
    font-family: 'Jost';
    font-size: 22px;
    font-weight: 700;
    line-height: 1.45;
    outline: none;
    color: ${({ theme }) => theme.color.bgHeader};
    &:hover {
      color: ${({ theme }) => theme.color.colorButtonText};
    }
  }
`;
export const AddProductResponse = styled(Link)`
  outline: none;
  svg {
    color: ${({ theme }) => theme.color.bgProduct};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: none;
  }
`;
export const Container = styled.div`
  font-size: 0;
  border: solid 3px ${({ theme }) => theme.color.bgProduct};
  border-radius: 50%;
  margin-left: 12px;
  &:active {
    box-shadow: inset 0 0 5px 0px ${({ theme }) => theme.color.bgHeader};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    width: 270px;
    margin-top: 0px;
    margin-left: 0px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.bgProduct};
    border: solid 1px ${({ theme }) => theme.color.bgHeader};
    height: 48px;
    padding: 6px 16px;
    &:hover {
      background-color: ${({ theme }) => theme.color.bgButtonHover};
      box-shadow: inset 0 0 0px 4px
        ${({ theme }) => theme.color.colorButtonText};
    }
  }
`;
