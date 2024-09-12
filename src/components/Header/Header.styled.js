import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.color.bgHeader};
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding-left: 0;
    padding-right: 0;
    padding-top: 18px;
    padding-bottom: 18px;
    width: 1200px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    padding-left: 58px;
    padding-right: 58px;
    width: 1440px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 18px;
  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakPoints.lg} - 1px)) {
    margin-right: auto;
  }
`;
