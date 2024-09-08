import Notiflix from 'notiflix';
import styled from 'styled-components';
import { theme } from 'utils/theme';
export const Wrapper = styled.div``;
Notiflix.Notify.init({
  width: '320px',
  position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  timeout: 7000,
  fontFamily: 'Jost',
  fontSize: '18px',
  success: {
    background: theme.color.bgHeader,
  },
  info: {
    background: theme.color.bgHeader,
    textAlign: 'center',
  },
});
