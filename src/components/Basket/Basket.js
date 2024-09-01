import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCart from 'SvgComponents/ShoppingСart/ShoppingСart';
import { selectBasket } from '../../redux/basket/select';
import { selectCategory } from '../../redux/category/selectors';
import BasketProductComponent from 'components/BasketProductComponent/BasketProductComponent';
import BasketTotalPriceComponent from 'components/BasketTotalPriceComponent/BasketTotalPriceComponent';
import BasketButtonsOrder from 'components/BasketButtonsOrder/BasketButtonsOrder';
import { Empty, Link, WrapperOrder } from './Basket.styled';

export default function Basket() {
  const categories = useSelector(selectCategory);
  const basket = useSelector(selectBasket);
  const navigation = useNavigate();
  let total = 0;
  let totalPrice = 0;
  let totalDiscount = 0;
  let totalCount = 0;

  function continueShopping() {
    navigation(`/${categories.category.en}/${categories.subCategory.en}`);
  }

  const makeOrder = () => {
    navigation('/ordering');
  };

  return (
    <div>
      {basket.length === 0 ? (
        <Empty>
          <ShoppingCart />
          <p>Зробіть ваше переше замовлення</p>
          <Link to="/">Перейти до товарів</Link>
        </Empty>
      ) : (
        <WrapperOrder>
          <ul>
            {basket.map(
              ({ id, title, price, img, discount, discountPrice, count }) => {
                total += discount ? discountPrice * count : price * count;
                totalPrice += price * count;
                totalDiscount += discount && (price - discountPrice) * count;
                totalCount += count;
                return (
                  <BasketProductComponent
                    key={id}
                    id={id}
                    img={img}
                    title={title}
                    count={count}
                    discount={discount}
                    price={price}
                    discountPrice={discountPrice}
                  />
                );
              }
            )}
          </ul>
          <BasketTotalPriceComponent
            totalDiscount={totalDiscount}
            totalCount={totalCount}
            totalPrice={totalPrice}
            total={total}
          />
          <BasketButtonsOrder
            continueShopping={continueShopping}
            makeOrder={makeOrder}
          />
        </WrapperOrder>
      )}
    </div>
  );
}
