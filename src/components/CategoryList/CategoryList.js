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
import { ButtonSlider, Category } from './Category.styled';
import { navigationList } from 'data/navListData';
import CategoryHomePage from './CategoryHomePage';
import useWindowDimensions from 'hooks/useWindowDimensions';

const dpr = window.devicePixelRatio;

export default function CategoryList() {
  const { width } = useWindowDimensions();
  const setVisibleSlides = width => {
    if (width / dpr >= 1440) {
      return 7;
    }
    if (width / dpr < 1440 && width / dpr > 768) {
      return 4;
    }
    return 2;
  };

  return (
    <Category>
      <CarouselProvider
        className="slide"
        totalSlides={navigationList.length}
        isPlaying={true}
        // step={1}
        visibleSlides={setVisibleSlides(width)}
        isIntrinsicHeight={true}
        // dragStep={1}
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
