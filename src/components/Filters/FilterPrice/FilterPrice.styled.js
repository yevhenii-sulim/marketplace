import styled from 'styled-components';
import { theme } from 'utils/theme';

export const CountPrice = styled.div`
  label {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 18px;
    line-height: 1.44;
    @media screen and (max-width: 1439px) {
      margin-bottom: 8px;
      text-align: left;
    }
  }
  input {
    padding: 8px;
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.borderRange};
    font-size: 18px;
    width: 81px;
    border: none;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 8px;
  }
`;
export const PriceSlide = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h3 {
    font-family: Jost;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.45; /* 145.455% */
  }
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
