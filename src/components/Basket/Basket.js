import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCart from 'SvgComponents/ShoppingСart/ShoppingСart';
import DeleteSvg from 'SvgComponents/DeleteSvg/DeleteSvg';
import { selectBasket } from '../../redux/basket/select';
import { selectCategory } from '../../redux/category/selectors';
import { selectMyUser } from '../../redux/auth/selector';
import { changeCount, deleteProduct } from '../../redux/basket/slice';
import {
  addFavoriteProduct,
  removeFavoriteProduct,
} from '../../redux/product/thunk';
import { theme } from 'utils/theme';
import {
  About,
  Actives,
  addProductButton,
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
  viewProductButton,
  WrapperButton,
  WrapperBuy,
  WrapperOrder,
  WrapperProduct,
} from './Basket.styled';

function defineWordByCount(product) {
  if (product === 1) return 'товар';
  console.log(String(product).slice(-2, String(product).length - 1));

  if (
    String(product).slice(-2, String(product).length - 1) !== '1' &&
    (String(product).slice(-1) === '2' ||
      String(product).slice(-1) === '3' ||
      String(product).slice(-1) === '4')
  )
    return 'товари';
  return 'товарів';
}

export default function Basket() {
  const categories = useSelector(selectCategory);
  const basket = useSelector(selectBasket);
  const user = useSelector(selectMyUser);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  let total = 0;
  let totalPrice = 0;
  let totalDiscount = 0;
  let totalCount = 0;

  function comeBackAtShopping() {
    navigation(`/${categories.category.en}/${categories.subCategory.en}`);
  }

  const addCount = payload => {
    dispatch(changeCount(payload));
  };

  const removeCount = (payload, count) => {
    if (count <= 1) return;
    dispatch(changeCount(payload));
  };
  const deleteFromBasket = id => {
    dispatch(deleteProduct(id));
  };

  const makeOrder = () => {
    navigation('/ordering');
  };

  function toggleFavorite(id) {
    if (user.favorites.some(({ _id }) => id === _id)) {
      dispatch(removeFavoriteProduct(id));
    } else {
      dispatch(addFavoriteProduct(id));
    }
  }

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
                      <About>
                        <Title>{title}</Title>
                        <Count>
                          <button
                            className="count"
                            type="button"
                            onClick={() =>
                              removeCount({ id, increment: -1 }, count)
                            }
                          >
                            <RemoveIcon />
                          </button>
                          <span>{count}</span>
                          <button
                            className="count"
                            type="button"
                            onClick={() => addCount({ id, increment: 1 })}
                          >
                            <AddIcon />
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
                            onClick={() => toggleFavorite(id)}
                          >
                            {user?.favorites.some(({ _id }) => id === _id) ? (
                              <FavoriteIcon
                                sx={{ color: theme.color.bgNumberBasket }}
                              />
                            ) : (
                              <FavoriteBorderIcon sx={{ color: '#727272' }} />
                            )}
                          </button>
                          <button
                            type="button"
                            className="delete"
                            onClick={() => deleteFromBasket(id)}
                          >
                            <DeleteSvg />
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
                <span className="info">
                  {totalCount} {defineWordByCount(totalCount)} на суму
                </span>
                <span className="info-price">{totalPrice} &#8372;</span>
              </Sum>
              <Discount>
                <span className="info">Знижка</span>
                <span className="info-price info-price_discount">
                  {totalDiscount} &#8372;
                </span>
              </Discount>

              <Total>
                <span>Загальна сума</span>
                <span>{total} &#8372;</span>
              </Total>
            </TotalPrice>
            <WrapperButton>
              <Button type="button" onClick={makeOrder} sx={addProductButton}>
                Оформити замовлення
              </Button>
            </WrapperButton>
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
