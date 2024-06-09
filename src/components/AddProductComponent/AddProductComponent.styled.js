import styled from 'styled-components';
import { theme } from 'utils/theme';
import { Field as FieldForm, Form as FormContainer } from 'formik';

export const ContainerAddProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Form = styled(FormContainer)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  textarea {
    resize: vertical;
    min-height: 50px;
    height: 144px;
  }
  .input-file {
    display: none;
  }
  label {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.44;
  }
  .mark {
    width: 7px;
    height: 7px;
    position: absolute;
  }
`;

export const IsCheckbox = styled.div`
  display: flex;
  align-items: center;
  width: 56px;
  height: 26px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.color.bgCheckbox};
  border: 4px solid ${({ theme }) => theme.color.bgCheckbox};
  border-radius: 20px;
  transition: all 1000ms ease out;
  &::before {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.bgProduct};
    transition: all 500ms ease;
    content: '';
  }
`;

export const Field = styled(FieldForm)`
  outline: none;
  border-radius: 6px;
  padding: 12px 12px 12px 12px;
  border: 1px solid ${({ theme }) => theme.color.borderSearch};
  &:focus {
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.color.borderRegister};
    border: 1px solid ${({ theme }) => theme.color.borderRegister};
  }
  &::placeholder {
    font-family: 'Nunito Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.colorTextExplainment};
  }
  &.brand {
    width: 320px;
  }
  &.color {
    display: none;
  }
  &[type='checkbox'] {
    display: none;
  }
  &[type='checkbox']:checked + .is_checked::before {
    left: calc(100% - 20px);
  }
  &[type='checkbox']:checked + .is_checked {
    background-color: ${({ theme }) => theme.color.bgButton};
    border: 4px solid ${({ theme }) => theme.color.bgButton};
  }
`;

export const WrapperField = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const Box = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  padding-bottom: 24px;
  &.price_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .checkbox {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  label {
    cursor: pointer;
  }
`;

export const ColorSign = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: ${({ $color }) => {
    if ($color === '#ffffff') return `1px solid #43C550`;
  }};
  background: ${({ $color }) => {
    if (typeof $color === 'string') return `${$color}`;
    return `radial-gradient(${$color[0]}, ${$color[1]})`;
  }};
`;

export const Price = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  align-items: flex-end;
  &.price {
    width: 320px;
  }
  .is_discount {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: -50px;
    transform: translateY(-50%);
    width: 21px;
    height: 21px;
    border-radius: 3px;
    border: 2px solid ${({ theme }) => theme.color.bgButton};
  }
  .MuiSvgIcon-root {
    width: 16px;
    height: 16px;
    color: transparent;
  }
  input[type='checkbox']:checked + .is_discount .MuiSvgIcon-root {
    color: ${({ theme }) => theme.color.bgButton};
  }
`;

export const LabelSign = styled.p`
  position: relative;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.44;
`;

export const Sign = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.44;
  margin-bottom: 8px;
`;

export const Explainment = styled.p`
  color: ${({ theme }) => theme.color.colorTextExplainment};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  &.sign_checkbox {
    width: 60%;
  }
`;
export const ExplainmentInputSign = styled.p`
  font-size: 12px;
  line-height: 1.5;
`;
export const SelectorsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 40px;
`;

export const FieldImagesList = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

export const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const addImageSignButton = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};
export const AddImageList = styled.li`
  width: 126px;
  height: 126px;
  border: 1px solid ${({ theme }) => theme.color.colorTextStartUserPage};
  border-radius: 4px;
  overflow: hidden;
`;
export const AddImageButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 18px;
  background-color: ${({ $fullUpFul, theme }) =>
    $fullUpFul ? 'rgba(250, 0, 0, .8)' : theme.color.bgAddImage};
  &:hover {
    box-shadow: 0 4px 8px ${({ theme }) => theme.color.bgButton};
  }
`;

export const TextCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
`;
export const addProductButton = {
  width: '264px',
  fontSize: '22px',
  fontWeight: '700',
  fontFamily: 'Jost',
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
export const viewProductButton = {
  display: 'flex',
  textTransform: 'capitalize',
  alignItems: 'center',
  width: '264px',
  fontSize: '22px',
  fontWeight: '700',
  bgcolor: `${theme.color.bgProduct}`,
  borderRadius: '8px',
  height: '48px',
  padding: '0',
  fontFamily: 'Jost',
  lineHeight: '1.45',
  outline: 'none',
  color: `${theme.color.bgHeader}`,
  border: `1px solid ${theme.color.bgButton}`,
  '&:hover': {
    color: `${theme.color.colorSecondText}`,
    bgcolor: `${theme.color.bgButtonHover}`,
    border: 'none',
  },
  '&:active': {
    boxShadow: `inset 0 0 5px 0px ${theme.color.bgHeader}`,
  },
};

export const styleSelect = {
  width: '100%',
  maxWidth: '300px',
  'em, span': {
    fontSize: '16px',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    color: `${theme.color.colorTextExplainment}`,
  },
  '.MuiInputBase-root': {
    fontSize: '16px',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.25',
    color: `${theme.color.colorTextExplainment}`,
    borderRadius: '6px',
    border: 'none',
  },
  '.arrow_select': {
    lineHeight: '0',
    transform: 'rotate(180deg)',
  },
  '[aria-expanded="true"]~.arrow_select': {
    transform: 'rotate(0deg)',
  },
  '.MuiSelect-select': {
    padding: '8px 12px',
    fontSize: '16px',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.25',
  },
  '[aria-expanded="true"]~.MuiOutlinedInput-notchedOutline': {
    boxShadow: `inset 0 0 0 3px ${theme.color.borderRegister}`,
    border: `1px solid ${theme.color.borderRegister}`,
  },
  '.Mui-focused .MuiOutlinedInput-notchedOutline': {
    boxShadow: `inset 0 0 0 3px ${theme.color.borderRegister}`,
    border: 'none',
  },
};

export const styleRemoveImgButton = {
  position: 'absolute',
  color: `${theme.color.bgButton}`,
  bgcolor: `${theme.color.bgBackdrop}`,
  borderRadius: '6px',
  zIndex: '2',
  top: '10px',
  right: '10px',
};
