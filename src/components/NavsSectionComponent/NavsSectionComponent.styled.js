import styled from 'styled-components';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.bgBackdrop};
`;
export const OpenList = styled(ArrowForwardIosOutlinedIcon)`
  color: ${({ theme }) => theme.color.bgArrowList};
`;
export const SubNavList = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  justifyItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  paddingRight: '12px',
  paddingLeft: '12px',
};

export const BoxListStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gridTemplateRows: 'auto',
  width: '768px',
  position: 'absolute',
  top: '84px',
  left: '40%',
  transform: 'translate(-50%)',
  borderRadius: '12px',
  overflow: 'hidden',
  bgcolor: '#ffffff',
  '& .MuiTabs-vertical.MuiTabs-root': {
    '&::before': {
      width: '50px',
      height: '50px',
      bgcolor: 'red',
    },
  },
};

// '&::before': {
//   position: 'absolute',
//   top: '-10px',
//   left: '50%',
//   transform: 'translateX(-50%)',
//   width: '10px',
//   height: '10px',
//   borderBottom: '10px black solid',
//   borderRight: '8px transparent solid',
//   borderLeft: '8px transparent solid',
//   borderTop: 'none',
// },

export const TabListStyles = {
  position: 'relative',
  bgcolor: '#E1E1E1',
  paddingTop: '12px',
  paddingLeft: '12px',
  paddingBottom: '12px',
  paddingRight: '12px',
  '& .MuiButtonBase-root.Mui-selected': {
    color: '#7FD888',
  },
  '& .MuiButtonBase-root-MuiTab-root': {},
  '& .MuiButtonBase-root': {
    justifyContent: 'space-between',
    color: '#000000',
    p: '12px 20px',
    minHeight: '0',
    fontFamily: 'Nunito Sans',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      fontWeight: 600,
    },
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#7FD888',
  },
  '& .MuiTab-root': {
    textTransform: 'none',
    borderRadius: '10px',
    textAlign: 'left',
  },
};
