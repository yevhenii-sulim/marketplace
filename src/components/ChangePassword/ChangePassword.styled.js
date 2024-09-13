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
  .rule {
    color: ${({ theme }) => theme.color.colorRulePassword};
    font-size: 14px;
  }
  li.rule {
    ${rule => console.log(rule)}
    list-style: inside;
  }
  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
  }

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
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25; /* 125% */
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

export const cancelButton = {
  textTransform: 'none',
  display: 'flex',
  alignItems: 'center',
  bgcolor: theme.color.bgProduct,
  borderRadius: '6px',
  padding: '8px 0',
  fontFamily: 'Jost',
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '1.4',
  outline: 'none',
  color: theme.color.bgHeader,
  boxShadow: `inset 0 0 0 1px ${theme.color.bgButton}`,
  '&:hover': {
    color: theme.color.colorButtonText,
    backgroundColor: theme.color.bgButtonHover,
  },
  '&:active': {
    boxShadow: `inset 0 0 5px 0px ${theme.color.bgHeader}`,
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
export const FieldPassword = styled.div`
  position: relative;
`;
