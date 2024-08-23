import styled from 'styled-components';
import { theme } from 'utils/theme';

export const ContainerSlide = styled.ul`
  margin-bottom: 32px;
  padding-left: 12px;
  padding-right: 12px;

  @media screen and (min-width: 1440px) {
    padding-left: 58px;
    padding-right: 58px;
  }
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
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.bgButton};
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    pointer-events: all;
    transition: opacity 500ms ease;
    &:disabled {
      opacity: 0;
      pointer-events: none;
    }
  }
  .carousel__back-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.bgButton};
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    pointer-events: all;
    transition: opacity 500ms ease;
    &:disabled {
      opacity: 0;
      pointer-events: none;
    }
  }
  .slideInner {
    display: flex;
    justify-content: center;
  }
`;
export const TitleCategory = styled.h3`
  font-family: 'Jost';
  user-select: none;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 32px;
`;
export const ButtonSlider = {
  color: theme.color.colorButtonText,
  '&:hover': {
    color: theme.color.colorButton,
  },
};
