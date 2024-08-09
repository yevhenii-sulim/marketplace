import { Slide } from "pure-react-carousel";
import IntersectSrc from './SliderElements/FirstSlide/Intersect.png';
import FlagSrc from './SliderElements/FirstSlide/Flag.png';
import LipGlossMockupSrc from './SliderElements/FirstSlide/lip-gloss-mockup_0015_130-nude 1.png';
import EarringsSrc from './SliderElements/FirstSlide/Знімок екрана 2024-07-20 194035 (1) 1.png';
import BagSrc from './SliderElements/FirstSlide/file 1.png';
import SocksSrc from './SliderElements/FirstSlide/Знімок екрана 2024-07-20 192305 1.png';
import HoodieSrc from './SliderElements/FirstSlide/Знімок екрана 2024-07-20 193056 (1) 1.png';
import SofaSrc from './SliderElements/FirstSlide/Picture.png';
import { BagImg, EarringsImg, FirstSlideTitle, FlagImage, HoodieImg, IntersectImage, LipGlossMockupImg, SocksImg, SofaImg } from "./HomePageAdSlider.styled";

export default function FirstSlide() {
  return (
    <Slide>
      <IntersectImage src={IntersectSrc} alt="intersect" />
      <FirstSlideTitle>
        Придбайте товари від українських виробників
      </FirstSlideTitle>
      <FlagImage src={FlagSrc} alt="flag" />
      <LipGlossMockupImg src={LipGlossMockupSrc} alt="lip gloss mockup" />
      <EarringsImg src={EarringsSrc} alt="earrings" />
      <BagImg src={BagSrc} alt="bag" />
      <SocksImg src={SocksSrc} alt="socks" />
      <HoodieImg src={HoodieSrc} alt="hoodie" />
      <SofaImg src={SofaSrc} alt="sofa" />
    </Slide>
  )
}