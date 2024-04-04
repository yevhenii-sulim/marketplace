import styled from 'styled-components';

export const WrapperModal = styled.div`
  background-color: ${({ theme }) => theme.color.bgCommon};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid ${({ theme }) => theme.color.borderRegistr};
  border-radius: 12px;
  padding: 32px;
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
  max-width: 384px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  color: inherit;
`;
