import styled from 'styled-components';
import { theme } from 'utils/theme';

export const styleSelect = {
  position: 'relative',
  width: '100%',
  maxWidth: '300px',
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

export const SortText = styled.p`
  font-size: 18px;
  line-height: 1.44;
`;

export const Container = styled.form`
  display: flex;
  gap: 17px;
  justify-content: center;
  max-width: 300px;
  width: 100%;
  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
  }
`;
