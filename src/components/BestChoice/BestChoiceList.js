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

export default function BestChoiceList({ filteredProducts, tytle }) {
  return (
    <ContainerSlide>
      <TytleCategory>{tytle}</TytleCategory>
      <CarouselProvider
        className="slide"
        totalSlides={filteredProducts.length}
        step={5}
        visibleSlides={5}
        isIntrinsicHeight={true}
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
