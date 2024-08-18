import { theme } from 'components/ProductPage/theme/theme';

export const buttonBuyStyles = {
  width: '85%',
  backgroundColor: '#43C550',
  textTransform: 'none',
  height: '40px',
  fontFamily: 'Jost',
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '1.45',
  '&:focus': {
    backgroundColor: '#43C550',
  },
  '&:hover': {
    backgroundColor: '#43C550',
  },
  [theme.breakpoints.down('md')]: {
    height: '52px',
  },
};

export const buttonConnectStyles = {
  width: '85%',
  borderColor: '#43C550',
  textTransform: 'none',
  color: '#43C550',
  height: '40px',
  fontFamily: 'Jost',
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '1.45',
  '&:focus': {
    borderColor: '#43C550',
  },
  '&:hover': {
    borderColor: '#43C550',
  },
  [theme.breakpoints.down('md')]: {
    height: '52px',
  },
};

export const buttonShowTelStyles = {
  width: '85%',
  borderColor: '#43C550',
  textTransform: 'none',
  color: '#43C550',
  height: '40px',
  fontFamily: 'Jost',
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '1.45',
  '&:focus': {
    borderColor: '#43C550',
  },
  '&:hover': {
    borderColor: '#43C550',
  },
};
