import styled from 'styled-components';
export const FormSearch = styled.form`
  width: 433px;
  height: 48px;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 8px 8px 8px 24px;
    background-color: ${({ theme }) => theme.color.bgCommon};
    border: 1px solid ${({ theme }) => theme.color.borderSearch};
    outline: none;
    &:placeholder {
      font-size: 18px;
      line-height: 1.44;
      color: ${({ theme }) => theme.color.borderSearch};
    }
  }
  button {
    background-color: ${({ theme }) => theme.color.bgButton};
    color: ${({ theme }) => theme.color.colorButtonText};
    font-weight: 700;
    line-height: 1.25;
    border-radius: 8px;
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 6px 12px;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translatey(-50%);
    &:active {
      box-shadow: inset 0 0 3px ${({ theme }) => theme.color.colorButtonText};
    }
  }
  svg {
    fill: ${({ theme }) => theme.color.colorButtonText};
  }
`;
