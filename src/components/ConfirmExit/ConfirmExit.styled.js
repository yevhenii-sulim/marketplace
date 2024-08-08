import styled from 'styled-components';
import { theme } from 'utils/theme';

export const Buttons = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
`;

export const WrapperModal = styled.div`
  width: 100%;
  height: 240px;
  width: 100%;
  position: absolute;
  box-shadow: 0px 9px 30px 2px rgba(0, 0, 0, 0.15),
    0px -164px 46px 0px rgba(130, 130, 130, 0),
    0px -105px 42px 0px rgba(130, 130, 130, 0.01),
    0px -59px 35px 0px rgba(130, 130, 130, 0.03),
    0px -26px 26px 0px rgba(130, 130, 130, 0.05),
    0px -7px 14px 0px rgba(130, 130, 130, 0.06);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  padding: 44px 52px;
  @media screen and (min-width: 480px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 424px;
  }
  p {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
    text-align: center;
    margin-bottom: 72px;
  }
`;

export const exitOutButton = {
  width: '148px',
  fontSize: '18px',
  whiteSpace: 'nowrap',
  fontWeight: '800',
  fontFamily: 'Nunito Sans',
  color: theme.color.colorButtonText,
  bgcolor: theme.color.bgButton,
  borderRadius: '6px',
  textAlign: 'center',
  padding: '8px 0px',
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

export const stayInButton = {
  width: '148px',
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  fontFamily: 'Nunito Sans',
  bgcolor: theme.color.bgProduct,
  borderRadius: '8px',
  height: '48px',
  padding: '6px 16px',
  fontSize: '18px',
  fontWeight: '800',
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
