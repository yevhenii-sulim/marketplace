import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { headphoneProduct } from 'data/headphone';
import SimilarProduct from 'components/Product/SimilarProduct';
import { ContainerSlide } from './BestChoice.styled';
import { memo } from 'react';

const products = () =>
  headphoneProduct.filter(({ discount }) => discount === true);

const filteredProducts = products();

export default memo(function BestChoiceList() {
  return (
    <ContainerSlide>
      <CarouselProvider
        className="slide"
        totalSlides={filteredProducts.length}
        isPlaying={true}
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
