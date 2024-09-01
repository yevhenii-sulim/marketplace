import { defineWordByCount } from './Functions';
import { Discount, Sum, Total, TotalPriceList } from './Ordering.styled';

export default function TotalPriceListComponent({ prices }) {
  return (
    <TotalPriceList>
      <div>
        <Sum>
          <span className="info">
            {prices.totalCount}&nbsp;
            {defineWordByCount(prices.totalCount)} на суму:&nbsp;
          </span>
          <span className="info-price">{prices.totalPrice}&#8372;</span>
        </Sum>
        <Discount>
          <span className="info">Знижка:&nbsp;</span>
          <span className="info-price info-price_discount">
            {prices.totalDiscount}&#8372;
          </span>
        </Discount>
      </div>

      <Total>
        <span>Загальна сума:&nbsp;</span>
        <span>{prices.total}&#8372;</span>
      </Total>
    </TotalPriceList>
  );
}
