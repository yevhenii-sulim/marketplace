import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Title = styled.h1`
  font-family: Jost;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.32px;
  padding: 0px 20px;

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding: unset;
  }
`;
export const Header = styled.div`
  text-align: left;
  display: flex;
  justify-content: space-between;
  padding: 16px 48px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  margin-bottom: 16px;
  width: 100%;
  max-width: 366px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-bottom: 0;
  }
`;
export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  img {
    border-radius: 10px;
    width: 71px;
    height: auto;
  }
`;
export const UserName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Name = styled.h3`
  font-family: 'Jost';
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
`;
export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
`;
export const Balance = styled.div`
  font-family: 'Jost';
  align-self: flex-end;
  font-size: 22px;
  line-height: 1.45;
`;

export const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 928px) {
    width: 100%;
  }
`;
export const ContainerUserMain = styled.div`
  display: block;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    display: grid;
    grid-template-columns: auto;
    position: relative;
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    grid-template-columns: 274px auto;
    padding-top: 196px;
    gap: 32px;
  }
`;

export const Sidebar = styled.ul`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;

export const WrapperSidebar = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    display: block;
  }
`;

export const List = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    &.active svg {
      stroke: ${({ theme }) => theme.color.bgButton};
    }
    &.active {
      color: ${({ theme }) => theme.color.bgButton};
      border: ${({ theme }) => theme.color.bgButton} 2px solid;
      border-radius: 4px;
    }
  }
`;

export const Sign = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const Exit = styled.button`
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.color.colorTextSidebarActive};
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;
  display: block;
  margin: auto;
  width: 100%;
  max-width: 366px;
  border: 1px solid ${({ theme }) => theme.color.colorTextSidebarActive};
  border-radius: 8px;
  svg {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Nunito Sans';
    max-width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    gap: 20px;
    padding: 10px;
    margin: 0;
    border: none;
    svg {
      display: block;
    }
  }
`;
export const PagesForSidebar = styled.div`
  flex-grow: 2;
`;
