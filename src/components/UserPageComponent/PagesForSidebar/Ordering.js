import { useDispatch, useSelector } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { selectBasket } from '../../../redux/basket/select';
import { deleteBasket, deleteProduct } from '../../../redux/basket/slice';
import { toggleOrdering } from '../../../redux/myOrder/slice';
import {
  About,
  Actives,
  DeleteAdd,
  Discount,
  Form,
  Image,
  List,
  Price,
  Sum,
  Title,
  Total,
  TotalPrice,
  WrapperButton,
  WrapperBuy,
  WrapperListOrder,
  WrapperProduct,
  addProductButton,
} from './Ordering.styled';
import { Button } from '@mui/material';
import Placing from './Placing';
import { Formik } from 'formik';
import { useEffect } from 'react';

let total = 0;
let totalPrice = 0;
let totalDiscount = 0;
let totalCount = 0;

function handleOrder(data) {
  const orderData = data.map(
    ({ count, discount, discountPrice, price, title }) => ({
      title: `назва: ${title}`,
      count: `кількість: ${count}шт;`,
      price: `ціна за: ${count}шт: ${price * count}грн;`,
      priceForOne: `ціна за 1шт. без знижки: ${price}грн;`,
      priceForOneWithDiscount: `ціна за 1шт. зі знижкою: ${
        discount ? discountPrice + 'грн' : 'без знижки'
      };`,
      discountForOne: `знижка за 1шт: ${
        discount ? price - discountPrice : 0
      }грн;`,
      discountAll: `загальна знижка: ${
        discount ? (price - discountPrice) * count : 0
      }грн;`,
    })
  );

  orderData.push({
    toPay: `до сплати: ${total}грн;`,
    sumWithoutDiscount: `сума без знижки: ${totalPrice}грн;`,
    discountAll: `знижка: ${
      totalDiscount ? totalDiscount + 'грн' : 'без знижки'
    };`,
  });
  return orderData;
}
export default function Ordering() {
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();
  const order = [];

  useEffect(() => {
    console.log(handleOrder(basket));

    return () => {
      dispatch(toggleOrdering(false));
    };
  }, [dispatch, basket]);

  const deleteFromBasket = id => {
    dispatch(deleteProduct(id));
  };

  const handleSubmit = value => {
    console.log(value);
    dispatch(deleteBasket());
  };
  return (
    <>
      {basket.length !== 0 && (
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            tel: '',
            email: '',
            town: '',
            wayDelivery: '',
            postOffice: '',
            apartment: '',
            data: order,
          }}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={values => {
            handleSubmit(values);
          }}
        >
          {({ values, isSubmitting, handleChange, setSubmitting }) => (
            <>
              <Form>
                <Placing
                  wayDelivery={values.wayDelivery}
                  handleChange={handleChange}
                  setSubmitting={setSubmitting}
                  tel={values.tel}
                  firstName={values.firstName}
                  lastName={values.lastName}
                  email={values.email}
                />
                <WrapperListOrder>
                  <ul>
                    {basket.map(
                      ({
                        id,
                        title,
                        price,
                        img,
                        discount,
                        discountPrice,
                        count,
                      }) => {
                        total += discount
                          ? discountPrice * count
                          : price * count;
                        totalPrice += price * count;
                        totalDiscount +=
                          discount && (price - discountPrice) * count;
                        totalCount += count;
                        return (
                          <List key={id}>
                            <WrapperProduct>
                              <Image>
                                <img height="114" src={img} alt={title} />
                              </Image>
                              <About className="basket">
                                <Title>{title}</Title>
                              </About>
                              <Actives>
                                <Price>
                                  {discount ? (
                                    <>
                                      <p className="price-discount">
                                        {price} &#8372;
                                      </p>
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
                        <Button type="submit" sx={addProductButton}>
                          Оформити замовлення
                        </Button>
                      </WrapperButton>
                    </TotalPrice>
                  </WrapperBuy>
                </WrapperListOrder>
              </Form>
            </>
          )}
        </Formik>
      )}
    </>
  );
}

// const hjk = {
//   title: `назва: ${title}`,
//   count: `кількість: ${count}шт;`,
//   price: `ціна за: ${count}шт: ${price * count}грн;`,
//   priceForOne: `ціна за 1шт. без знижки: ${price}грн;`,
//   priceForOneWithDiscount: `ціна за 1шт. зі знижкою: ${
//     discount ? discountPrice + 'грн' : 'без знижки'
//   };`,
//   discountForOne: `знижка за 1шт: ${discount ? price - discountPrice : 0}грн;`,
//   discountAll: `загальна знижка: ${
//     discount ? (price - discountPrice) * count : 0
//   }грн;`,
// };

// const gjbg ={
// toPay: `до сплати: ${total}грн;`,
// sumWithoutDiscount: `сума без знижки: ${totalPrice}грн;`,
// discountAll: `знижка: ${
//   totalDiscount
//     ? totalDiscount +
//       'грн'
//     : 'без знижки'
// };`,
// }
