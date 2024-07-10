import styled from 'styled-components';
import { Field as FieldInput } from 'formik';
import { theme } from 'utils/theme';

export const Field = styled(FieldInput)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  border: 1px solid rgba(118, 118, 118, 0.4);
  outline: none;
  background: ${({ theme }) => theme.color.bgAddImage};
  &:focus {
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.color.borderRegister};
    border-color: transparent;
  }
  &.apartment {
    background: transparent;
    padding: 8px 12px;
  }
  &.street {
    background: transparent;
    padding: 8px 12px;
    width: 100%;
  }
  &.building {
    background: transparent;
    padding: 8px 12px;
  }
  &.floor {
    background: transparent;
    padding: 8px 12px;
  }
  &.town {
    width: 100%;
    background: transparent;
    padding: 8px 12px;
  }
`;
export const Box = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  padding-bottom: 24px;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  &.delivery {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  label {
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.44;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
export const TitleBox = styled.h2`
  font-family: Jost;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.5; /* 150% */
`;
export const WrapperForm = styled.div`
  &.wrapper-contacts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  &.wrapper-delivery {
    display: flex;
    flex-direction: column;
    gap: 24px;
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

  .checkbox {
    position: relative;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 40px;
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.color.bgLabelDelivery};
    background: ${({ theme }) => theme.color.bgAddImage};
    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ffffff;
      border: 1px solid #000000;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
    }
  }
  input[type='radio'] {
    display: none;
  }
  input[type='radio']:checked + label:before {
    background-color: #00ff00;
  }
  input[type='radio']:checked + label {
    background-color: ${({ theme }) => theme.color.bgFooter};
  }
`;
export const styleSelect = {
  position: 'relative',
  width: '100%',
  '.error': {
    position: 'absolute',
    bottom: '48px',
    right: '0',
    color: `${theme.color.colorTextErrorForm}`,
  },
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

export const WrapperTown = styled.div`
  position: relative;
  width: 100%;
`;
export const ListTown = styled.ul`
  position: absolute;
  top: calc(100% + 24px);
  z-index: 2;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.color.colorTextStartUserPage};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  padding-bottom: 24px;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  max-height: 400px;
  overflow-y: auto;
  li {
    padding: 8px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1, 44;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.color.borderRegister};
    }
  }
`;

export const PlaceAddress = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;
