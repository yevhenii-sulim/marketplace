import { ButtonBack, ButtonNext, CarouselProvider, Slider } from "pure-react-carousel";
import FirstSlide from "./FirstSlide";
import { ButtonSlider, HomePageAdSliderContainer } from "./HomePageAdSlider.styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";

export default function HomePageAdSlider() {
  return (
    <HomePageAdSliderContainer>
      <CarouselProvider
        className="slide"
        totalSlides={3}
        step={1}
        visibleSlides={1}
        naturalSlideWidth={1324}
        naturalSlideHeight={232}
      >
        <Slider>
          <FirstSlide />
          <SecondSlide />
          <ThirdSlide />
        </Slider>
        <ButtonNext>
          <ArrowForwardIcon sx={ButtonSlider} />
        </ButtonNext>
        <ButtonBack>
          <ArrowBackIcon sx={ButtonSlider} />
        </ButtonBack>
      </CarouselProvider>
    </HomePageAdSliderContainer>
  )
}