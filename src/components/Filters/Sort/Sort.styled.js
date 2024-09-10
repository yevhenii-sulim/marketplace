import styled from 'styled-components';
import { theme } from 'utils/theme';

const view = window.innerWidth;
function setPadding() {
  if (view < 1440) {
    return '0';
  }
}
export const Container = styled.form`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    margin-left: auto;
  }
`;
export const ButtonSort = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border-radius: 12px;
  border: 1px solid rgba(73, 73, 73, 0.4);
  color: ${({ theme }) => theme.color.colorTextExplainment};
`;
export const ButtonFilters = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;
  background-color: ${({ theme }) => theme.color.bgProduct};
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border-radius: 12px;
  border: 1px solid rgba(73, 73, 73, 0.4);
  color: ${({ theme }) => theme.color.colorTextExplainment};
`;
export const Option = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
  justify-content: center;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: none;
  }
`;
export const WrapperSortDesktop = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: flex;
    align-items: center;
    gap: 17px;
    background-color: ${({ theme }) => theme.color.bgProduct};
    border-radius: 12px;
    background-color: transparent;
  }
`;

export const styleSelect = {
  position: 'relative',
  maxWidth: '300px',
  width: '160px',
  '.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input':
    {
      paddingRight: setPadding(),
    },
  '.MuiSelect-select': {
    paddingTop: '8px',
    paddingBottom: '8px',
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
    borderRadius: `${(() => {
      if (view < 1440) {
        return '12px';
      }
      return '6px';
    })()}`,
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
