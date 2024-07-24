import styled from 'styled-components';

export const Product = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 25px;
`;

export const ProductsPage = styled.div`
  display: grid;
  grid-template-rows: 52px auto;
  grid-template-columns: 1fr;
  align-items: center;
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
