import styled from 'styled-components';

export const Svg = styled.svg``;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translatey(-50%);
`;
export const View = styled.span`
  position: absolute;
  transform: translate(-19%, -150%) rotate(-45deg);
  top: 50%;
  left: 0;
  width: 150%;
  height: 2px;
  background-color: ${({ theme }) => theme.color.colorMainText};
`;
