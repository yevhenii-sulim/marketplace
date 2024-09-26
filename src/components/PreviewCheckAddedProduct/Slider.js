import { useRef } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  ArrowLeftWrapper,
  ArrowRightWrapper,
  SliderContainer,
  SlidersWrapper,
  WrapperSlide,
} from './Slider.styled';
import { IconWrapper } from './ViewAhead.styled';

export default function Slider({ values }) {
  const slide = useRef();
  const wrapperSliderBlock = useRef();

  const scrollPhoto = nameArrow => {
    const wrapperSliderBlockScroll = wrapperSliderBlock.current;
    const widthBlock = slide.current.offsetWidth;
    const currentIndex = Math.round(
      wrapperSliderBlockScroll.scrollLeft / widthBlock
    );
    const targetIndex =
      nameArrow === 'left' ? currentIndex - 1 : currentIndex + 1;
    const targetScrollLeft = targetIndex * widthBlock;

    smoothScroll(wrapperSliderBlockScroll.scrollLeft, targetScrollLeft, 300);
  };

  function smoothScroll(start, end, duration) {
    const startTime = performance.now();
    const endTime = startTime + duration;

    function scroll() {
      const now = performance.now();
      const timeFraction = Math.min((now - startTime) / duration, 1);
      const scrollLeft = start + (end - start) * timeFraction;
      wrapperSliderBlock.current.scrollLeft = scrollLeft;
      if (now < endTime) {
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  }

  return (
    <SliderContainer className="prevView">
      <IconWrapper>
        <FavoriteBorderIcon />
      </IconWrapper>
      {values.file.length === 1 ? (
        ''
      ) : (
        <ArrowLeftWrapper onClick={() => scrollPhoto('left')}>
          <ArrowBackIosNewIcon />
        </ArrowLeftWrapper>
      )}
      <SlidersWrapper ref={wrapperSliderBlock}>
        {values.file.map((file, index) => {
          const imageUrl = URL.createObjectURL(
            new Blob([file], { type: file.type })
          );

          return (
            <WrapperSlide key={index} ref={slide}>
              <img src={imageUrl} alt={file.name} />
            </WrapperSlide>
          );
        })}
      </SlidersWrapper>
      {values.file.length === 1 ? (
        ''
      ) : (
        <ArrowRightWrapper onClick={() => scrollPhoto('right')}>
          <ArrowForwardIosIcon />
        </ArrowRightWrapper>
      )}
    </SliderContainer>
  );
}
