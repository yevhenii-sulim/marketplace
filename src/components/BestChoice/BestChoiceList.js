import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SimilarProduct from 'components/Product/SimilarProduct';
import { ContainerSlide, TytleCategory } from './BestChoice.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';

export default function BestChoiceList({ filteredProducts, tytle }) {
  const { width } = useWindowDimensions();
  const setvisibleSlides = width => {
    if (width >= 1440) {
      return 5;
    }
    if (width < 1440 && width > 768) {
      return 3;
    }
    return 1;
  };

  return (
    <ContainerSlide>
      <TytleCategory>{tytle}</TytleCategory>
      <CarouselProvider
        className="slide"
        totalSlides={filteredProducts.length}
        step={1}
        visibleSlides={setvisibleSlides(width)}
        isIntrinsicHeight={true}
        dragStep={1}
        innerClassName={'carusel-chidren'}
      >
        <Slider>
          {filteredProducts.map(
            (
              {
                title,
                subCategory,
                _id,
                img,
                price,
                discountItem,
                createDate,
                discount,
                eco,
                category,
              },
              index
            ) => {
              return (
                <Slide index={index} key={_id}>
                  <SimilarProduct
                    id={_id}
                    subCategory={subCategory}
                    title={title}
                    price={price}
                    img={img}
                    discountItem={discountItem}
                    discount={discount}
                    createDate={createDate}
                    eco={eco}
                    category={category}
                  />
                </Slide>
              );
            }
          )}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </ContainerSlide>
  );
}
