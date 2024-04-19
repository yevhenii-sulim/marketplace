import styled from 'styled-components';
import { Link as LinkAgree } from 'react-router-dom';
import {
  ErrorMessage as ErrorForm,
  Field as FieldForm,
  Form as FormContainer,
} from 'formik';
export const ContainerForm = styled.div`
  width: 100%;
`;
export const BoxEye = styled.button`
  position: absolute;
  top: 72%;
  right: 12px;
  transform: translatey(-50%);
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;
export const Link = styled(LinkAgree)`
  color: ${({ theme }) => theme.color.colorTextRegistr};
  text-decoration: none;
`;

export const ErrorMessage = styled(ErrorForm)`
  position: absolute;
  right: 0;
  top: 0;
  color: ${({ theme }) => theme.color.colorTextErrorForm};
`;
export const Field = styled(FieldForm)`
  width: 100%;
  border-radius: 6px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 12px;
  padding-left: 28px;
`;
export const Form = styled(FormContainer)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  label {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: 700;
  }
  .mark {
    width: 7px;
    height: 7px;
    position: absolute;
    bottom: 25%;
    left: 15px;
  }
  .rules {
    font-weight: 400;
  }
`;
export const Send = styled.button`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.colorButtonText};
  background: ${({ theme }) => theme.color.bgButton};
  border-radius: 6px;
  padding: 8px 0;
  text-align: center;
  line-height: 1.4;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:active:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.colorTextRegistr};
  }
`;
export const View = styled.span`
  position: absolute;
  transform: translate(-19%, -150%) rotate(-45deg);
  top: 50%;
  left: 0;
  width: 150%;
  height: 2px;
  background-color: ${({ theme }) => theme.color.colorMainText};
`;
