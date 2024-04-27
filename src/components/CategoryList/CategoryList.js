import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Categorys, TytleCategory } from './Category.styled';
import { navigationList } from 'data/navListData';
import CategoryHomePage from './CategoryHomePage';

export default function CategoryList() {
  return (
    <Categorys>
      <TytleCategory>Популярні категорії</TytleCategory>
      <CarouselProvider
        className="slide"
        totalSlides={navigationList.length}
        isPlaying={true}
        step={1}
        visibleSlides={7}
        isIntrinsicHeight={true}
      >
        <Slider>
          {navigationList.map(
            ({ id, linkList, nameList, subCategoris, img }, index) => {
              return (
                <Slide index={index} key={id}>
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
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </Categorys>
  );
}
