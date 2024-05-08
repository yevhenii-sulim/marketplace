import styled from 'styled-components';

export const ContainerSlide = styled.ul`
  margin-bottom: 32px;
  .slide {
    width: 100%;
    position: relative;
  }
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
    gap: 40px;
    height: auto;
  }
  .carousel__next-button {
    display: block;
  }
  .carousel__back-button {
    display: block;
  }
  .slideInner {
    display: flex;
    justify-content: center;
  }
`;
export const TytleCategory = styled.h3`
  font-family: 'Jost';
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 32px;
`;
