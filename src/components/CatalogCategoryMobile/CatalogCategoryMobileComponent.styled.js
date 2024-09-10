import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 40px;
  padding-bottom: 40px;
  justify-items: center;
  row-gap: 24px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.mx}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
