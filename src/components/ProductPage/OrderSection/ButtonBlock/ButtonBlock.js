import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { ButtonBlockWrapper } from './ButtonBlock.styled';
import { useState } from 'react';
import {
  buttonBuyStyles,
  buttonConnectStyles,
  buttonShowTelStyles,
} from './styles';

function ButtonBlock({ sendIdProduct, tel, showAccordion }) {
  const [isShowTel, setIsShowTel] = useState(false);

  return (
    <ButtonBlockWrapper>
      <Button variant="contained" onClick={sendIdProduct} sx={buttonBuyStyles}>
        {showAccordion ? 'Додати до кошика' : 'Купити'}
      </Button>
      <Button
        variant="outlined"
        sx={buttonConnectStyles}
        onClick={() => setIsShowTel(prev => !prev)}
      >
        {isShowTel ? tel : 'Зв’язатися з продавцем'}
      </Button>
      {showAccordion ? null : (
        <Button
          onClick={() => setIsShowTel(prev => !prev)}
          variant="outlined"
          sx={buttonShowTelStyles}
        >
          {isShowTel ? tel : 'Показати телефон'}
        </Button>
      )}
    </ButtonBlockWrapper>
  );
}

export default ButtonBlock;
ButtonBlock.propTypes = {
  sendIdProduct: PropTypes.func,
};
