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
  width: 100%;
  height: 100%;
  padding-left: 12px;
  padding-right: 12px;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 58px;
    padding-right: 58px;
  }
`;
