import styled from 'styled-components';
export const ContainerError = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  min-height: auto;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding-bottom: 8px;
  padding-left: 32px;
  padding-right: 32px;
  background-color: ${({ theme }) => theme.color.bgButton};
`;
export const ErrorList = styled.li`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.color.colorButtonText};
  font-size: 24px;
  li {
    margin-bottom: 4px;
    text-align: left;
  }
`;
export const TitleError = styled.h4`
  text-align: center;
  font-weight: 500;
`;

export const WrapperModal = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.bgProduct};
  position: absolute;
  border: 3px solid ${({ theme }) => theme.color.borderRegister};
  border-radius: 12px;
  padding: 32px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .MuiSvgIcon-root.close {
    color: ${({ theme }) => theme.color.bgButton};
  }
  @media screen and (min-width: 480px) {
    width: 366px;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.bgBackdrop};
  z-index: 10;
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
