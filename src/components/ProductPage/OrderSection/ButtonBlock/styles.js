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
  [theme.breakpoints.down('ds')]: {
    width: '49%',
    height: '52px',
    fontSize: '20px',
  },
  [theme.breakpoints.down('md')]: {
    width: '85%',
    height: '52px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '20px',
    width: '95%',
  },
};

export const buttonConnectStyles = {
  width: '85%',
  borderColor: '#43C550',
  textTransform: 'none',
  color: '#43C550',
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
  [theme.breakpoints.down('ds')]: {
    width: '49%',
    height: '52px',
    fontSize: '20px',
  },
  [theme.breakpoints.down('md')]: {
    width: '85%',
    height: '52px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '20px',
    whiteSpace: 'nowrap',
    width: '95%',
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
