import styled from 'styled-components';

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
export const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
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
export const RatingText = styled.p``;
export const Balance = styled.div`
  font-family: 'Jost';
  align-self: flex-end;
  font-size: 22px;
  line-height: 1.45;
`;
export const ContainerUserMain = styled.div`
  display: grid;
  grid-template: 1fr/274px auto;
  gap: 32px;
`;
export const Sidebar = styled.ul`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`;
export const List = styled.li`
  a {
    display: flex;
    padding: 10px;
    gap: 20px;
    align-items: center;
    &.active {
      color: ${({ theme }) => theme.color.colorTextSidebarActive};
    }
  }
`;
export const PagesForSidebar = styled.div`
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  flex-grow: 2;
`;
