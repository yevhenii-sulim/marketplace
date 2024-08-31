import { Button } from '@mui/material';
import {
  continueShoppingButton,
  makeShoppingButton,
  WrapperButton,
} from './BasketButtonsOrder.styled';

export default function BasketButtonsOrder({ continueShopping, makeOrder }) {
  return (
    <WrapperButton>
      <Button
        type="button"
        sx={continueShoppingButton}
        onClick={continueShopping}
      >
        Продовжити покупки
      </Button>
      <Button type="button" onClick={makeOrder} sx={makeShoppingButton}>
        Оформити замовлення
      </Button>
    </WrapperButton>
  );
}
