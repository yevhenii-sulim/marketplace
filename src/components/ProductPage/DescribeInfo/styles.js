import { theme } from '../theme/theme';

export const accordionStyles = {
  boxShadow: 'none',
  '::before': {
    height: 0,
  },
  [theme.breakpoints.up('767')]: {
    display: 'none',
  },
};
export const summaryStyles = {
  fontSize: '22px',
  fontWeight: '700',
};
