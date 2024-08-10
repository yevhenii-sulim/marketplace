import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  width: 100%;
  margin: auto;
  background-color: ${({ theme }) => theme.color.bgProduct};
  border: 3px solid ${({ theme }) => theme.color.borderRegister};
  border-radius: 12px;
  padding: 32px;
  border-radius: 12px;
  @media screen and (min-width: 480px) {
    width: 384px;
  }
`;
export const Title = styled.h2`
  font-family: 'Jost';
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 16px;
`;
