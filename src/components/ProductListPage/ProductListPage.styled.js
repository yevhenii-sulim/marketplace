import styled from 'styled-components';

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 19px;
  margin: auto;
  width: 100%;
  height: 100%;
`;
export const ContainerProductPageList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Pagination = styled.div`
  margin-top: auto;
`;
export const ProductsPage = styled.div`
  display: grid;
  grid-template-columns: auto;
  @media screen and (min-width: 1440px) {
    grid-template-columns: 2fr 7fr;
  }
  column-gap: 30px;
  height: 100%;
`;
export const Product = styled.div`
  display: grid;
  justify-content: center;
  @media screen and (max-width: 379px) {
    grid-template-columns: auto;
  }
  @media screen and (min-width: 380px) {
    grid-template-columns: repeat(2, auto);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, auto);
  }
  gap: 25px;
`;

export const FiltersList = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const TitleSort = styled.h2`
  font-family: 'Jost';
  font-size: 28px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 auto;
  white-space: nowrap;
`;
export const SortProduct = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 17px;
  .select {
    position: relative;
  }
`;

export const SelectSort = styled.select`
  padding: 6px 8px;
  outline: none;
  border-radius: 6px;
  font-family: 'Nunito Sans';
  font-size: 18px;
  line-height: 1.44;
  padding-right: 25px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;
export const SortText = styled.p`
  font-size: 18px;
  line-height: 1.44;
`;
export const ButtonExpand = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
  background-color: transparent;
  transform: translateY(-50%);
  font-size: 0;
`;
export const Navigation = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;
`;
export const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;
export const ListPath = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  &:last-child {
    font-weight: 700;
  }
`;
export const TitleProducts = styled.h1`
  font-size: 24px;
  font-family: 'Jost';
  font-weight: 700;
  line-height: 1.22;
  @media screen and(min-width: 768px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
  }
`;
