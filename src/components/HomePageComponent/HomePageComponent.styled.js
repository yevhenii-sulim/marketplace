import styled from 'styled-components';
import { theme } from 'utils/theme';

export const ContainerSlide = styled.ul`
  margin-bottom: 32px;
  .slider {
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
    display: none;
    &:disabled {
      opacity: 0;
      pointer-events: none;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.bgButton};
      top: -40px;
      right: 40px;
      transform: translateY(-50%);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
      pointer-events: all;
      transition: opacity 500ms ease;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
      top: 50%;
      right: 10px;
    }
  }
  .carousel__back-button {
    display: none;
    &:disabled {
      opacity: 0;
      pointer-events: none;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.bgButton};
      top: -40px;
      left: 81%;
      transform: translateY(-50%);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
      pointer-events: all;
      transition: opacity 500ms ease;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
      top: 50%;
      left: 10px;
    }
  }
  .slideInner {
    display: flex;
    justify-content: center;
  }
`;
export const TitleCategory = styled.h3`
  font-family: Jost;
  font-size: 24px;
  font-weight: 700;
  line-height: 1, 33; /* 133.333% */
  margin-bottom: 16px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 28px;
    line-height: 1.5; /* 150% */
    margin-bottom: 32px;
  }
`;
export const ButtonSlider = {
  color: theme.color.colorButtonText,
  '&:hover': {
    color: theme.color.colorButton,
  },
};

export const Pointer = styled.ul`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 4px;
  li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.bgCommon};
    & + li {
      background-color: ${({ theme }) => theme.color.bgButton};
    }
    & + li + li {
      background-color: ${({ theme }) => theme.color.bgCommon};
    }
  }
`;
