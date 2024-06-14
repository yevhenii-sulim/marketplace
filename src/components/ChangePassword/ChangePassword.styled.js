import styled from 'styled-components';
import {
  Field as FieldForm,
  Form as FormContainer,
  ErrorMessage as ErrorForm,
} from 'formik';
import { theme } from 'utils/theme';

export const ContainerForm = styled.div`
  width: 300px;
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
export const ErrorMessage = styled(ErrorForm)`
  color: ${({ theme }) => theme.color.colorTextErrorForm};
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
