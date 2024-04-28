import styled from 'styled-components';
import { Field as FieldForm, Form as FormContainer } from 'formik';
import { theme } from 'utils/theme';

export const BoxEye = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translatey(-50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ContainerForm = styled.div`
  width: 100%;
`;

export const LinkForget = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  text-align: left;
  font-weight: 600;
  color: ${({ theme }) => theme.color.colorButton};
`;

export const Field = styled(FieldForm)`
  width: 100%;
  outline: none;
  border-radius: 6px;
  padding: 12px 12px 12px 12px;
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
  .mark {
    width: 7px;
    height: 7px;
    position: absolute;
    bottom: 25%;
    left: 15px;
  }
  label + label .mark {
    bottom: 46%;
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

export const UnView = styled.span`
  position: absolute;
  transform: translate(-19%, -150%) rotate(-45deg);
  top: 50%;
  left: 0;
  width: 150%;
  height: 2px;
  background-color: ${({ theme }) => theme.color.colorMainText};
`;
