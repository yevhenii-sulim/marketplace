import styled from 'styled-components';

export const Burger = styled.button`
  margin-right: 24px;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.color.bgProduct};
`;
