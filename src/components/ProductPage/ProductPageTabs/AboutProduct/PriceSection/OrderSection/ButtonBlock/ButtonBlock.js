import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { ButtonBlockWrapper } from './ButtonBlock.styled';
import { addProduct } from '../../../../../../../redux/product/sliceOrder';

function ButtonBlock({ id }) {
  const dispatch = useDispatch();

  function addProductInOrder(id) {
    dispatch(addProduct(id));
  }

  return (
    <ButtonBlockWrapper>
      <Button
        onClick={() => addProductInOrder(id)}
        variant="contained"
        sx={{
          width: '85%',
          backgroundColor: '#43C550',
          textTransform: 'none',
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
      <Button
        variant="outlined"
        sx={{
          width: '85%',
          borderColor: '#43C550',
          textTransform: 'none',
          color: '#43C550',
          height: '40px',
          '&:focus': {
            borderColor: '#43C550',
          },
          '&:hover': {
            borderColor: '#43C550',
          },
        }}
      >
        Повідомлення
      </Button>
      <Button
        variant="outlined"
        sx={{
          width: '85%',
          borderColor: '#43C550',
          textTransform: 'none',
          color: '#43C550',
          height: '40px',
          '&:focus': {
            borderColor: '#43C550',
          },
          '&:hover': {
            borderColor: '#43C550',
          },
        }}
      >
        Показати телефон
      </Button>
    </ButtonBlockWrapper>
  );
}

export default ButtonBlock;
