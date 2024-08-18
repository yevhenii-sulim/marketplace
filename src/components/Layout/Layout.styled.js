import styled from 'styled-components';
import { dpr } from 'utils/dpr';
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
  @media screen and (min-width: calc(768px * ${dpr})) {
  }

  @media screen and (min-width: calc(1440px * ${dpr})) {
    width: 1440px;
    padding-left: 58px;
    padding-right: 58px;
  }
`;
