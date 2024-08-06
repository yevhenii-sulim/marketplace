import styled from "styled-components";
import { theme } from "utils/theme";
import { FirstWordVariants, SecondWordVariants, ThirdWordVariants } from "./ThirdSlideSrcs";

export const HomePageAdSliderContainer = styled.ul`
  margin-top: 30px;
  .slide {
    position: relative;
    height: 270px;
  }
  .carousel__slide {
    background-color: #fff;
  }
  .carousel__inner-slide {
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
`;

export const IntersectImage = styled.img`
  position: absolute;
  width: 505px;
  height: 290px;
  top: -35px;
`;

export const FirstSlideTitle = styled.h3`
  position: absolute;
  width: 359px;
  height: 180px;
  top: 26px;
  left: 72px;
  font: 400 40px 'Jost';
  line-height: 60px;
  color: #fff;
`;

export const FlagImage = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 105px;
  left: 351px;
`;

export const LipGlossMockupImg = styled.img`
  position: absolute;
  width: 110px;
  height: 110px;
  left: 568px;
  transform: rotate(348deg);
  animation: 2s infinite normal lipglossrotate;

  @keyframes lipglossrotate {
    0% {
      transform: rotate(348deg);
    }

    50% {
      transform: rotate(359deg);
    }

    100% {
      transform: rotate(348deg);
    }
  } 
`;

export const EarringsImg = styled.img`
  position: absolute;
  width: 94px;
  height: 96px;
  top: 125px;
  left: 535px;
  transform: rotate(18deg);
  animation: 2s infinite normal earringsrotate;

  @keyframes earringsrotate {
    0% {
      transform: rotate(18deg);
    }

    50% {
      transform: rotate(7deg);
    }

    100% {
      transform: rotate(18deg);
    }
  }
`;

export const BagImg = styled.img`
  position: absolute;
  width: 124px;
  height: 172px;
  top: 26px;
  left: 688px;
  animation: 2s infinite normal bagrotate;

  @keyframes bagrotate {
    0% {
      transform: none;
    }

    50% {
      transform: rotate(10deg);
    }

    100% {
      transform: none;
    }
  }
`;

export const SocksImg = styled.img`
  position: absolute;
  width: 110px;
  top: 166px;
  left: 805px;
  animation: 2s infinite normal socksrotate;

  @keyframes socksrotate {
    0% {
      transform: none;
    }

    50% {
      transform: rotate(28deg);
    }

    100% {
      transform: none;
    }
  }
`;

export const HoodieImg = styled.img`
  position: absolute;
  width: 143px;
  height: 161px;
  top: 8px;
  left: 860px;
  transform: rotate(6deg);
  animation: 2s infinite normal hoodierotate;

  @keyframes hoodierotate {
    0% {
      transform: rotate(6deg);
    }

    50% {
      transform: rotate(-16deg);
    }

    100% {
      transform: rotate(6deg);
    }
  }
`;

export const SofaImg = styled.img`
  position: absolute;
  width: 237px;
  height: 232px;
  top: 12px;
  left: 1036px;
  transform: rotate(3deg);
  animation: 2s infinite normal sofarotate;

  @keyframes sofarotate {
    0% {
      transform: rotate(3deg);
    }

    50% {
      transform: rotate(19deg);
    }

    100% {
      transform: rotate(3deg);
    }
  }
`;


export const BrutalistImg = styled.img`
  position: absolute;
  width: 401px;
  height: 261px;
  top: -32px;
  right: 0px;
`;

export const SecondSlideTitles = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 475px;
  height: 112px;
  top: 60px;
  left: 785px;
  gap: 8px;
  text-align: right;
`;

export const SecondSlideFirstTitle = styled.h5`
  font: 700 28px 'Jost';
  line-height: 42px;
  height: 84px;
`;

export const SecondSlideSecondTitle = styled.p`
  font: 600 16px 'Nunito Sans';
  line-height: 20px;
  height: 20px;
`;

export const AdButtonAnimationContainer = styled.div`
  position: relative;
  top: 20px;
  left: 502px;
`;

export const FirstAdButtonContainer = styled.div`
  position: relative;
`;

export const FirstAdButton = styled.img`
  position: absolute;
  width: 125px;
  opacity: 0;
  animation: 5s infinite normal firstadbuttonopacity;

  @keyframes firstadbuttonopacity {
    0% {
      opacity: 0;
    }

    30%, 98% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;

export const FirstAdButtonPointer = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 32px;
  left: 65px;
  animation: 5s infinite normal firstadpointer;

  @keyframes firstadpointer {
    0%, 98% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;

export const SecondAdButtonContainer = styled.div`
  position: absolute;
  width: 125px;
  animation: 5s ease-in-out infinite normal secondadcontainermove;
  transform: rotate(-31deg);
  top: 32px;
  left: -4px;
  opacity: 0;

  @keyframes secondadcontainermove {
    0%, 13% {
      top: 32px;
      left: -4px;
      opacity: 0;
      transform: rotate(-31deg);
      width: 125px;
    }

    43%, 98% {
      top: 8px;
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
      width: 264px;
    }
  }
`;

export const SecondAdButton = styled.img`
  position: relative;
  width: 100%;
`;

export const SecondAdButtonPointer = styled.img`
  position: absolute;
  width: 17px;
  top: 32px;
  left: 65px;
  opacity: 1;
  animation: 5s infinite normal secondadpointer;

  @keyframes secondadpointer {
    0%, 13% {
      top: 32px;
      opacity: 1;
    }

    43%, 98% {
      top: 54px;
      opacity: 1;
    }

    100% {
      top: 54px;
      opacity: 0;
    }
  }
