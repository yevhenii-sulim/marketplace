import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.color.bgHeader};
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  padding-left: 58px;
  padding-right: 58px;
  margin: auto;
  padding-top: 18px;
  padding-bottom: 18px;
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 18px;
`;
