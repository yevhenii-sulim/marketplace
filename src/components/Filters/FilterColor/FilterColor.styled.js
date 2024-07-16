import styled from 'styled-components';
import { theme } from 'utils/theme';

export const Container = styled.div`
  /* color:inherit */
`;

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
  },
  '.MuiInputBase-root': {
    fontSize: '16px',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: '1.25',
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
    padding: '8px 12px 8px 0',
    fontSize: '16px',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.25',
  },
  '[aria-expanded="true"]~.MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
};
export const ColorSign = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: ${({ $color }) => {
    console.log($color);

    if ($color.toLowerCase() === '#ffffff') return `1px solid #43C550`;
  }};
  background: ${({ $color }) => {
    if (typeof $color === 'string') return `${$color}`;
    return `radial-gradient(${$color[0]}, ${$color[1]})`;
  }};
`;
