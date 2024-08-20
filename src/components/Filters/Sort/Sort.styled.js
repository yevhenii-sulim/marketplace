import styled from 'styled-components';
import { theme } from 'utils/theme';

export const styleSelect = {
  position: 'relative',
  maxWidth: '300px',
  '.MuiSelect-select': {
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingRight: '0',
    paddingLeft: '12px',
    fontSize: '16px',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.25',
  },
  '& .MuiInputBase-input-MuiOutlinedInput-input': {
    paddingRight: '0',
  },
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
  align-items: center;
  gap: 17px;
  margin-left: auto;
`;
