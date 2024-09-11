import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider,
} from 'pure-react-carousel';
import FirstSlide from './FirstSlide';
import {
  ButtonSlider,
  HomePageAdSliderContainer,
  Pointer,
} from './HomePageAdSlider.styled';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { theme } from 'utils/theme';

export default function HomePageAdSlider() {
  const { width } = useWindowDimensions();

  return (
    <HomePageAdSliderContainer>
      <CarouselProvider
        className="slide"
        totalSlides={3}
        step={1}
        visibleSlides={1}
        naturalSlideWidth={1324}
        naturalSlideHeight={232}
        interval={width <= 672 ? 5000 : null}
        isIntrinsicHeight={true}
        isPlaying={width <= parseInt(theme.breakPoints.md)}
      >
        <Slider>
          <FirstSlide />
          <SecondSlide />
          <ThirdSlide />
        </Slider>
        <Pointer>
          <li></li>
          <li></li>
          <li></li>
        </Pointer>
        {width > 672 ? (
          <>
            <ButtonNext>
              <ArrowForwardIcon sx={ButtonSlider} />
            </ButtonNext>
            <ButtonBack>
              <ArrowBackIcon sx={ButtonSlider} />
            </ButtonBack>
          </>
        ) : null}
      </CarouselProvider>
    </HomePageAdSliderContainer>
  );
}
