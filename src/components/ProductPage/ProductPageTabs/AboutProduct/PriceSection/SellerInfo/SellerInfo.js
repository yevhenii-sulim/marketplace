import React from 'react';
import {
  SellerDate,
  SellerIconWrapper,
  SellerInfoContainer,
  SellerInfoWrapper,
  SellerName,
  SellerNameBlock,
  SellerRating,
  SellerRatingBlock,
  SellerRole,
  LinkMoreProductsSeller,
} from './SellerInfo.styled';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useProductPageContext } from 'components/ProductPage/context/ProductPageProvider';

function SellerInfo() {
  const context = useProductPageContext();
  return (
    <SellerInfoWrapper>
      <SellerInfoContainer>
        <SellerRole>Продавець</SellerRole>
        <SellerDate>
          <SellerIconWrapper>
            {/* <img src="#" alt="alt" /> */}
          </SellerIconWrapper>
          <SellerNameBlock>
            <SellerName>{context.product.producer.firstName}</SellerName>
            <SellerRatingBlock>
              <StarIcon style={{ color: 'gold' }} />
              <SellerRating>
                Рейтинг: {context.product.producer.rating}
              </SellerRating>
            </SellerRatingBlock>
          </SellerNameBlock>
        </SellerDate>
        <LinkMoreProductsSeller>
          Більше оголошень автора{' '}
          <KeyboardArrowRightIcon style={{ marginLeft: '5px' }} />
        </LinkMoreProductsSeller>
      </SellerInfoContainer>
    </SellerInfoWrapper>
  );
}

export default SellerInfo;
