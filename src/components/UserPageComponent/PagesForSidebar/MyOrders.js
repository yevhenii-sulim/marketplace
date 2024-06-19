import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingCart from 'SvgComponents/ShoppingСart/ShoppingСart';
import {
  About,
  Actives,
  Count,
  DeleteAdd,
  Discount,
  Empty,
  Image,
  Link,
  List,
  Price,
  Sum,
  Title,
  Total,
  TotalPrice,
  WrapperButton,
  WrapperBuy,
  WrapperOrder,
  WrapperProduct,
  addProductButton,
} from './PagesForSidebar.styled';
import { selectBasket } from '../../../redux/basket/select';
import {
  changeCount,
  deleteBasket,
  deleteProduct,
} from '../../../redux/basket/slice';
import { Button } from '@mui/material';

export default function MyOrders() {
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();
  let total = 0;
  let totalPrice = 0;
  let totalDiscount = 0;
  let totalCount = 0;
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

  const onSubmit = evt => {
    evt.preventDefault();
    const shopping = {};
    for (const item of evt.target.elements) {
      if (item.name) {
        shopping[item.name] = `${item.value}`;
      }
      if (item.name === '$Загально') {
        shopping[item.name] = `${item.value}`;
      }
    }
    console.log(shopping);
    dispatch(deleteBasket());
  };

  return (
    <form onSubmit={onSubmit}>
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
                  <List key={id}>
                    <input
                      type="text"
                      name={title}
                      className="visibility-hidden"
                      defaultValue={`Кількість: ${count}шт; ціна за ${count}шт: ${
                        price * count
                      }грн; ціна за 1шт. без знижки: ${price}грн; ціна за 1шт. зі знижкою: ${
                        discount ? discountPrice + 'грн' : 'без знижки'
                      }; знижка за 1шт: ${
                        discount ? price - discountPrice : 0
                      }грн; загальна знижка: ${
                        discount ? (price - discountPrice) * count : 0
                      }грн`}
                    />
                    <WrapperProduct>
                      <Image>
                        <img height="114" src={img} alt={title} />
                      </Image>
                      <About className="basket">
                        <Title>{title}</Title>
                        <Count>
                          <button
                            className="count"
                            type="button"
                            onClick={() =>
                              removeCount({ id, increment: -1 }, count)
                            }
                          >
                            &#8722;
                          </button>
                          <span>{count}</span>
                          <button
                            className="count"
                            type="button"
                            onClick={() => addCount({ id, increment: 1 })}
                          >
                            &#43;
                          </button>
                        </Count>
                      </About>
                      <Actives>
                        <Price>
                          {discount ? (
                            <>
                              <p className="price-discount">{price} &#8372;</p>
                              <p className="discount">
                                {discountPrice} &#8372;
                              </p>
                            </>
                          ) : (
                            <p className="price">{price} &#8372;</p>
                          )}
                        </Price>
                        <DeleteAdd className="basket">
                          <button
                            type="button"
                            className="favorite"
                            onClick={() => deleteFromBasket(id)}
                          >
                            <FavoriteBorderIcon />
                          </button>
                          <button
                            type="button"
                            className="delete"
                            onClick={() => deleteFromBasket(id)}
                          >
                            <DeleteOutlineIcon />
                          </button>
                        </DeleteAdd>
                      </Actives>
                    </WrapperProduct>
                  </List>
                );
              }
            )}
          </ul>
          <WrapperBuy>
            <input
              type="text"
              name="$Загально"
              className="visibility-hidden"
              defaultValue={`До сплати: ${total}грн; сума без знижки: ${totalPrice}грн; знижка: ${
                totalDiscount ? totalDiscount + 'грн' : 'без знижки'
              };`}
            />
            <TotalPrice>
              <Sum>
                <span className="info">{totalCount} товар на суму</span>
                <span className="info-price">{totalPrice} &#8372;</span>
              </Sum>
              <Discount>
                <span className="info">Знижка</span>
                <span className="info-price info-price_discount">
                  {totalDiscount}
                  &#8372;
                </span>
              </Discount>

              <Total>
                <span>Загальна сума</span>
                <span>
                  {total}
                  &#8372;
                </span>
              </Total>
              <WrapperButton>
                <Button type="submit" sx={addProductButton}>
                  Оформити замовлення
                </Button>
              </WrapperButton>
            </TotalPrice>
          </WrapperBuy>
        </WrapperOrder>
      )}
    </form>
  );
}
