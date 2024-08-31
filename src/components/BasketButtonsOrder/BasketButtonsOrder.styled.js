import styled from 'styled-components';
import { theme } from 'utils/theme';

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  @media screen and (min-width: 1440px) {
    grid-area: buttons;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const continueShoppingButton = {
  textTransform: 'none',
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
  maxWidth: '277px',
  '&:hover': {
    color: theme.color.colorButtonText,
    backgroundColor: theme.color.bgButtonHover,
  },
  '&:active': {
    boxShadow: `inset 0 0 5px 0px ${theme.color.bgHeader}`,
  },
};

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
  maxWidth: '277px',
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
