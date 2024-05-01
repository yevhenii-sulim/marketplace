import styled from 'styled-components';

export const WrapperModal = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.bgProduct};
  position: absolute;
  border: 3px solid ${({ theme }) => theme.color.borderRegistr};
  border-radius: 12px;
  padding: 32px;
  .MuiSvgIcon-root.close {
    color: ${({ theme }) => theme.color.bgButton};
  }
  @media screen and (min-width: 480px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 384px;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.bgBackdrop};
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  color: inherit;
`;
export const cssButtonClose = {
  position: 'absolute',
  top: '10px',
  right: '10px',
};
