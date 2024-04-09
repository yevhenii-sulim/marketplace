import React from 'react';
import {
  SimilarProductsItem,
  SimilarProductsItemButtonBlock,
  SimilarProductsItemCost,
  SimilarProductsItemIcon,
  SimilarProductsItemName,
  SimilarProductsWrapper,
  SimilarProductsItemIconWrapper,
} from './SimilarProducts.styled';
import { Button } from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ButtonAddSimilarProducts from './ButtonAddSimilarProducts/ButtonAddSimilarProducts';

const arrayProducts = [
  { img: '', cost: '700₴', name: 'Заголовок довги може бути' },
  { img: '', cost: '700₴', name: 'Заголовок довги може бути' },
  { img: '', cost: '700₴', name: 'Заголовок довги може бути' },
  { img: '', cost: '700₴', name: 'Заголовок довги може бути' },
  { img: '', cost: '700₴', name: 'Заголовок довги може бути' },
];

function SimilarProducts() {
  return (
    <>
      <SimilarProductsWrapper>
        {arrayProducts.map((el, index) => (
          <SimilarProductsItem key={index}>
            <SimilarProductsItemIcon></SimilarProductsItemIcon>
            <SimilarProductsItemName>{el.name}</SimilarProductsItemName>
            <SimilarProductsItemCost>{el.cost}</SimilarProductsItemCost>
            <SimilarProductsItemButtonBlock>
              <Button
                variant="contained"
                sx={{
                  width: 80 + '%',
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
              <SimilarProductsItemIconWrapper>
                <FavoriteBorderIcon />
              </SimilarProductsItemIconWrapper>
            </SimilarProductsItemButtonBlock>
          </SimilarProductsItem>
        ))}
      </SimilarProductsWrapper>
      <ButtonAddSimilarProducts />
    </>
  );
}

export default SimilarProducts;
