import { theme } from 'components/ProductPage/theme/theme';

export const commentedButton = {
  backgroundColor: '#43C550',
  textTransform: 'none',
  height: '40px',
  padding: '0 20px',
  fontSize: '18px',
  fontWeight: '800',
  marginLeft: '8px',
  '&:focus': {
    backgroundColor: '#43C550',
  },
  '&:hover': {
    backgroundColor: '#43C550',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    height: '30px',
    padding: '0 12px',
  },
};

export const cancelButton = {
  borderColor: '#43C550',
  textTransform: 'none',
  color: 'black',
  height: '40px',
  padding: '0 20px',
  fontSize: '18px',
  fontWeight: '600',

  '&:focus': {
    borderColor: '#43C550',
  },
  '&:hover': {
    borderColor: '#43C550',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    height: '30px',
    padding: '0 12px',
  },
};

export const buttonAddMoreComments = {
  display: 'flex',
  borderColor: '#43C550',
  textTransform: 'none',
  color: '#43C550',
  height: '40px',
  padding: '0 20px',
  fontSize: '18px',
  fontWeight: '700',
  fontFamily: 'Jost',
  margin: '35px auto 0 auto',
  '&:focus': {
    borderColor: '#43C550',
  },
  '&:hover': {
    borderColor: '#43C550',
  },
};

export const rating = { position: 'absolute', left: 0, bottom: '5px' };
