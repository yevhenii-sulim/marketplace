import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
export const NavLink = styled(Link)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 32px;
  padding-bottom: 32px;
`;
export const Title = styled.h1`
  font-family: Jost;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.32px;
`;
export const Header = styled.div`
  text-align: left;
  display: flex;
  justify-content: space-between;
  padding: 16px 48px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.bgProduct};
`;
export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  img {
    width: 71px;
    height: 71px;
    border-radius: 50%;
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
`;
export const ContainerUserMain = styled.div`
  display: grid;
  grid-template-columns: 274px auto;
  align-items: flex-start;
  gap: 32px;
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

export const List = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    &.active & svg {
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  color: ${({ theme }) => theme.color.colorTextSidebarActive};
  display: flex;
  padding: 10px;
  gap: 20px;
  align-items: center;
  background-color: transparent;
`;
export const PagesForSidebar = styled.div`
  flex-grow: 2;
`;
