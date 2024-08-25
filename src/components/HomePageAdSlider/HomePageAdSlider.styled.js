import styled from 'styled-components';
import { theme } from 'utils/theme';
import {
  FirstWordVariants,
  SecondWordVariants,
  ThirdWordVariants,
} from './ThirdSlideSrcs';

export const HomePageAdSliderContainer = styled.ul`
  margin-top: 30px;

  .slide {
    position: relative;
    height: 270px;
    border-radius: 15px;
    overflow: hidden;
  }
  .carousel__slide {
    background-color: #fff;
    border-radius: 15px;
    overflow: hidden;
  }
  .carousel__inner-slide {
    height: 100%;
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

  @media (max-width: 1440px) {
    .slide,
    .carousel__slider,
    .carousel__inner-slide {
      height: 125px;
    }

    .carousel__next-button,
    .carousel__back-button {
      width: 36px;
      height: 36px;
      top: 50%;
    }

    .carousel__next-button {
      right: 2px;
    }

    .carousel__back-button {
      left: 2px;
    }
  }

  @media (max-width: 672px) {
    .carousel__slide,
    .carousel__slider {
      height: 35.7vw;
    }
  }
`;

export const IntersectImage = styled.img`
  position: absolute;
  width: 38%;
  height: 120%;
  top: -35px;

  @media (max-width: 1440px) {
    top: 0;
    width: 38%;
  }

  @media (max-width: 672px) {
    width: 63.4vw;
    height: 35.7vw;
  }
`;

export const FirstSlideTitle = styled.h3`
  position: absolute;
  width: 359px;
  height: 180px;
  top: 15%;
  left: 72px;
  font: 400 40px 'Jost';
  line-height: 60px;
  color: #fff;

  @media (max-width: 1440px) {
    top: 5%;
    left: 5%;
    width: 30%;
    height: 50%;
    font: 400 26px 'Jost';
  }

  @media (max-width: 785px) {
    top: 2.5vw;
    font: 400 2.6vw 'Jost';
  }

  @media (max-width: 672px) {
    width: 42vw;
    height: 64px;
    top: 3vw;
    left: 3.57vw;
    font: 500 3.5vw 'Jost';
    line-height: 6vw;
  }
`;

export const FlagImage = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 42%;
  left: 351px;

  @media (max-width: 1440px) {
    top: 40%;
    left: 22%;
    width: 20px;
    height: 20px;
  }

  @media (max-width: 1088px) {
    left: 25%;
  }

  @media (max-width: 947px) {
    top: 7vw;
    left: 32%;
  }

  @media (max-width: 672px) {
    top: 4vw;
    left: 48vw;
    width: 6vw;
    height: 6vw;
  }
`;

export const LipGlossMockupImg = styled.img`
  position: absolute;
  width: 110px;
  height: 110px;
  left: 43%;
  transform: rotate(348deg);
  animation: 2s infinite normal lipglossrotate;

  @keyframes lipglossrotate {
    0%, 100% {
      transform: rotate(348deg);
    }

    50% {
      transform: rotate(359deg);
    }
  }

  @media (max-width: 1440px) {
    width: 65px;
    height: 65px;
  }

  @media (max-width: 672px) {
    top: 5vw;
    left: 70vw;
    width: 16.4vw;
    height: 16.4vw;
  }
`;

export const EarringsImg = styled.img`
  position: absolute;
  width: 94px;
  height: 96px;
  top: 145px;
  left: 40%;
  transform: rotate(18deg);
  animation: 2s infinite normal earringsrotate;

  @keyframes earringsrotate {
    0%, 100% {
      transform: rotate(18deg);
    }

    50% {
      transform: rotate(7deg);
    }
  }

  @media (max-width: 1440px) {
    width: 57px;
    height: 58px;
    top: 72px;
  }

  @media (max-width: 672px) {
    left: 63.4vw;
    top: 71px;
    width: 14vw;
    height: 14.3vw;
  }
`;

export const BagImg = styled.img`
  position: absolute;
  width: 124px;
  height: 172px;
  top: 26px;
  left: 52%;
  animation: 2s infinite normal bagrotate;

  @keyframes bagrotate {
    0%, 100% {
      transform: none;
    }

    50% {
      transform: rotate(10deg);
    }
  }

  @media (max-width: 1440px) {
    width: 72px;
    height: 96px;
    top: 13px;
  }

  @media (max-width: 672px) {
    top: 16vw;
    left: 3vw;
    width: 12.5vw;
    height: 17.5vw;
  }
