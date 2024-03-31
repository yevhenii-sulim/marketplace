import * as React from 'react';
import Heart from 'SvgComponents/HeartSVG/Heart';
import {
  Action,
  Buy,
  Like,
  MerchandiseContainer,
  NameItem,
  PriceItem,
} from './Merchandise.styled';

export default function Merchandise({ imgItem, nameItem, priceItem }) {
  return (
    <MerchandiseContainer>
      <img src={imgItem} alt={nameItem} />
      <NameItem>{nameItem}</NameItem>
      <PriceItem>{priceItem}</PriceItem>
      <Action>
        <Buy type="button">Купити</Buy>
        <Like type="button">
          <Heart />
        </Like>
      </Action>
    </MerchandiseContainer>
  );
}
