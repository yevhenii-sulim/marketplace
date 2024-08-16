import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { ButtonBlockWrapper } from './ButtonBlock.styled';
import { useState } from 'react';

function ButtonBlock({ sendIdProduct, tel }) {
  const [isShowTel, setIsShowTel] = useState(false);

  return (
    <ButtonBlockWrapper>
      <Button
        variant="contained"
        onClick={sendIdProduct}
        sx={{
          width: '85%',
          backgroundColor: '#43C550',
          textTransform: 'none',
          height: '40px',
          fontFamily: 'Jost',
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '1.45',
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
          fontFamily: 'Jost',
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '1.45',
          '&:focus': {
            borderColor: '#43C550',
          },
          '&:hover': {
            borderColor: '#43C550',
          },
        }}
      >
        Зв’язатися з продавцем
      </Button>
      <Button
        onClick={() => setIsShowTel(prev => !prev)}
        variant="outlined"
        sx={{
          width: '85%',
          borderColor: '#43C550',
          textTransform: 'none',
          color: '#43C550',
          height: '40px',
          fontFamily: 'Jost',
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '1.45',
          '&:focus': {
            borderColor: '#43C550',
          },
          '&:hover': {
            borderColor: '#43C550',
          },
        }}
      >
        {isShowTel ? tel : 'Показати телефон'}
      </Button>
    </ButtonBlockWrapper>
  );
}

export default ButtonBlock;
ButtonBlock.propTypes = {
  sendIdProduct: PropTypes.func,
};
