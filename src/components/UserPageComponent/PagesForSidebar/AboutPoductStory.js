import React from 'react';
import {
  About,
  Coust,
  DateOrer,
  ImageStory,
  NumberOrder,
  Price,
  State,
  Title,
  WrapperProduct,
} from './PagesForSidebar.styled';
import { formatDate } from 'data/formatDate';

export default function AboutPoductStory({
  state,
  title,
  createDate,
  price,
  discountPrice,
  img,
  number,
  discount,
}) {
  return (
    <WrapperProduct className="story">
      <About>
        <State $state={Object.keys(state)}>{Object.values(state)}</State>
        <NumberOrder>&#8470;{number}</NumberOrder>
        <ImageStory>
          <img src={img} alt={title} />
        </ImageStory>
        <DateOrer>{formatDate(createDate)}</DateOrer>
      </About>
      <Coust>
        <Title className="story">{title}</Title>
        <Price className="story">
          {discount ? (
            <>
              <p className="price-discount">{price} &#8372;</p>
              <p className="discount">{discountPrice} &#8372;</p>
            </>
          ) : (
            <p className="price">{price} &#8372;</p>
          )}
        </Price>
      </Coust>
    </WrapperProduct>
  );
}
