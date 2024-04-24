import styled from 'styled-components';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom';

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
export const LinkCategory = styled(Link)``;
export const SubNavList = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  justifyItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  paddingRight: '12px',
  paddingLeft: '12px',
};

export const Psevdo = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-bottom: 16px #e1e1e1 solid;
    border-right: 10px transparent solid;
    border-left: 10px transparent solid;
    border-top: none;
  }
`;

export const BoxListStyles = {
  display: 'grid',
  gridTemplateColumns: '1.5fr 2fr',
  gridTemplateRows: 'auto',
  width: '832px',
  position: 'absolute',
  top: '84px',
  left: '40%',
  transform: 'translate(-50%)',
  borderRadius: '12px',
  bgcolor: '#ffffff',
};

export const TabListStyles = {
  position: 'relative',
  bgcolor: '#E1E1E1',
  borderRadius: '10px 0 0 10px',
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
    alignItems: 'flex-start',
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