`;

export const ThirdAdButtonContainer = styled.div`
  position: absolute;
  width: 125px;
  top: 32px;
  left: -4px;
  opacity: 0;
  transform: none;
  animation: 5s infinite normal thirdadcontainermove;

  @keyframes thirdadcontainermove {
    0%, 43% {
      width: 125px;
      top: 32px;
      left: -4px;
      opacity: 0;
      transform: none;
    }

    68%, 98% {
      width: 342px;
      top: 94px;
      transform: rotate(10deg);
      left: -130px;
      opacity: 1;
    }

    100% {
      width: 342px;
      top: 94px;
      transform: rotate(10deg);
      left: -130px;
      opacity: 0;
    }
  }
`;

export const ThirdAdButton = styled.img`
  position: relative;
  width: 100%;
`;

export const ThirdAdButtonPointer = styled.img`
  position: absolute;
  width: 17px;
  top: 32px;
  left: 65px;
  opacity: 1;
  animation: 5s infinite normal thirdadpointer;

  @keyframes thirdadpointer {
    0%, 43% {
      top: 32px;
      left: 65px;
      opacity: 1;     
    }

    68%, 98% {
      top: 68px;
      left: 250px;
      width: 27px;
      opacity: 1;
    }

    100% {
      top: 68px;
      left: 250px;
      width: 27px;
      opacity: 0;
    }
  }
`;


export const BgLeftPart = styled.img`
  width: 50%;
  height: 100%;
  overflow: hidden;
`;

export const BgRightPart = styled.img`
  position: absolute;
  right: 0;
  z-index: 1;
  width: 60%;
  height: 100%;
  overflow: hidden;
`;

export const BgRightTitle = styled.img`
  position: absolute;
  z-index: 2;
  top: 50px;
  left: 752px;
  width: 512px;
  height: 132px;
`;

export const FirstWordImg = styled.img`
  position: absolute;
  top: 17px;
  left: 69px;
  height: 68px;
  animation: 5s infinite normal firstwordimgsrc;
  opacity: 0;

  @keyframes firstwordimgsrc {
    0%, 2% { opacity: 0; }

    2%, 4%, 6%, 8%, 10%, 12%, 14%, 16%, 18%, 20%, 22%, 24% { opacity: 1; }

    6% { content: url("${FirstWordVariants.FirstWordVariant2Src}"); }
    8% { content: url("${FirstWordVariants.FirstWordVariant3Src}"); }
    10% { content: url("${FirstWordVariants.FirstWordVariant4Src}"); }
    12% { content: url("${FirstWordVariants.FirstWordVariant5Src}"); }
    14% { content: url("${FirstWordVariants.FirstWordVariant6Src}"); }
    16% { content: url("${FirstWordVariants.FirstWordVariant7Src}"); }
    18% { content: url("${FirstWordVariants.FirstWordVariant8Src}"); }
    20% { content: url("${FirstWordVariants.FirstWordVariant9Src}"); }
    22% { content: url("${FirstWordVariants.FirstWordVariant10Src}"); }
    24%, 92% { 
      opacity: 1;
      content: url("${FirstWordVariants.FirstWordVariant11Src}"); 
    }
    94% { opacity: 0; }
  }
`;

export const SecondWordImg = styled.img`
  position: absolute;
  top: 78px;
  left: 69px;
  height: 68px;
  animation: 5s infinite normal secondwordimgsrc;
  opacity: 0;

  @keyframes secondwordimgsrc {
    0%, 26% { opacity: 0; }

    28%, 30%, 32%, 34%, 36%, 38%, 40% { opacity: 1; }

    28% { content: url("${SecondWordVariants.SecondWordVariant2Src}"); }
    30% { content: url("${SecondWordVariants.SecondWordVariant3Src}"); }
    32% { content: url("${SecondWordVariants.SecondWordVariant4Src}"); }
    34% { content: url("${SecondWordVariants.SecondWordVariant5Src}"); }
    36% { content: url("${SecondWordVariants.SecondWordVariant6Src}"); }
    38% { content: url("${SecondWordVariants.SecondWordVariant7Src}"); }
    40%, 92% {
      opacity: 1; 
      content: url("${SecondWordVariants.SecondWordVariant8Src}"); 
    }
    94% { opacity: 0; }
  }
`;

export const ThirdWordImg = styled.img`
  position: absolute;
  top: 139px;
  left: 69px;
  height: 68px;
  animation: 5s infinite normal thirdwordimgsrc;
  opacity: 0;

  @keyframes thirdwordimgsrc {
    0%, 40% { opacity: 0; }

    42%, 44%, 46%, 48%, 50%, 52%, 54% { opacity: 1; }

    42% { content: url("${ThirdWordVariants.ThirdWordVariant2Src}"); }
    44% { content: url("${ThirdWordVariants.ThirdWordVariant3Src}"); }
    46% { content: url("${ThirdWordVariants.ThirdWordVariant4Src}"); }
    48% { content: url("${ThirdWordVariants.ThirdWordVariant5Src}"); }
    50% { content: url("${ThirdWordVariants.ThirdWordVariant6Src}"); }
    52% { content: url("${ThirdWordVariants.ThirdWordVariant7Src}"); }
    54%, 92% { 
      opacity: 1;
      content: url("${ThirdWordVariants.ThirdWordVariant8Src}"); 
    }
    94% { opacity: 0; }
  }
`;

export const ButtonSlider = {
  color: theme.color.colorButtonText,
  '&:hover': {
    color: theme.color.colorButton,
  },
};