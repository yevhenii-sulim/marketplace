import { Slide } from "pure-react-carousel";
import IntersectSrc from './SliderElements/FirstSlide/Intersect.png';
import FlagSrc from './SliderElements/FirstSlide/Flag.png';
import LipGlossMockupSrc from './SliderElements/FirstSlide/lip-gloss-mockup_0015_130-nude 1.png';
import EarringsSrc from './SliderElements/FirstSlide/Знімок екрана 2024-07-20 194035 (1) 1.png';
import BagSrc from './SliderElements/FirstSlide/file 1.png';
import SocksSrc from './SliderElements/FirstSlide/Знімок екрана 2024-07-20 192305 1.png';
import HoodieSrc from './SliderElements/FirstSlide/Знімок екрана 2024-07-20 193056 (1) 1.png';
import SofaSrc from './SliderElements/FirstSlide/Picture.png';
import AdaptiveIntersectSrc from './AdaptiveSliderElements/Frame 48097078.png';
import AdaptiveSocksSrc from './AdaptiveSliderElements/Знімок екрана 2024-07-20 192305 1.png';
import { BagImg, EarringsImg, FirstSlideTitle, FlagImage, HoodieImg, IntersectImage, LipGlossMockupImg, SocksImg, SofaImg } from "./HomePageAdSlider.styled";
import useWindowDimensions from "hooks/useWindowDimensions";

export default function FirstSlide() {

  const { width } = useWindowDimensions();

  return (
    <Slide>
      <IntersectImage src={width <= 672 ? AdaptiveIntersectSrc : IntersectSrc} alt="intersect" />
      <FirstSlideTitle>
        {width > 672 ? (
          <>
            Придбайте товари <br /> від українських <br /> виробників
          </>
        ) : 'Придбайте товари від українських виробників'}
      </FirstSlideTitle>
      <FlagImage src={FlagSrc} alt="flag" />
      <LipGlossMockupImg src={LipGlossMockupSrc} alt="lip gloss mockup" />
      <EarringsImg src={EarringsSrc} alt="earrings" />
      <BagImg src={BagSrc} alt="bag" />
      <SocksImg src={width <= 672 ? AdaptiveSocksSrc : SocksSrc} alt="socks" />
      {width > 672 ? (
        <HoodieImg src={HoodieSrc} alt="hoodie" />
      ) : null}
      <SofaImg src={SofaSrc} alt="sofa" />
    </Slide>
  )
}