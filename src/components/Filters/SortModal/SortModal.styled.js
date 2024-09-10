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
  background-color: ${({ theme }) => theme.color.bgProduct};
  border-radius: 12px;
  padding-top: 22px;
  padding-left: 12px;
  padding-bottom: 22px;
  padding-right: 12px;

  left: ${({ $isOpenMenu }) => ($isOpenMenu ? '0%' : '-100%')};
  transition: left 500ms ease;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 414px;
  }
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.color.bgCommon};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 22px;
  padding-left: 12px;
`;
export const List = styled.ul`
  padding: 12px 12px 32px;
  label {
    position: relative;
    font-size: 16px;
    font-weight: 700;
    display: block;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border-radius: 50px;
      box-shadow: inset 0 0 0 1px black, inset 0 0 0 3px white;
    }
  }
  li {
    &:not(:last-child) {
      margin-bottom: 22px;
    }
  }
  [type='radio'] {
    display: none;
  }
  [type='radio']:checked ~ label:before {
    background-color: ${({ theme }) => theme.color.bgButton};
  }
`;
