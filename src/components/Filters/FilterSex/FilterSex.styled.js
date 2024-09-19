import styled from 'styled-components';

export const Container = styled.li`
  [type='checkbox'] {
    display: none;
  }
  [type='checkbox']:checked + label:before {
    color: ${({ theme }) => theme.color.borderRegister};
  }
  h3 {
    position: relative;
    font-family: Jost;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.45;
    cursor: pointer;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const ButtonExpand = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
  background-color: transparent;
  transform: translateY(-50%);
  font-size: 0;
`;
export const SignSex = styled.label`
  position: relative;
  font-size: 18px;
  line-height: 26px;
  padding-left: 30px;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  &::before {
    content: '✓';
    display: flex;
    justify-content: center;
    align-items: center;
    color: transparent;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    border: 1px solid ${({ theme }) => theme.color.borderRegister};
    border-radius: 3px;
  }
`;
export const SexList = styled.div`
  padding-top: 8px;
`;
