import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.bgCommon};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid ${({ theme }) => theme.color.borderRegistr};
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  color: inherit;
  h2 {
    font-family: Jost;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.5;
  }
`;
export const LinkReg = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.colorTextRegistr};
`;
export const LinkGoIn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid ${({ theme }) => theme.color.borderRegistr};
  border-radius: 6px;
  padding: 6px 43px;
  text-decoration: none;
  width: 100%;
  color: inherit;
  span {
    font-weight: 700;
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
