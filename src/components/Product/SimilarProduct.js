import React from 'react';
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
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EcoSvg from 'SvgComponents/EcoSVG/EcoSvg';
import { Link } from 'react-router-dom';
function SimilarProduct({
  id,
  tytle,
  price,
  img,
  discountItem,
  discount = true,
  date,
  eco,
}) {
  return (
    <>
      <SimilarProductItem>
        <Link to={id}>
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
          <SimilarProductItemButtonBlock>
            <Button
              variant="contained"
              sx={{
                width: 148 + 'px',
                backgroundColor: '#43C550',
                textTransform: 'none',
                fontSize: '18px',
                fontWeight: '800',
                height: '40px',
                '&:focus': {
                  backgroundColor: '#43C550',
                },
                '&:hover': {
                  backgroundColor: '#43C550',
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
        </Link>
      </SimilarProductItem>
    </>
  );
}

export default SimilarProduct;
