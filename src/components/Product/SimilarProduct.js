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
  title,
  price,
  img,
  discountItem,
  discount,
  createDate,
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
            <img src={img} alt={title} />
          </SimilarProductItemIcon>
          <SimilarProductItemName>{title}</SimilarProductItemName>
          <SimilarProductItemPrice>
            {discount ? (
              <>
                <SimilarProductItemDiscount>
                  {price} грн
                </SimilarProductItemDiscount>
                <p>{discountItem} грн</p>
              </>
            ) : (
              <p>{price} грн</p>
            )}
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
        <SimilarProductDatePublic>{createDate}</SimilarProductDatePublic>
      </SimilarProductItem>
    </>
  );
}

export default SimilarProduct;
SimilarProduct.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
  discountItem: PropTypes.string,
  discount: PropTypes.bool,
  createDate: PropTypes.string,
  eco: PropTypes.bool,
  category: PropTypes.string,
};
