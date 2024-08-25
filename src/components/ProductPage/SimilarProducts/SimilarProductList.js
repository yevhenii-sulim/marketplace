import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SimilarProductsWrapper } from './SimilarProductList.styled';
import SimilarProduct from 'components/Product/SimilarProduct';
import { selectProduct } from './../../../redux/product/selector';
import { getProducts } from '../../../redux/product/thunk';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function SimilarProductList({ sizeWindow }) {
  const productAll = useSelector(selectProduct);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (productAll.length !== 0) {
      return;
    }
    const textQuery = location.pathname.split('/').slice(-2)[0];
    dispatch(getProducts({ textQuery, paramQuery: '', page: 1 }));
  }, [dispatch, location.pathname, productAll.length]);

  return (
    <>
      <SimilarProductsWrapper $length={productAll.length}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={
            sizeWindow > 1024
              ? sizeWindow < 1280
                ? productAll.length < 4
                  ? productAll.length
                  : 4
                : productAll.length < 5
                ? productAll.length
                : 5
              : sizeWindow < 500
              ? productAll.length < 2
                ? productAll.length
                : 2
              : productAll.length < 3
              ? productAll.length
              : 3
          }
          pagination={{ clickable: true, dynamicBullets: true }}
          slidesPerGroup={
            sizeWindow > 1024
              ? sizeWindow < 1280
                ? productAll.length < 4
                  ? productAll.length
                  : 4
                : productAll.length < 5
                ? productAll.length
                : 5
              : sizeWindow < 500
              ? productAll.length < 2
                ? productAll.length
                : 2
              : productAll.length < 3
              ? productAll.length
              : 3
          }
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {productAll.map(
            (
              {
                title,
                _id,
                img,
                price,
                parameters,
                discount,
                discountPrice,
                createDate,
                category,
                subCategory,
              },
              index
            ) => {
              return (
                <SwiperSlide key={index}>
                  <SimilarProduct
                    id={_id}
                    title={title}
                    price={price}
                    img={img}
                    discountPrice={discountPrice}
                    discount={discount}
                    createDate={createDate}
                    eco={parameters.eco}
                    isUkraine={parameters.isUkraine}
                    category={category}
                    subCategory={subCategory}
                  />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </SimilarProductsWrapper>
    </>
  );
}

export default SimilarProductList;
