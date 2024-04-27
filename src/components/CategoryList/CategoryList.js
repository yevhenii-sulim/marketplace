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
import { useLocation } from 'react-router-dom';

export default function CategoryList() {
  const location = useLocation();
  console.log(location);
  return (
    // <Categorys>
    //   <h3>Популярні категорії</h3>
    //   {navigationList.map(({ id, linkList, nameList, subCategoris, img }) => {
    //     return (
    //       <CategoryHomePage
    //         key={id}
    //         nameCategory={nameList}
    //         tytleCategory={nameList}
    //         srcCategory={img}
    //         link={linkList}
    //         subCategoris={subCategoris}
    //       />
    //     );
    //   })}
    // </Categorys>
    <Categorys>
      <TytleCategory>Популярні категорії</TytleCategory>
      <CarouselProvider
        className="slide"
        totalSlides={navigationList.length}
        isPlaying={true}
        step={1}
        visibleSlides={5}
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
