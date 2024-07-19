import styled from 'styled-components';

export const Container = styled.li`
  [type='checkbox'] {
    display: none;
  }
  [type='checkbox']:checked + label:before {
    background-color: red;
  }
  h3 {
    position: relative;
    font-family: Jost;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.45;
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
export const SignState = styled.label`
  position: relative;
  font-size: 18px;
  line-height: 26px;
  padding-left: 30px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  &::before {
    content: '';
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
