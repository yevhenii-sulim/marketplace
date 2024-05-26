import { useDispatch, useSelector } from 'react-redux';
import ShoppingCart from 'SvgComponents/ShoppingСart/ShoppingСart';
import {
  ContainerOrders,
  Count,
  Empty,
  Link,
  List,
} from './PagesForSidebar.styled';
import { selectBasket } from '../../../redux/basket/select';
import { changeCount, deleteProduct } from '../../../redux/basket/slice';

export default function MyOrders() {
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();
  let total = 0;
  const addCount = payload => {
    dispatch(changeCount(payload));
  };

  const removeCount = (payload, count) => {
    if (count <= 0) return;
    dispatch(changeCount(payload));
  };
  const deleteFromBasket = id => {
    dispatch(deleteProduct(id));
  };
  return (
    <ContainerOrders>
      {basket.length === 0 ? (
        <Empty>
          <ShoppingCart />
          <p>Зробіть ваше переше замовлення</p>
          <Link to="/">Перейти до товарів</Link>
        </Empty>
      ) : (
        <ul>
          {basket.map(({ id, title, price, img, count }) => {
            total += price;
            return (
              <List key={id}>
                <button type="button" onClick={() => deleteFromBasket(id)}>
                  delete
                </button>
                <img src={img} alt={title} />
                <span>{title}</span>
                <Count>
                  <button
                    type="button"
                    onClick={() => removeCount({ id, increment: -1 }, count)}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    type="button"
                    onClick={() => addCount({ id, increment: 1 })}
                  >
                    +
                  </button>
                  <span onClick={() => console.log(this)}>{price} грн</span>
                  <span>Всього: {price * count} грн</span>
                </Count>
              </List>
            );
          })}
        </ul>
      )}
      <span>{total} грн</span>
    </ContainerOrders>
  );
}
