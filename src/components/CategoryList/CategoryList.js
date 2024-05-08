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
import { ButtonSlider, Categorys, TytleCategory } from './Category.styled';
import { navigationList } from 'data/navListData';
import CategoryHomePage from './CategoryHomePage';
import useWindowDimensions from 'hooks/useWindowDimensions';

export default function CategoryList() {
  const { width } = useWindowDimensions();
  const setvisibleSlides = width => {
    if (width >= 1440) {
      return 7;
    }
    if (width < 1440 && width > 768) {
      return 4;
    }
    return 2;
  };

  return (
    <Categorys>
      <TytleCategory>Популярні категорії</TytleCategory>
      <CarouselProvider
        className="slide"
        totalSlides={navigationList.length}
        isPlaying={true}
        step={1}
        visibleSlides={setvisibleSlides(width)}
        isIntrinsicHeight={true}
        dragStep={1}
      >
        <Slider>
          {navigationList.map(
            ({ id, linkList, nameList, subCategoris, img }, index) => {
              return (
                <Slide index={index} key={id} arrow={'gjgjhg'}>
                  <CategoryHomePage
                    key={id}
                    nameCategory={nameList}
                    tytleCategory={nameList}
                    srcCategory={img}
                    link={linkList}
                    subCategoris={subCategoris}
                  />
                </Slide>
              );
            }
          )}
        </Slider>
        <ButtonBack>
          <ArrowBackIcon sx={ButtonSlider} />
        </ButtonBack>
        <ButtonNext>
          <ArrowForwardIcon sx={ButtonSlider} />
        </ButtonNext>
      </CarouselProvider>
    </Categorys>
  );
}
