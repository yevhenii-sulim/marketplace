import { theme } from 'utils/theme';
export const socialSingInButton = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  borderRadius: '6px',
  textAlign: 'center',
  padding: '10px 43px',
  textTransform: 'none',
  fontSize: '16px',
  color: 'black',
  width: '100%',
  '& span': {
    fontWeight: '700',
  },
  border: `2px solid ${theme.color.borderRegistr}`,
  '&:focus': {
    border: `2px solid ${theme.color.borderRegistr}`,
  },
  '&:hover': {
    border: `2px solid ${theme.color.borderRegistr}`,
    background: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  },
};
