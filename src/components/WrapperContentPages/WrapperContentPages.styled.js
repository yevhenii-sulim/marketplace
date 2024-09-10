import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  width: 90%;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakPoints.sx}) {
    width: 96%;
  }
`;
