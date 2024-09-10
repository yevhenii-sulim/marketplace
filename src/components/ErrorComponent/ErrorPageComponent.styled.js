import { Link } from 'react-router-dom';
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
  display: flex;
  justify-content: center;
  align-items: flex-end;
  p {
    text-align: center;
  }
`;

export const Back = styled(Link)`
  width: 264px;
  font-family: Jost;
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.44;
  color: ${({ theme }) => theme.color.colorButtonText};
  background-color: ${({ theme }) => theme.color.bgButton};
  border-radius: 6px;
  text-align: center;
  padding: 8px 0px;
  text-transform: none;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    background-color: ${({ theme }) => theme.color.bgButton};
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    color: black;
  }
`;
export const Question = styled(Link)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.44;
  color: ${({ theme }) => theme.color.colorTextErrorLink};
`;
export const Text = styled.div`
  margin-top: 12px;
  text-align: center;
`;

export const Solution = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 16px;
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
  padding-top: 74px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 54px;
  margin: auto;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 768px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    width: 1200px;
    padding-left: 58px;
    padding-right: 58px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    width: 1440px;
  }
`;
