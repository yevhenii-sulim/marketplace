import styled from 'styled-components';

export const Header = styled.div`
  padding: 16px 48px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.bgProduct};
`;

export const Balance = styled.div`
  font-family: 'Jost';
  font-size: 22px;
  line-height: 1.45;
`;
