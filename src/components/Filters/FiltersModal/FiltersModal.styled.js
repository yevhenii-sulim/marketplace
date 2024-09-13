import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.bgBackdrop};
  z-index: 10;
  padding: 12px;
  overflow-y: auto;
`;
export const cssButtonClose = {
  position: 'absolute',
  top: '10px',
  right: '10px',
};
export const Wrapper = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  max-width: 366px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  padding-top: 22px;
  padding-left: 12px;
  padding-bottom: 22px;
  padding-right: 12px;
  left: ${({ $isOpenMenu }) => ($isOpenMenu ? '0%' : '-100%')};
  transition: left 500ms ease;
  @media screen and (min-width: 768px) {
    max-width: 414px;
  }
`;
