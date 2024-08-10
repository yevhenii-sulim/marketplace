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
export const BoxSvg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
`;
export const TitleSort = styled.h2`
  font-family: 'Jost';
  font-size: 28px;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
`;
export const TitleSection = styled.h1`
  text-align: center;
  left: 40px;
  top: 24px;
  font-family: Jost;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5; /* 150% */
  letter-spacing: -0.32px;
`;
export const EmptySearch = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 64px);
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  padding: 48px 24px;
  ul {
    text-align: center;
  }
  li {
    list-style: inside;
  }
`;
