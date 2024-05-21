import styled from 'styled-components';
import { theme } from 'utils/theme';
import { Field as FieldForm, Form as FormContainer } from 'formik';

export const Images = styled.div`
  display: flex;
  gap: 24px;
`;

export const ContainerAddProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;
export const Field = styled(FieldForm)`
  width: 100%;
  outline: none;
  border-radius: 6px;
  padding: 12px 12px 12px 12px;
  &:focus {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
  &[type='checkbox'] {
    height: 50px;
  }
`;
export const Form = styled(FormContainer)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  textarea {
    resize: vertical;
  }
  .input-file {
    display: none;
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
  '&:disabled': {
    color: 'black',
  },
};
export const Discount = styled.div`
  display: flex;
  gap: 12px;
`;
