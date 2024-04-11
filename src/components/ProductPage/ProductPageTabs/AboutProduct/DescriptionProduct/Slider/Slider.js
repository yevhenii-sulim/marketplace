import React, { useRef } from 'react';
import {
  ArrowLeftWrapper,
  ArrowRightWrapper,
  SliderContainer,
  SlidersWrapper,
  WrapperSlide,
} from './Slider.styled';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const productPhoto = [
  { src: './images/headphones.jpg', alt: 'headphones' },
  { src: './images/headphones.jpg', alt: 'headphones' },
  { src: './images/headphones.jpg', alt: 'headphones' },
  { src: './images/headphones.jpg', alt: 'headphones' },
];

function Slider() {
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
    <SliderContainer>
      <ArrowLeftWrapper onClick={() => scrollPhoto('left')}>
        <ArrowBackIosNewIcon />
      </ArrowLeftWrapper>
      <SlidersWrapper ref={wrapperSliderBlock}>
        {productPhoto.map((el, index) => (
          <WrapperSlide key={index} ref={slide}>
            <img src={el.src} alt={el.alt} width="50%" />
          </WrapperSlide>
        ))}
      </SlidersWrapper>
      <ArrowRightWrapper onClick={() => scrollPhoto('right')}>
        <ArrowForwardIosIcon />
      </ArrowRightWrapper>
    </SliderContainer>
  );
}

export default Slider;
