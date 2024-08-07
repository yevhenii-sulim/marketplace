import styled from 'styled-components';
import { theme } from 'utils/theme';
import { Form as FormContainer } from 'formik';

export const List = styled.li`
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  padding: 32px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const Form = styled(FormContainer)`
  display: grid;
  grid-template-columns: 2fr auto;
  gap: 32px;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.44;
  & .visibility-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
`;

export const WrapperOrder = styled.div`
  display: grid;
  grid-template-columns: 2fr 323px;
  gap: 32px;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.44;
  & .visibility-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
`;

export const WrapperListOrder = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 32px;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.44;
`;
export const WrapperProduct = styled.div`
  display: flex;
  justify-content: space-between;
  &.story {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114px;
  height: 114px;
  box-sizing: border-box;
  margin: 16px 16px 16px 0;
  border-radius: 50%;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 200px;
  &.basket {
    margin-right: auto;
  }
`;
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  &.story {
    margin-right: auto;
  }
`;
export const Count = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  .count {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.color.bgButton};
    border-radius: 3px;
    width: 16px;
    height: 16px;
    background-color: transparent;
  }
`;
export const Actives = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Price = styled.div`
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  &.story {
    margin: auto;
  }
  .price-discount {
    color: ${({ theme }) => theme.color.colorPriceDiscant};
    font-size: 16px;
    line-height: 1.25; /* 125% */
    text-decoration: line-through;
  }
  .discount {
    color: ${({ theme }) => theme.color.colorTextPrice};
  }
  .price {
    color: ${({ theme }) => theme.color.colorMainText};
  }
`;
export const DeleteAdd = styled.div`
  display: flex;
  gap: 44px;
  width: 100%;
  &.story {
    flex-direction: column;
    gap: 32px;
    justify-content: center;
  }
  &.basket button {
    background-color: transparent;
  }
`;
export const WrapperBuy = styled.div`
  &.story {
    display: flex;
    align-items: center;
  }
  .info-price {
    font-size: 18px;
    font-weight: 800;
    line-height: 1.44; /* 144.444% */
    &_discount {
      color: ${({ theme }) => theme.color.colorTextPrice};
    }
  }
  .info {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.25;
  }
`;
export const TotalPrice = styled.div`
  background-color: ${({ theme }) => theme.color.bgProduct};
  width: 100%;
  border-radius: 12px;
  padding: 32px 8px;
`;
export const Sum = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;
export const Discount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 65px;
`;
export const Total = styled.div`
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45; /* 145.455% */
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
`;
export const WrapperButton = styled.div`
  text-align: center;
`;
export const addProductButton = {
  fontSize: '22px',
  fontWeight: '700',
  fontFamily: 'Jost',
  color: theme.color.colorButtonText,
  bgcolor: theme.color.bgButton,
  borderRadius: '6px',
  textAlign: 'center',
  padding: '8px 12px',
  lineHeight: 1.4,
  textTransform: 'none',
  translate: 'all 100ms ease',
  whiteSpace: 'nowrap',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    bgcolor: theme.color.bgButton,
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:disabled': {
    color: 'black',
  },
};

export const styleSelect = {
  position: 'relative',
  width: '100%',
  '.error': {
    position: 'absolute',
    bottom: '48px',
    right: '0',
    color: `${theme.color.colorTextErrorForm}`,
  },
  'em, span': {
    fontSize: '16px',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    color: `${theme.color.colorTextExplainment}`,
  },
  '.MuiInputBase-root': {
    fontSize: '16px',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.25',
    color: `${theme.color.colorTextExplainment}`,
    borderRadius: '6px',
    border: 'none',
  },
  '.arrow_select': {
    lineHeight: '0',
    transform: 'rotate(180deg)',
  },
  '[aria-expanded="true"]~.arrow_select': {
    transform: 'rotate(0deg)',
  },
  '.MuiSelect-select': {
    padding: '8px 12px',
    fontSize: '16px',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.25',
  },
  '[aria-expanded="true"]~.MuiOutlinedInput-notchedOutline': {
    boxShadow: `inset 0 0 0 3px ${theme.color.borderRegister}`,
    border: `1px solid ${theme.color.borderRegister}`,
  },
  '.Mui-focused .MuiOutlinedInput-notchedOutline': {
    boxShadow: `inset 0 0 0 3px ${theme.color.borderRegister}`,
    border: 'none',
  },
};
