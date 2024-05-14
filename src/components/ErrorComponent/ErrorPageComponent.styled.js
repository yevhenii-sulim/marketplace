import styled from 'styled-components';
export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  main {
    flex-grow: 2;
  }
`;
export const Images = styled.div`
  position: relative;
  padding-top: 260px;
  p {
    text-align: center;
  }
`;
export const Solution = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;
  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.44;
    color: ${({ theme }) => theme.color.colorTextErrorLink};
  }
`;
export const Container = styled.main`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-auto-columns: 100%;
  align-content: center;
  justify-content: center;
  gap: 71px;
  width: 100%;
  height: 100%;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 54px;
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