`;

export const SocksImg = styled.img`
  position: absolute;
  width: 110px;
  top: 196px;
  left: 61%;
  animation: 2s infinite normal socksrotate;

  @keyframes socksrotate {
    0%, 100% {
      transform: none;
    }

    50% {
      transform: rotate(28deg);
    }
  }

  @media (max-width: 1440px) {
    width: 65px;
    top: 70%;
  }

  @media (max-width: 672px) {
    top: 24vw;
    left: 79.2vw;
    width: 15vw;
    height: 13.9vw;
  }
`;

export const HoodieImg = styled.img`
  position: absolute;
  width: 143px;
  height: 161px;
  top: 8px;
  left: 67%;
  transform: rotate(6deg);
  animation: 2s infinite normal hoodierotate;

  @keyframes hoodierotate {
    0%, 100% {
      transform: rotate(6deg);
    }

    50% {
      transform: rotate(-16deg);
    }
  }

  @media (max-width: 1440px) {
    width: 81px;
    height: 91px;
    top: 4px;
  }
`;

export const SofaImg = styled.img`
  position: absolute;
  width: 237px;
  height: 232px;
  top: 12px;
  left: 79%;
  transform: rotate(3deg);
  animation: 2s infinite normal sofarotate;

  @keyframes sofarotate {
    0%, 100% {
      transform: rotate(3deg);
    }

    50% {
      transform: rotate(19deg);
    }
  }

  @media (max-width: 1440px) {
    width: 128px;
    height: 126px;
    top: 6px;
  }
  
  @media (max-width: 672px) {
    width: 21vw;
    height: 21.4vw;
    top: 13.125vw;
    left: 31.2vw;
  }
`;

export const BrutalistImg = styled.img`
  position: absolute;
  width: 30vw;
  height: 261px;
  right: 0px;

  @media (max-width: 1440px) {
    width: 30%;
    height: 130px;
    top: 0px;
  }

  @media (max-width: 672px) {
    top: -2vw;
    width: 40vw;
    height: 34vw;
  }
`;

export const SecondSlideTitles = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 32vw;
  height: 112px;
  top: 4vw;
  right: 10vw;
  gap: 16px;
  text-align: right;

  @media (max-width: 1440px) {
    height: 66px;
    gap: 2px;
    top: 2vw;
  }

  @media (max-width: 747px) {
    top: 1vw;
  }

  @media (max-width: 672px) {
    top: 5vw;
    width: 75.8vw;
    height: 13.5vw;
  }
`;

export const SecondSlideFirstTitle = styled.h5`
  font: 700 28px 'Jost';
  line-height: 42px;
  height: 84px;

  @media (max-width: 1440px) {
    font: 700 14px 'Jost';
  }

  @media (max-width: 672px) {
    font: 700 4.16vw 'Jost';
  }
`;

export const SecondSlideSecondTitle = styled.p`
  font: 600 16px 'Nunito Sans';
  line-height: 10px;
  height: 20px;

  @media (max-width: 1440px) {
    font: 600 10px 'Nunito Sans';
  }

  @media (max-width: 672px) {
    font: 600 2.4vw 'Nunito Sans';
  }
`;

export const AdButtonAnimationContainer = styled.div`
  position: relative;
  top: 20px;
  left: 502px;

  @media (max-width: 1440px) {
    top: 10px;
    left: 38%;
  }
`;

export const FirstAdButtonContainer = styled.div`
  position: relative;
  opacity: 0;
  animation: 5s infinite normal firstadbuttonopacity;

  @keyframes firstadbuttonopacity {
    0% {
      opacity: 0;
    }

    30%,
    98% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @media (max-width: 1440px) {
    width: 82px;
  }

  @media (max-width: 757px) {
    top: -5px;
    width: 10vw;
  }
`;

export const FirstAdButton = styled.img`
  position: absolute;
  width: 132px;

  @media (max-width: 1440px) {
    left: -10px;
    width: 87px;
  }

  @media (max-width: 757px) {
    width: 10vw;
  }
`;

export const FirstAdButtonPointer = styled.img`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 33px;
  left: 60px;
  animation: 5s infinite normal firstadpointer;

  @keyframes firstadpointer {
    0%,
    98% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @media (max-width: 1440px) {
    width: 9px;
    height: 9px;
    top: 22px;
    left: 32px;
  }

  @media (max-width: 757px) {
    top: 1.9vw;
    left: 4vw;
  }

  @media (max-width: 482px) {
    top: 1.5vw;
  }

  @media (max-width: 390px) {
    width: 5px;
    height: 5px;
    top: 1.7vw;
  }
`;  

