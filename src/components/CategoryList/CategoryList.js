import { Category } from './Category.styled';
import { navigationList } from 'data/navListData';
import CategoryHomePage from './CategoryHomePage';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { theme } from 'utils/theme';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CategoryList() {
  const { width } = useWindowDimensions();
  const setVisibleSlides = width => {
    if (width >= parseInt(theme.breakPoints.lg)) {
      return 7;
    }
    if (
      width < parseInt(theme.breakPoints.lg) &&
      width > parseInt(theme.breakPoints.md)
    ) {
      return 5;
    }
    if (
      width <= parseInt(theme.breakPoints.md) &&
      width >= parseInt(theme.breakPoints.mx)
    ) {
      return 4;
    }
    if (
      width <= parseInt(theme.breakPoints.md) &&
      width >= parseInt(theme.breakPoints.sx)
    ) {
      return 3;
    }

    return 2;
  };

  return (
    <Category>
      <Swiper
        modules={[Pagination]}
        spaceBetween={
          width > 1440 ? 10 : width > 500 ? (width < 767 ? 100 : 20) : 50
        }
        slidesPerView={setVisibleSlides(width)}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        {navigationList.map(
          ({ id, linkList, nameList, subCategories, img }, index) => {
            return (
              <SwiperSlide index={index} key={id}>
                <CategoryHomePage
                  key={id}
                  nameCategory={{
                    category: { en: linkList, ua: nameList },
                  }}
                  titleCategory={nameList}
                  srcCategory={img}
                  link={linkList}
                  subCategories={subCategories}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </Category>
  );
}
