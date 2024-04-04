import styled from 'styled-components';
import { NavLink as LinkCategory } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1324px;
  margin: auto;
  padding-top: 18px;
  padding-bottom: 18px;
`;
export const NavContainer = styled.div`
  display: flex;
  gap: 18px;
`;
export const TitleNav = styled.p`
  font-family: Jost;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
  color: ${({ theme }) => theme.color.colorSecondText};
`;
export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.color.bgHeader};
`;
export const NavLink = styled(LinkCategory)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;
