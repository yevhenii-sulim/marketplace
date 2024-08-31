import {
  Discount,
  Sum,
  Total,
  TotalPrice,
  WrapperBuy,
} from './BasketTotalPriceComponent.styled';

function defineWordByCount(product) {
  if (product === 1) return 'товар';
  if (
    String(product).slice(-2, String(product).length - 1) !== '1' &&
    (String(product).slice(-1) === '2' ||
      String(product).slice(-1) === '3' ||
      String(product).slice(-1) === '4')
  )
    return 'товари';
  return 'товарів';
}

export default function BasketTotalPriceComponent({
  totalDiscount,
  totalCount,
  totalPrice,
  total,
}) {
  return (
    <WrapperBuy>
      <TotalPrice>
        <Sum>
          <span className="info">
            {totalCount} {defineWordByCount(totalCount)} на суму:&nbsp;
          </span>
          &nbsp;
          <span className="info-price">{totalPrice} &#8372;</span>
        </Sum>
        <Discount>
          <span className="info">Знижка</span>&nbsp;
          <span className="info-price info-price_discount">
            {totalDiscount} &#8372;
          </span>
        </Discount>

        <Total>
          <span className="total-price">Загальна сума:&nbsp;</span>
          <span className="info-price">{total} &#8372;</span>
        </Total>
      </TotalPrice>
    </WrapperBuy>
  );
}
