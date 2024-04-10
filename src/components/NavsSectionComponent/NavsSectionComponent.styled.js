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
export const SubNavList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  justify-content: space-between;
  align-items: center;
  padding-right: 12px;
  padding-left: 12px;
`;
export const NavigationMenu = styled.div`
  display: grid;
  grid-template: auto/1fr 2fr;
  width: 50%;
  background-color: ${({ theme }) => theme.color.bgCommon};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  overflow: hidden;
`;
export const NavUlist = styled.ul`
  position: relative;
  background-color: ${({ theme }) => theme.color.bgNavCommon};
  padding-top: 12px;
  padding-left: 12px;
  padding-bottom: 12px;
  padding-right: 12px;
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-bottom: 10px ${({ theme }) => theme.color.bgNavCommon} solid;
    border-right: 8px transparent solid;
    border-left: 8px transparent solid;
    border-top: none;
  }
`;
export const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  line-height: 1.44;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 4px;
  width: 214px;
  cursor: pointer;
  &.active {
    color: ${({ theme }) => theme.color.colorTextErrorForm};
  }
`;
