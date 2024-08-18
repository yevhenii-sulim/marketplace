import styled from 'styled-components';
// import { dpr } from 'utils/dpr';

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
  @media screen and (min-width: calc(768px)) {
    width: 768px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media screen and (min-width: calc(1440px)) {
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 58px;
    padding-right: 58px;
    width: 1440px;
  }
`;

export const NavContainer = styled.div`
  margin-right: auto;
  display: flex;
  gap: 18px;
`;
