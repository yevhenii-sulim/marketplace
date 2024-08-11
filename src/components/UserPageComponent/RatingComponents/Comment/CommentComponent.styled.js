import styled from 'styled-components';
import { theme } from 'utils/theme';

export const stayInButton = {
  padding: '8px 76px',
  marginLeft: 'auto',
  alignSelf: 'flex-end',
  fontSize: '18px',
  whiteSpace: 'nowrap',
  fontWeight: '800',
  fontFamily: 'Nunito Sans',
  color: theme.color.colorButtonText,
  bgcolor: theme.color.bgButton,
  borderRadius: '6px',
  textAlign: 'center',
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
export const WrapperComment = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
  .comment {
    width: 100%;
    min-height: 156px;
    margin-top: 32px;
    resize: vertical;
    font-size: 18px;
    font-weight: 400;
    line-height: 144%;
    border-radius: 6px;
    outline: none;
    padding: 16px;
    margin-bottom: 16px;
    &::placeholder {
      color: ${({ theme }) => theme.color.colorTextExplainment};
      font-family: 'Nunito Sans';
      font-size: 16px;
      font-weight: 400;
      line-height: 1.25;
    }
    focus {
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.bgButton};
    }
  }
`;
