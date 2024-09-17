import styled from 'styled-components';

export const Product = styled.ul`
  display: flex;
  flex-wrap: wrap;
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
  padding-bottom: 30px;
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @media (min-width: ${({ theme }) => theme.breakPoints.mx}) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
export const BoxSvg = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 2;
`;
export const TitleSort = styled.h2`
  font-family: Jost;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    font-size: 32px;
    line-height: 1.5;
    letter-spacing: -0.32px;
    padding: 0px 20px;
  }
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
