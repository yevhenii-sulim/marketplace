import React from 'react';
import { ButtonAddSimilarProductsWrapper } from './ButtonAddSimilarProducts.styled';
import { Button } from '@mui/material';

function ButtonAddSimilarProducts() {
  return (
    <ButtonAddSimilarProductsWrapper>
      <Button
        variant="outlined"
        sx={{
          width: '230px',
          height: '56px',
          borderColor: '#43C550',
          textTransform: 'none',
          color: '#43C550',
          height: '40px',
          fontSize: '18px',
          fontWeight: '500',
          '&:focus': {
            borderColor: '#43C550',
          },
          '&:hover': {
            borderColor: '#43C550',
          },
        }}
      >
        Ще 16 оголошень
      </Button>
    </ButtonAddSimilarProductsWrapper>
  );
}

export default ButtonAddSimilarProducts;