export const SecondAdButtonContainer = styled.div`
  position: relative;
  width: 62px;
  animation: 5s ease-in-out infinite normal secondadcontainermove;
  transform: rotate(-31deg);
  top: 32px;
  left: -4px;
  opacity: 0;

  @keyframes secondadcontainermove {
    0%,
    13% {
      top: 32px;
      left: -4px;
      opacity: 0;
      transform: rotate(-31deg);
      width: 62px;
    }

    43%, 98% {
      top: 16px;
      left: -400px;
      opacity: 1;
      transform: rotate(-2deg);
      width: 264px;
    }

    100% {
      top: 8px;
      left: -400px;
      opacity: 0;
      transform: rotate(-2deg);
      width: 132px;
    }
  }

  @media (max-width: 1440px) {
    width: 62px;
    top: 16px;
    left: 0;

    @keyframes secondadcontainermove {
      0%,
      13% {
        top: 16px;
        left: 0px;
        opacity: 0;
        transform: rotate(-31deg);
        width: 62ox;
      }

      43%,
      98% {
        top: 8px;
        left: -250px;
        opacity: 1;
        transform: rotate(-2deg);
        width: 132px;
      }

      100% {
        top: 8px;
        left: -200px;
        opacity: 0;
        transform: rotate(-2deg);
        width: 132px;
      }
    }
  }

  @media (max-width: 757px) {
    width: 9vw;

    @keyframes secondadcontainermove {
      0%, 13% {
        top: 0.2vw;
        left: 0px;
        opacity: 0;
        transform: rotate(-31deg);
        width: 9vw;
      }

      43%, 98% {
        top: 0.1vw;
        left: -25vw;
        opacity: 1;
        transform: rotate(-2deg);
        width: 18vw;
      }

      100% {
        top: 0.1vw;
        left: -25vw;
        transform: rotate(-2deg);
        width: 18vw;
        opacity: 0;
      }
    }
  }
`;

export const SecondAdButton = styled.img`
  position: absolute;
  width: 100%;
`;

export const SecondAdButtonPointer = styled.img`
  position: absolute;
  width: 25px;
  top: 60px;
  left: 80px;

  @media (max-width: 1440px) {
    width: 15px;
    top: 27px;
    left: 40px;
  }

  @media (max-width: 757px) {
    width: 2vw;
    top: 3.7vw;
  }

  @media (max-width: 482px) {
    left: 4vw;
  }
`;

export const ThirdAdButtonContainer = styled.div`
  position: absolute;
  width: 10vw;
  top: 35px;
  left: 4px;
  opacity: 0;
  transform: none;
  animation: 5s infinite normal thirdadcontainermove;

  @keyframes thirdadcontainermove {
    0%, 43% {
      width: 10vw;
      top: 32px;
      left: 4px;
      opacity: 0;
      transform: none;
    }

    68%, 98% {
      width: 25vw;
      top: 94px;
      transform: rotate(10deg);
      left: -130px;
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @media (max-width: 1440px) {
    width: 132px;

    @keyframes thirdadcontainermove {
      0%, 43% {
        top: 16px;
        left: 0;
        opacity: 0;
        transform: none;
      }

      68%, 98% {
        top: 50px;
        transform: rotate(10deg);
        left: -30px;
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }
  }

  @media (max-width: 757px) {
    width: 10vw;

    @keyframes thirdadcontainermove {
      0%, 43% {
        width: 12vw;
        top: 16px;
        left: 0;
        opacity: 0;
        transform: none;
      }

      68%, 98% {
        width: 22vw;
        top: 6vw;
        transform: rotate(10deg);
        left: -25px;
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }
  }
`;

export const ThirdAdButton = styled.img`
  position: relative;
  width: 100%;
`;

export const ThirdAdButtonPointer = styled.img`
  position: absolute;
  width: 3vw;
  top: 50%;
  left: 50%;

  @media (max-width: 1440px) {
    width: 20px;
  }

  @media (max-width: 757px) {
    top: 44%;
    width: 3vw;
  }
`;

export const BgLeftPart = styled.img`
  width: 50%;
  height: 35.7vw;
  overflow: hidden;
`;

export const BgRightPart = styled.img`
  position: absolute;
  right: 0;
  z-index: 1;
  width: 60%;
  height: 35.7vw;
  overflow: hidden;
`;

export const BgRightTitle = styled.img`
  position: absolute;
  z-index: 2;
  top: 3vw;
  width: 35vw;
  height: 9vw;
  right: 5vw;

  @media (max-width: 1440px) {
    top: 25px;
    width: 300px;
    height: 78px;
  }

  @media (max-width: 790px) {
    top: 3vw;
    width: 35vw;
    height: 9vw;
  }

  @media (max-width: 672px) {
    top: 6vw;
    width: 76.2vw;
    height: 20vw;
  }
`;

