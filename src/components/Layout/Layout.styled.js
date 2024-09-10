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
  max-width: 1440px;
  height: 100%;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  width: auto;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding-left: 12px;
    padding-right: 12px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding-left: 58px;
    padding-right: 58px;
  }
`;
