import styled from 'styled-components';

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: flex-start;
  gap: 25px;
`;
export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;
export const ProductsPage = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
  column-gap: 30px;
  height: 100%;
`;
export const TitleSort = styled.h2`
  font-family: 'Jost';
  font-size: 28px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 auto;
  white-space: nowrap;
`;
