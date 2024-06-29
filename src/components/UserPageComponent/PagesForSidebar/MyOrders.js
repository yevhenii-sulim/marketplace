import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from '@mui/material';
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
  viewProductButton,
} from './PagesForSidebar.styled';
import { selectBasket } from '../../../redux/basket/select';
import { changeCount, deleteProduct } from '../../../redux/basket/slice';
import { useNavigate } from 'react-router-dom';
import { selectCategory } from '../../../redux/category/selectors';
import { toggleOrdering } from '../../../redux/myOrder/slice';

export default function MyOrders() {
  const categories = useSelector(selectCategory);
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();
  let total = 0;
  let totalPrice = 0;
  let totalDiscount = 0;
  let totalCount = 0;
  const navigation = useNavigate();

  function comeBackAtShopping() {
    navigation(`/${categories.category.en}/${categories.subCategory.en}`);
  }

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

  const makeOrder = () => {
    navigation('/user_page/ordering');
    dispatch(toggleOrdering(true));
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
                  <List key={id}>
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
                <Button type="button" onClick={makeOrder} sx={addProductButton}>
                  Оформити замовлення
                </Button>
              </WrapperButton>
            </TotalPrice>
          </WrapperBuy>
          <Button
            type="button"
            sx={viewProductButton}
            onClick={comeBackAtShopping}
          >
            Продовжити покупки
          </Button>
        </WrapperOrder>
      )}
    </div>
  );
}
