import styled from 'styled-components';

export const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  main {
    flex-grow: 2;
  }
`;
export const Container = styled.div`
  height: 100%;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  width: auto;
  padding-left: 12px;
  padding-right: 12px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding-left: 0;
    padding-right: 0;
    max-width: 1200px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    max-width: 1440px;
    padding-left: 58px;
    padding-right: 58px;
  }
`;
