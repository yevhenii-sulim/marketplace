import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.bgBackdrop};
`;
export const NavList = styled.ul`
  width: 50%;
  background-color: ${({ theme }) => theme.color.bgCommon};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid ${({ theme }) => theme.color.borderRegistr};
  border-radius: 12px;
  padding: 32px;
`;
export const List = styled.div``;
