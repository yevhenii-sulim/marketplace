import { theme } from '../theme/theme';

export const accordionStyles = {
  boxShadow: 'none',
  '::before': {
    height: 0,
  },
  [theme.breakpoints.up('1024')]: {
    margin: '12px 0',
  },
  [theme.breakpoints.down('1024')]: {
    margin: '12px 0',
  },

  [theme.breakpoints.down('767')]: {
    margin: '0',
  },
};
export const summaryStyles = {
  fontSize: '22px',
  fontWeight: '700',
};