export const FirstWordImg = styled.img`
  position: absolute;
  top: 15px;
  left: 6vw;
  z-index: 2;
  height: 4.8vw;
  animation: 5s infinite normal firstwordimgsrc;
  opacity: 0;

  @keyframes firstwordimgsrc {
    0%,
    2% {
      opacity: 0;
    }

    2%,
    4%,
    6%,
    8%,
    10%,
    12%,
    14%,
    16%,
    18%,
    20%,
    22%,
    24% {
      opacity: 1;
    }

    6% {
      content: url('${FirstWordVariants.FirstWordVariant2Src}');
    }
    8% {
      content: url('${FirstWordVariants.FirstWordVariant3Src}');
    }
    10% {
      content: url('${FirstWordVariants.FirstWordVariant4Src}');
    }
    12% {
      content: url('${FirstWordVariants.FirstWordVariant5Src}');
    }
    14% {
      content: url('${FirstWordVariants.FirstWordVariant6Src}');
    }
    16% {
      content: url('${FirstWordVariants.FirstWordVariant7Src}');
    }
    18% {
      content: url('${FirstWordVariants.FirstWordVariant8Src}');
    }
    20% {
      content: url('${FirstWordVariants.FirstWordVariant9Src}');
    }
    22% {
      content: url('${FirstWordVariants.FirstWordVariant10Src}');
    }
    24%,
    92% {
      opacity: 1;
      content: url('${FirstWordVariants.FirstWordVariant11Src}');
    }
    94% {
      opacity: 0;
    }
  }

  @media (max-width: 1440px) {
    top: 5px;
    height: 38px;
  }

  @media (max-width: 790px) {
    top: 1vw;
    height: 4.8vw;
    left: 9vw;
  }

  @media (max-width: 400px) {
    left: 14vw;
  }
`;

export const SecondWordImg = styled.img`
  position: absolute;
  top: 82px;
  left: 6vw;
  z-index: 2;
  height: 4.8vw;
  animation: 5s infinite normal secondwordimgsrc;
  opacity: 0;

  @keyframes secondwordimgsrc {
    0%,
    26% {
      opacity: 0;
    }

    28%,
    30%,
    32%,
    34%,
    36%,
    38%,
    40% {
      opacity: 1;
    }

    28% {
      content: url('${SecondWordVariants.SecondWordVariant2Src}');
    }
    30% {
      content: url('${SecondWordVariants.SecondWordVariant3Src}');
    }
    32% {
      content: url('${SecondWordVariants.SecondWordVariant4Src}');
    }
    34% {
      content: url('${SecondWordVariants.SecondWordVariant5Src}');
    }
    36% {
      content: url('${SecondWordVariants.SecondWordVariant6Src}');
    }
    38% {
      content: url('${SecondWordVariants.SecondWordVariant7Src}');
    }
    40%,
    92% {
      opacity: 1;
      content: url('${SecondWordVariants.SecondWordVariant8Src}');
    }
    94% {
      opacity: 0;
    }
  }

  @media (max-width: 1440px) {
    top: 42px;
    height: 38px;
  }

  @media (max-width: 790px) {
    top: 5.5vw;
    height: 4.8vw;
    left: 9vw;
  }

  @media (max-width: 400px) {
    left: 14vw;
  }
`;

export const ThirdWordImg = styled.img`
  position: absolute;
  top: 148px;
  left: 6vw;
  z-index: 2;
  height: 4.8vw;
  animation: 5s infinite normal thirdwordimgsrc;
  opacity: 0;

  @keyframes thirdwordimgsrc {
    0%,
    40% {
      opacity: 0;
    }

    42%,
    44%,
    46%,
    48%,
    50%,
    52%,
    54% {
      opacity: 1;
    }

    42% {
      content: url('${ThirdWordVariants.ThirdWordVariant2Src}');
    }
    44% {
      content: url('${ThirdWordVariants.ThirdWordVariant3Src}');
    }
    46% {
      content: url('${ThirdWordVariants.ThirdWordVariant4Src}');
    }
    48% {
      content: url('${ThirdWordVariants.ThirdWordVariant5Src}');
    }
    50% {
      content: url('${ThirdWordVariants.ThirdWordVariant6Src}');
    }
    52% {
      content: url('${ThirdWordVariants.ThirdWordVariant7Src}');
    }
    54%,
    92% {
      opacity: 1;
      content: url('${ThirdWordVariants.ThirdWordVariant8Src}');
    }
    94% {
      opacity: 0;
    }
  }

  @media (max-width: 1440px) {
    top: 78px;
    height: 38px;
  }

  @media (max-width: 790px) {
    top: 10vw;
    height: 4.8vw;
    left: 9vw;
  }

  @media (max-width: 400px) {
    left: 14vw;
  }
`;

export const ButtonSlider = {
  color: theme.color.colorButtonText,
  '&:hover': {
    color: theme.color.colorButton,
  },
};
