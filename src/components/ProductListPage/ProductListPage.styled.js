import styled from 'styled-components';
import { theme } from 'utils/theme';

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;
export const ContainerProductPageList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Paginations = styled.div`
  margin-top: auto;
`;
export const ProductsPage = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
  column-gap: 48px;
  height: 100%;
`;
export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: flex-start;
  gap: 34px;
`;
export const Filter = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;
export const PriceSlide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const SliderRange = {
  color: theme.color.bgRange,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    width: 28,
    height: 28,
    backgroundColor: '#fff',
    border: '1px solid black',
    '&::before': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
    },
    '&:hover, &.Mui-focusVisible, &.Mui-active': {
      boxShadow: 'none',
    },
  },
};

export const CountPrice = styled.div`
  display: flex;
  input {
    padding: 8px;
    border-radius: 8px;
    border: 1px solid, ${({ theme }) => theme.color.borderRange};
  }
`;

export const TytleSort = styled.h3`
  font-family: 'Jost';
  font-size: 28px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 auto;
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
export const TytleProducts = styled.h2`
  font-family: 'Jost';
  font-size: 44px;
  font-weight: 700;
  line-height: 1.22;
`;
