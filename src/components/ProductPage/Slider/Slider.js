import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ImageModal } from './ImageModal';
import {
  ArrowLeftWrapper,
  ArrowRightWrapper,
  IconWrapper,
  SliderContainer,
  SlidersWrapper,
  WrapperSlide,
} from './Slider.styled';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from 'react-redux';
import { ImageModal } from './ImageModal';
import ButtonFavorite from '../OrderSection/ButtonFavorite';


function Slider() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [touchStartPosition, setTouchStartPosition] = useState();
  const product = useSelector(state => state.productPage.product);
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

  const handleImageClick = imageUrl => {
    setCurrentImage(imageUrl);
    setModalIsOpen(true);
  };

  function handleTouchStart(e) {
    setTouchStartPosition(e.changedTouches[0].clientX);
  }
  function handleTouchEnd(e) {
    if (touchStartPosition + 50 > e.changedTouches[0].clientX) {
      scrollPhoto('right');
    }
    if (touchStartPosition < e.changedTouches[0].clientX + 50) {
      scrollPhoto('left');
    }
  }

  return (
    <SliderContainer
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {product.img.length === 1 ? (
        ''
      ) : (
        <ArrowLeftWrapper onClick={() => scrollPhoto('left')}>
          <ArrowBackIosNewIcon />
        </ArrowLeftWrapper>
      )}
      <SlidersWrapper ref={wrapperSliderBlock}>

        <ButtonFavorite
          productId={product._id}
          currentPictures={currentImage}
        />

        {product.img.map((el, index) => (
          <WrapperSlide key={index} ref={slide}>
            <img
              src={el}
              alt={el}
              onClick={() => {
                handleImageClick(el);
              }}
            />
            <ImageModal
              imageUrl={currentImage}
              isOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
            />
          </WrapperSlide>
        ))}
      </SlidersWrapper>
      {product.img.length === 1 ? (
        ''
      ) : (
        <ArrowRightWrapper onClick={() => scrollPhoto('right')}>
          <ArrowForwardIosIcon />
        </ArrowRightWrapper>
      )}
    </SliderContainer>
  );
}

export default Slider;
