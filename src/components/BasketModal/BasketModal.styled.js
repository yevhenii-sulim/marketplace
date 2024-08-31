import styled from 'styled-components';
import { Link as Location } from 'react-router-dom';
import { theme } from 'utils/theme';

export const About = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 40px;
  margin-right: auto;
`;
export const Actives = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  button {
    display: block;
    background-color: transparent;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
  width: 16px;
  height: 16px;
  gap: 8px;
  background-color: transparent;
  .count {
    background: transparent;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .MuiSvgIcon-root:active {
    color: ${({ theme }) => theme.color.bgButton};
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.bgBackdrop};
  z-index: 10;
  overflow-y: auto;
`;
export const Empty = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;
  max-width: 1000px;
  margin: 100px auto;
  background-color: ${({ theme }) => theme.color.bgProduct};
  margin-top: 32px;
  border-radius: 12px;
  padding-top: 24px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 24px;

  p {
    color: ${({ theme }) => theme.color.colorTextStartUserPage};
  }
`;
export const Discount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 65px;
`;
export const cssButtonClose = {
  position: 'absolute',
  top: '10px',
  right: '10px',
};
export const continueShoppingButton = {
  minWidth: '0',
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  bgcolor: theme.color.bgProduct,
  borderRadius: '8px',
  height: '48px',
  padding: '6px 16px',
  fontFamily: 'Jost',
  fontSize: '22px',
  fontWeight: '700',
  lineHeight: '1.45',
  outline: 'none',
  color: theme.color.bgHeader,
  whiteSpace: 'nowrap',
  border: `1px solid ${theme.color.bgButton}`,
  '&:hover': {
    color: theme.color.colorButtonText,
    backgroundColor: theme.color.bgButtonHover,
  },
  '&:active': {
    boxShadow: `inset 0 0 5px 0px ${theme.color.bgHeader}`,
  },
};
export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45; /* 145.455% */
  margin-bottom: 32px;
`;
export const TitleSection = styled.h1`
  position: absolute;
  left: 40px;
  top: 24px;
  font-family: Jost;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.5; /* 150% */
  letter-spacing: -0.32px;
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

export const Link = styled(Location)`
  color: ${({ theme }) => theme.color.colorButtonText};
  background-color: ${({ theme }) => theme.color.bgButton};
  font-family: 'Jost';
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  border-radius: 8px;
  padding: 4px 10px;
`;
export const List = styled.li`
  border-radius: 12px;
  padding: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderBasketList};
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
export const Price = styled.div`
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  p {
    white-space: nowrap;
  }
  .price-discount {
    display: flex;
    color: ${({ theme }) => theme.color.colorPriceDiscant};
    font-size: 16px;
    font-weight: 400;
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

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 12px;
`;

export const WrapperBuy = styled.div`
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  padding-top: 32px;
  padding-bottom: 32px;
  .info-price {
    font-size: 18px;
    font-weight: 800;
    line-height: 1.44; /* 144.444% */
    white-space: normal;
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
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
`;
export const Sum = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
  span {
    white-space: nowrap;
  }
`;

export const makeShoppingButton = {
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

export const WrapperOrder = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 8px;
  display: grid;
  grid-template-columns: 2fr 300px;
  gap: 32px;
  max-width: 1000px;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.44;
  margin-top: 32px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 80px;
  padding-bottom: 24px;
  margin: 100px auto;
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
export const WrapperProduct = styled.div`
  display: flex;
  justify-content: space-between;
  &.story {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;
export const WrapperButton = styled.div`
  text-align: center;
`;
