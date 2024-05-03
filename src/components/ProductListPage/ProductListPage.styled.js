import styled from 'styled-components';

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;
export const ContainerProductPageList = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Paginations = styled.div`
  margin-top: auto;
`;
export const ProductsPage = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
`;
export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;
  gap: 34px;
`;
export const Filter = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 19px;
  h3 {
    font-family: Jost;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.5;
  }
`;
export const SortProduct = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 17px;
  select {
    position: relative;
    padding: 6px 8px;
    outline: none;
    border-radius: 6px;
    font-family: 'Nunito Sans';
    font-size: 18px;
    line-height: 1.44;
  }
`;
export const SortText = styled.p`
  font-size: 18px;
  line-height: 1.44;
`;
