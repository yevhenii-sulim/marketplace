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
import { memo } from 'react';

export default memo(function BestChoiceList({ filteredProducts, tytle }) {
  return (
    <ContainerSlide>
      <TytleCategory>{tytle}</TytleCategory>
      <CarouselProvider
        className="slide"
        totalSlides={filteredProducts.length}
        // isPlaying={true}
        step={5}
        visibleSlides={5}
        isIntrinsicHeight={true}
      >
        <Slider>
          {filteredProducts.map(
            (
              {
                tytle,
                id,
                img,
                price,
                discountItem,
                date,
                discount,
                eco,
                category,
              },
              index
            ) => {
              return (
                <Slide index={index} key={id}>
                  <SimilarProduct
                    id={id}
                    tytle={tytle}
                    price={price}
                    img={img}
                    discountItem={discountItem}
                    discount={discount}
                    date={date}
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
});
