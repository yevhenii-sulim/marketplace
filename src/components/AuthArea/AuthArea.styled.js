import styled from 'styled-components';

export const Tytle = styled.h2`
  font-family: Jost;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
`;

export const LinkReg = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  color: ${({ theme }) => theme.color.colorTextRegistr};
`;
