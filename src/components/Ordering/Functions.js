import axios from 'axios';
import { deleteBasket } from '../../redux/basket/slice';
import { removeFavoriteProduct } from '../../redux/product/thunk';
import { setOrder } from '../../redux/orderData/slice';

axios.defaults.baseURL = 'https://internet-shop-api-production.up.railway.app';
export const prices = {
  total: 0,
  totalPrice: 0,
  totalDiscount: 0,
  totalCount: 0,
};

export function onSubmitOrder(data, values, user, dispatch, auth) {
  dispatch(setOrder([values, data]));
  const orderData = data.map(({ count, id }) => {
    return {
      id,
      value: { ...values, quantity: count, userId: user?._id ?? '' },
    };
  });

  orderData.map(async ({ id, value }) => {
    await axios({
      method: 'post',
      url: `/purchase/${id}`,
      data: value,
    });
    if (auth) {
      dispatch(removeFavoriteProduct(id));
    }
  });
  Promise.allSettled(orderData);
  dispatch(deleteBasket());
}

export function handleOrder(data) {
  prices.total = 0;
  prices.totalPrice = 0;
  prices.totalDiscount = 0;
  prices.totalCount = 0;
  for (const { count, discount, discountPrice, price } of data) {
    prices.total += discount ? discountPrice * count : price * count;
    prices.totalPrice += price * count;
    prices.totalDiscount += discount && (price - discountPrice) * count;
    prices.totalCount += count;
  }
  return prices;
}

export function defineWordByCount(product) {
  if (!product) return;
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
