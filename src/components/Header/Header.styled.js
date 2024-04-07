import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.color.bgHeader};
`;

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
