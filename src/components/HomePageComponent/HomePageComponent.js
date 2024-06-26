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
import SimilarProduct from 'components/Product/SimilarProduct';
import {
  ButtonSlider,
  ContainerSlide,
  TitleCategory,
} from './HomePageComponent.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';

export default function HomePageComponent({ filteredProducts, title }) {
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
      <TitleCategory>{title}</TitleCategory>
      <CarouselProvider
        className="slide"
        totalSlides={filteredProducts.length}
        step={setvisibleSlides(width)}
        visibleSlides={setvisibleSlides(width)}
        isIntrinsicHeight={true}
      >
        <Slider>
          {filteredProducts?.map(
            (
              {
                title,
                subCategory,
                _id,
                img,
                price,
                discountPrice,
                createDate,
                discount,
                parameters,
                category,
              },
              index
            ) => {
              return (
                <Slide index={index} key={_id}>
                  <SimilarProduct
                    id={_id}
                    subCategory={{ ...subCategory }}
                    title={title}
                    price={price}
                    img={img}
                    discountPrice={discountPrice}
                    discount={discount}
                    createDate={createDate}
                    eco={parameters.eco}
                    isUkraine={parameters.isUkraine}
                    category={{ ...category }}
                  />
                </Slide>
              );
            }
          )}
        </Slider>
        {filteredProducts.length > setvisibleSlides(width) && (
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
    </ContainerSlide>
  );
}
