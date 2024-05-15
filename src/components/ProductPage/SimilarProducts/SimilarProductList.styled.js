import styled from 'styled-components';

export const SimilarProductsWrapper = styled.section`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;
export const SimilarProductsHeader = styled.header`
  font-weight: 700;
  font-size: 22px;
  margin-top: 40px;
`;
export const SimilarProductsItem = styled.article`
  width: 19%;
  height: 280px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const SimilarProductsItemIcon = styled.div`
  height: 120px;
  border: 1px black solid;
`;
export const SimilarProductsItemName = styled.span`
  display: block;
`;
export const SimilarProductsItemCost = styled.span`
  display: block;

  font-weight: 800;
  font-size: 22px;
`;
export const SimilarProductsItemButtonBlock = styled.div`
  display: flex;
`;

export const SimilarProductsItemIconWrapper = styled.button`
  display: flex;
  justify-content: center;
  margin: auto 0;
  background-color: #bbeac0;
  padding: 8px;
  border-radius: 50%;
  margin-left: auto;
`;
