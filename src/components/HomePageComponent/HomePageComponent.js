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
import useWindowDimensions from 'hooks/useWindowDimensions';
import {
  ButtonSlider,
  ContainerSlide,
  TitleCategory,
} from './HomePageComponent.styled';
export default function HomePageComponent({ filteredProducts, title }) {
  const { width } = useWindowDimensions();
  const setVisibleSlides = width => {
    if (width >= 1440) {
      return 5;
    }
    if (width < 1440 && width >= 580) {
      return 3;
    }
    if (width < 580 && width > 380) {
      return 2;
    }
    return 1;
  };
  return (
    <ContainerSlide>
      <TitleCategory>{title}</TitleCategory>
      <CarouselProvider
        className="slide"
        totalSlides={filteredProducts.length}
        step={setVisibleSlides(width)}
        visibleSlides={setVisibleSlides(width)}
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
        {filteredProducts.length > setVisibleSlides(width) && (
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
