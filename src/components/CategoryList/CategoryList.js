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

export default function CategoryList() {
  const { width } = useWindowDimensions();
  const setVisibleSlides = width => {
    if (width >= 1440) {
      return 7;
    }
    if (width < 1440 && width > 768) {
      return 4;
    }
    if (width <= 768 && width >= 580) {
      return 3;
    }

    return 2;
  };

  return (
    <Category>
      <CarouselProvider
        className="slide"
        totalSlides={navigationList.length}
        isPlaying={width < 768}
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
        {navigationList.length > setVisibleSlides(width) && (
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
