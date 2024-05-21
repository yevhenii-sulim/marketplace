import Notiflix from 'notiflix';
import styled from 'styled-components';
export const Wrapper = styled.div``;
Notiflix.Notify.init({
  width: '300px',
  position: 'center-center', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '100px',
  timeout: 6000,
  fontFamily: 'Jost',
  fontSize: '18px',
  closeButton: true,
});
