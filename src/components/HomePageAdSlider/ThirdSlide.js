import { Slide } from "pure-react-carousel";
import BgLeftPartSrc from './SliderElements/ThirdSlide/istockphoto-922897188-2048x2048 1.png';
import BgRightPartSrc from './SliderElements/ThirdSlide/pexels-pixabay-235525 1.png';
import BgRightTitleSrc from './SliderElements/ThirdSlide/Frame 48096996.png';
import { BgLeftPart, BgRightPart, BgRightTitle, FirstWordImg, SecondWordImg, ThirdWordImg } from "./HomePageAdSlider.styled";
import { FirstWordVariants, SecondWordVariants, ThirdWordVariants } from "./ThirdSlideSrcs";

export default function ThirdSlide() {

  return (
    <Slide>
      <BgLeftPart src={BgLeftPartSrc} alt="bg left part" />
      <BgRightPart src={BgRightPartSrc} alt="bg right part" />
      <BgRightTitle src={BgRightTitleSrc} alt="bg right title" />
      <FirstWordImg src={FirstWordVariants.FirstWordVariant1Src} alt="first word" />
      <SecondWordImg src={SecondWordVariants.SecondWordVariant1Src} alt="second word" />
      <ThirdWordImg src={ThirdWordVariants.ThirdWordVariant1Src} alt="third word" />
    </Slide>
  )
}