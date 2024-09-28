import styled from 'styled-components';
import { Link as LinkEntered } from 'react-router-dom';
import { NavLink as linkComponents } from 'react-router-dom';
export const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.bgBackdrop};
  header {
    background-color: ${({ theme }) => theme.color.bgHeader};
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  main {
    background: ${({ theme }) => theme.color.bgAddImage};
    padding-top: 24px;
    height: 100%;
  }
  section {
    border-bottom: 1px solid ${({ theme }) => theme.color.bgBackdropLinePoPup};
    padding: 16px 0;
    padding-left: 12px;
    padding-right: 12px;
  }
`;
export const Menu = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  left: ${({ $isOpenMenu }) => ($isOpenMenu ? '0%' : '-100%')};
  display: flex;
  flex-direction: column;
  transition: left 500ms ease;
  width: 322px;
  overflow-y: auto;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 414px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }
`;
export const AddContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.bgBackdropLinePoPup};
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 16px;
  text-align: center;
`;
export const Contacts = styled.div`
  a {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`;
export const EnteredProfile = styled.div`
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 8px;
  padding: 24px 0px;
  p {
    text-align: center;
    margin-bottom: 16px;
  }
`;
export const LinkEnter = styled(LinkEntered)`
  padding: 10px 48px;
  background-color: ${({ theme }) => theme.color.bgButton};
  border-radius: 4px;
  display: block;
  width: 274px;
  text-align: center;
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45; /* 145.455% */
  color: ${({ theme }) => theme.color.colorSecondText};
  margin: auto;
`;
export const LinkAxillary = styled(linkComponents)`
  justify-content: space-between;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  gap: 12px;
  padding: 10px;
  width: 100%;
  &:not(.response-menu-link) svg {
    stroke: ${({ theme }) => theme.color.colorMainText};
  }
  &.active svg {
    stroke: ${({ theme }) => theme.color.bgButton};
  }
  &.active {
    color: ${({ theme }) => theme.color.bgButton};
    border: ${({ theme }) => theme.color.bgButton} 2px solid;
    border-radius: 4px;
  }
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const Sidebar = styled.ul`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 12px 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 100%;
  max-width: 366px;
  margin: auto;
`;
export const WrapperSidebar = styled.div`
  width: 100%;
  max-width: 366px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
`;
export const Title = styled.h1`
  font-family: Jost;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  margin-bottom: 16px;
`;
export const CategoryList = styled.li`
  svg {
    width: 24px;
    height: 24px;
  }
`;
