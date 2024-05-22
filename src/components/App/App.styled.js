import Notiflix from 'notiflix';
import styled from 'styled-components';
import { theme } from 'utils/theme';
export const Wrapper = styled.div``;
Notiflix.Notify.init({
  width: '300px',
  position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '100px',
  timeout: 3000,
  fontFamily: 'Jost',
  fontSize: '18px',
  closeButton: false,
  success: {
    background: theme.color.bgHeader,
  },
});
