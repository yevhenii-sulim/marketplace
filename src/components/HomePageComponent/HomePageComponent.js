import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import SimilarProduct from 'components/Product/SimilarProduct';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { ContainerSlide, TitleCategory } from './HomePageComponent.styled';

export default function HomePageComponent({ filteredProducts, title }) {
  const { width } = useWindowDimensions();

  return (
    <ContainerSlide>
      <TitleCategory>{title}</TitleCategory>
      <Swiper
        modules={[Pagination]}
        spaceBetween={
          width > 1440 ? 10 : width > 500 ? (width < 767 ? 100 : 20) : 50
        }
        slidesPerView={
          width > 1440
            ? 5
            : width > 1024
            ? 4
            : width > 500
            ? width < 767
              ? width < 650
                ? 3
                : 4
              : 3
            : 2
        }
        pagination={{ clickable: true, dynamicBullets: true }}
      >
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
              <SwiperSlide index={index} key={_id}>
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
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </ContainerSlide>
  );
}
