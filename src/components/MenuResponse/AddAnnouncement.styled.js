import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  font-size: 0;
`;
export const AddProduct = styled(Link)`
  display: block;
  font-family: 'Jost';
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  outline: none;
  border-radius: 8px;
  padding: 12px 32px;
  color: ${({ theme }) => theme.color.bgHeader};
  border: solid 2px ${({ theme }) => theme.color.bgHeader};
`;
