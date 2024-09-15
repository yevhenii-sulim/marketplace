import { theme } from '../theme/theme';

export const TabListStyles = {
  opacity: 0,
  height: 0,
  '& .MuiButtonBase-root.Mui-selected': {
    color: '#7FD888',
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#7FD888',
  },
  '& .MuiTab-root': {
    textTransform: 'none',
  },
  [theme.breakpoints.down('xs')]: {
    display: 'none',
  },
};

export const selectFilteredCommentsStyle = {
  boxShadow: 'none',
  color: 'black',
  '.MuiSelect-outlined': {
    padding: 0,
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: 'none',
    borderBottom: 'none',
    borderRadius: '0px',
  },
  '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderBottom: 'none',
  },
  '.MuiSvgIcon-root': {
    color: 'black',
  },
};
