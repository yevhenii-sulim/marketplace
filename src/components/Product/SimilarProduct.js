import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { theme } from 'utils/theme';
import {
  SimilarProductItem,
  SimilarProductItemButtonBlock,
  SimilarProductItemPrice,
  SimilarProductItemIcon,
  SimilarProductItemName,
  SimilarProductItemIconWrapper,
  SimilarProductItemDiscount,
  SimilarProductDatePublic,
} from './SimilarProduct.styled';
import EcoSvg from 'SvgComponents/EcoSVG/EcoSvg';

function sctollToByClick() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

function SimilarProduct({
  id,
  tytle,
  price,
  img,
  discountItem,
  discount,
  date,
  eco,
  category,
  subCategory,
}) {
  const location = useLocation();

  function countCharacter(count) {
    return location.pathname.match(/[/]/g).length === count;
  }
  return (
    <>
      <SimilarProductItem>
        <Link
          onClick={sctollToByClick}
          to={countCharacter(2) ? `${id}` : `/${category}/${subCategory}/${id}`}
        >
          <SimilarProductItemIcon>
            {eco && <EcoSvg />}
            <img src={img} alt={tytle} />
          </SimilarProductItemIcon>
          <SimilarProductItemName>{tytle}</SimilarProductItemName>
          <SimilarProductItemPrice>
            {discount && (
              <SimilarProductItemDiscount>
                {discountItem}
              </SimilarProductItemDiscount>
            )}
            <p>{price}</p>
          </SimilarProductItemPrice>
        </Link>
        <SimilarProductItemButtonBlock>
          <Button
            variant="contained"
            sx={{
              width: 148 + 'px',
              backgroundColor: theme.color.bgButton,
              textTransform: 'none',
              fontSize: '18px',
              fontWeight: '800',
              height: '40px',
              '&:focus': {
                backgroundColor: theme.color.bgButton,
              },
              '&:hover': {
                backgroundColor: theme.color.bgButton,
              },
            }}
          >
            Купити
          </Button>
          <SimilarProductItemIconWrapper onClick={() => console.log('hello')}>
            <FavoriteBorderIcon />
          </SimilarProductItemIconWrapper>
        </SimilarProductItemButtonBlock>
        <SimilarProductDatePublic>{date}</SimilarProductDatePublic>
      </SimilarProductItem>
    </>
  );
}

export default SimilarProduct;
SimilarProduct.propTypes = {
  id: PropTypes.string.isRequired,
  tytle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  discountItem: PropTypes.string.isRequired,
  discount: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  eco: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
};
