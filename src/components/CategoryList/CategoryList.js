import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ButtonSlider, Category, Pointer } from './Category.styled';
import { navigationList } from 'data/navListData';
import CategoryHomePage from './CategoryHomePage';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { theme } from 'utils/theme';

export default function CategoryList() {
  const { width } = useWindowDimensions();
  const setVisibleSlides = width => {
    if (width >= parseInt(theme.breakPoints.lg)) {
      return 7;
    }
    if (
      width < parseInt(theme.breakPoints.lg) &&
      width > parseInt(theme.breakPoints.md)
    ) {
      return 5;
    }
    if (
      width <= parseInt(theme.breakPoints.md) &&
      width >= parseInt(theme.breakPoints.mx)
    ) {
      return 4;
    }
    if (
      width <= parseInt(theme.breakPoints.md) &&
      width >= parseInt(theme.breakPoints.sx)
    ) {
      return 3;
    }

    return 2;
  };

  return (
    <Category>
      <CarouselProvider
        className="slider"
        totalSlides={navigationList.length}
        isPlaying={width < parseInt(theme.breakPoints.md)}
        step={3}
        visibleSlides={setVisibleSlides(width)}
        isIntrinsicHeight={true}
        dragStep={setVisibleSlides(width)}
      >
        <Slider>
          {navigationList.map(
            ({ id, linkList, nameList, subCategories, img }, index) => {
              return (
                <Slide index={index} key={id}>
                  <CategoryHomePage
                    key={id}
                    nameCategory={{
                      category: { en: linkList, ua: nameList },
                    }}
                    titleCategory={nameList}
                    srcCategory={img}
                    link={linkList}
                    subCategories={subCategories}
                  />
                </Slide>
              );
            }
          )}
        </Slider>
        <Pointer>
          <li></li>
          <li></li>
          <li></li>
        </Pointer>
        {navigationList.length > setVisibleSlides(width) &&
          width > parseInt(theme.breakPoints.md) && (
            <>
              <ButtonBack>
                <ArrowBackIcon sx={ButtonSlider} />
              </ButtonBack>
              <ButtonNext>
                <ArrowForwardIcon sx={ButtonSlider} />
              </ButtonNext>
            </>
          )}
      </CarouselProvider>
    </Category>
  );
}
