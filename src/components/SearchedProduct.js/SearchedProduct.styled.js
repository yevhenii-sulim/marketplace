import styled from 'styled-components';

export const Product = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: flex-start;
  gap: 25px;
`;

export const ProductsPage = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  row-gap: 30px;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  header {
    display: flex;
    justify-content: space-between;
  }
`;
export const TitleSort = styled.h2`
  font-family: 'Jost';
  font-size: 28px;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
`;
