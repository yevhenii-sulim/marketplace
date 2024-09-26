import styled from 'styled-components';
import { theme } from 'utils/theme';
import { Link as LinkAtProduct } from 'react-router-dom';

export const WrapperModal = styled.div`
  width: 100%;
  max-width: 1440px;
  background-color: ${({ theme }) => theme.color.bgCommon};
  border: 3px solid ${({ theme }) => theme.color.borderRegister};
  border-radius: 12px;
  overflow-y: auto;
  padding-top: 32px;
  padding-bottom: 32px;
  .MuiSvgIcon-root.close {
    color: ${({ theme }) => theme.color.bgButton};
  }
  h1 {
    text-align: center;
    font-family: Jost;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.5; /* 150% */
    letter-spacing: -0.32px;
    margin-bottom: 40px;
  }
  header {
    background-color: ${({ theme }) => theme.color.bgProduct};
    border-radius: 8px;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.sx}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding: 44px 58px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    padding: 44px 58px;
  }
`;
export const Advertisement = styled.div`
  margin: auto;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: grid;
    grid-template-columns: 764px auto;
    gap: 20px;
  }
`;

export const TitleDescription = styled.h3`
  margin-bottom: 12px;
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45; /* 145.455% */
`;

export const AboutProduct = styled.div`
  position: relative;
  border-radius: 12px;
  .complaint {
    text-align: end;
    color: ${({ theme }) => theme.color.colorTextSidebarActive};
  }
`;
export const ButtonsContacts = styled.div`
  display: grid;
  gap: 12px;
  justify-content: center;
  grid-template-columns: 100%;
  margin-top: 24px;
  margin-bottom: 44px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    grid-template-columns: 50% 50%;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: none;
  }
`;
export const ButtonsBuy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 24px;
`;
export const AboutPrice = styled.div`
  border-radius: 12px;
`;
export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.bgBackdrop};
  z-index: 10;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 16px;
  padding-right: 16px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const viewProductButton = {
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  bgcolor: theme.color.bgProduct,
  borderRadius: '8px',
  padding: '8px 12px',
  fontFamily: 'Jost',
  fontSize: '22px',
  fontWeight: '700',
  lineHeight: '1.45',
  outline: 'none',
  color: theme.color.bgHeader,
  border: `1px solid ${theme.color.bgButton}`,
  '&:hover': {
    color: theme.color.colorButtonText,
    backgroundColor: theme.color.bgButtonHover,
  },
  '&:active': {
    boxShadow: `inset 0 0 5px 0px ${theme.color.bgHeader}`,
  },
};

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

export const Description = styled.div`
  background-color: ${({ theme }) => theme.color.bgProduct};
  margin-top: 24px;
  padding: 16px;
  border-radius: 12px;
`;

export const Options = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  margin-bottom: 16px;
  p {
    font-size: 18px;
    font-weight: 800;
    line-height: 1.44; /* 144.444% */
    white-space: nowrap;
  }
  span {
    font-weight: 400;
  }
`;

export const ProductDescription = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;
  margin-bottom: 16px;
`;
export const PriceSection = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: block;
    padding: 16px 24px;
    background-color: ${({ theme }) => theme.color.bgProduct};
    border-radius: 12px;
    margin-bottom: 24px;
    .time-added {
      margin-top: 24px;
      color: ${({ theme }) => theme.color.colorTextPublicProduct};
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.44;
    }
  }
`;
export const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  font-family: Jost;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5; /* 150% */
`;
export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin: auto 0;
  background-color: ${({ theme }) => theme.color.bgFooter};
  padding: 8px;
  border-radius: 50%;
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.lg}) {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
  }
`;

export const PriceWithDiscount = styled.div`
  .first-price {
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 145.455% */
    text-decoration: line-through;
  }
  .discount {
    color: ${({ theme }) => theme.color.colorTextSidebarActive};
    font-family: Jost;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 150% */
    letter-spacing: -0.32px;
  }
`;
export const PriceWithoutDiscount = styled.div`
  p {
    font-family: Jost;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.32px;
  }
`;
export const SellerSection = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: flex;
    padding: 16px 24px;
    background-color: ${({ theme }) => theme.color.bgProduct};
    border-radius: 12px;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;
    h3 {
      font-family: Jost;
      font-size: 22px;
      font-weight: 700;
      line-height: 1.45;
    }
    .more-products {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.44;
      color: ${({ theme }) => theme.color.colorTextExplainment};
    }
    .rating {
      font-size: 18px;
      font-weight: 400;
      line-height: 1.44;
    }
  }
`;
export const Name = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.24px;
`;
export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
`;
export const UserName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  img {
    width: 71px;
    height: 71px;
    border-radius: 50%;
  }
`;
export const Errors = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${({ theme }) => theme.color.colorTextSidebarActive};
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.45;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 64px);
  gap: 114px;
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
`;
export const SignSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  p {
    font-family: Jost;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.5; /* 150% */
    text-align: center;
  }
`;

export const Link = styled(LinkAtProduct)`
  text-transform: none;
  text-align: center;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 8px;
  height: 48px;
  padding: 6px 12px;
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  outline: none;
  color: ${({ theme }) => theme.color.bgHeader};
  border: 1px solid ${({ theme }) => theme.color.bgButton};
  &:hover {
    color: ${({ theme }) => theme.color.colorButtonText};
    background-color: ${({ theme }) => theme.color.bgButtonHover};
  }
  &:active {
    box-shadow: inset 0 0 5px 0px ${({ theme }) => theme.color.bgHeader};
  }
`;
