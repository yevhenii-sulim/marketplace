import styled from 'styled-components';

export const ContactList = styled.ul`
  display: grid;
  row-gap: 24px;
  height: 100%;
  justify-content: space-between;
  grid-template: repeat(4, auto) / repeat(2, 1fr);
  justify-items: start;
  align-content: center;
  @media screen and (min-width: 768px) {
    grid-template: repeat(2, auto) / repeat(4, 1fr);
  }
`;
