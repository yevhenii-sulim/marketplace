import styled from 'styled-components';
import { Link as LinkAgree } from 'react-router-dom';
import {
  ErrorMessage as ErrorForm,
  Field as FieldForm,
  Form as FormContainer,
} from 'formik';
import { theme } from 'utils/theme';

export const ContainerForm = styled.div`
  width: 100%;
`;
export const FieldPassword = styled.div`
  position: relative;
`;
export const BoxEye = styled.button`
  position: absolute;
  top: 50%;
  font-size: 0;
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
  color: ${({ theme }) => theme.color.colorTextErrorForm};
`;
export const Field = styled(FieldForm)`
  width: 100%;
  border-radius: 6px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 12px;
  padding-left: 12px;
  outline: none;
  &:focus {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
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
  .label-place {
    position: relative;
  }
  .mark {
    width: 7px;
    height: 7px;
    position: absolute;
    top: 15%;
    right: -10px;
  }
  .rules {
    font-weight: 400;
  }
`;
export const socialSingInButton = {
  width: '100%',
  fontSize: '18px',
  fontWeight: '700',
  color: theme.color.colorButtonText,
  bgcolor: theme.color.bgButton,
  borderRadius: '6px',
  textAlign: 'center',
  padding: '8px 0px',
  lineHeight: 1.4,
  textTransform: 'none',
  translate: 'all 100ms ease',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    bgcolor: theme.color.bgButton,
  },
  '&:active': {
    boxShadow: 'none',
  },
};

export const View = styled.span`
  position: absolute;
  transform: translate(-19%, -150%) rotate(-45deg);
  top: 50%;
  left: 0;
  width: 150%;
  height: 2px;
  background-color: ${({ theme }) => theme.color.colorMainText};
`;
