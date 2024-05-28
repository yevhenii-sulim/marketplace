import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 32px;

  h1 {
    font-family: Jost;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.5;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;
    padding: 42px 40px;
  }
  h2 {
    font-size: 18px;
    font-weight: 800;
    line-height: 1.44;
  }
  p {
    font-size: 18px;
    line-height: 26px;
  }
`;
