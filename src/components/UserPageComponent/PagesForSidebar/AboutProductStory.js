import {
  About,
  Cost,
  DateOrder,
  ImageStory,
  Price,
  State,
  Title,
  WrapperProduct,
} from './PagesForSidebar.styled';
import { formatDate } from 'data/formatDate';

export default function AboutProductStory({
  status,
  title,
  createDate,
  price,
  discountPrice,
  img,
  discount,
}) {
  return (
    <WrapperProduct className="story">
      <About>
        <State $state={status}>{status}</State>
        <ImageStory>
          <img src={img} alt={title} />
        </ImageStory>
        <DateOrder>{formatDate(createDate)}</DateOrder>
      </About>
      <Cost>
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
      </Cost>
    </WrapperProduct>
  );
}
