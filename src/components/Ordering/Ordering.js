import { useDispatch, useSelector } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { selectBasket } from '../../redux/basket/select';
import { deleteBasket, deleteProduct } from '../../redux/basket/slice';
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
import Placing from '../Placing/Placing';
import { Formik } from 'formik';
import signupSchema from '../Placing/validationSchema';
import { useNavigate } from 'react-router-dom';
import { setOrder } from '../../redux/orderData/slice';
import { selectMyUser } from '../../redux/auth/selector';
import { addNewProduct } from '../../data/myStory';

const prices = {
  total: 0,
  totalPrice: 0,
  totalDiscount: 0,
  totalCount: 0,
};

function onSubmitOrder(data, values) {
  const orderData = data.map(
    ({ count, discount, discountPrice, price, title }) => {
      return {
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
      };
    }
  );

  orderData.push(
    {
      toPay: `до сплати: ${prices.total}грн;`,
      sumWithoutDiscount: `сума без знижки: ${prices.totalPrice}грн;`,
      discountAll: `знижка: ${
        prices.totalDiscount ? prices.totalDiscount + 'грн' : 'без знижки'
      };`,
    },
    { values }
  );

  console.log(orderData);
  console.log(values);
}

function handleOrder(data, values) {
  console.log('values', values);

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

/*
function defineWordByCount(product) {
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
  */

export default function Ordering() {

  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const userData = useSelector(selectMyUser);

  const deleteFromBasket = id => {
    dispatch(deleteProduct(id));
  };

  const handleSubmit = values => {
    dispatch(deleteBasket());
    
    dispatch(setOrder({
      ...values,
      products: [...basket]
    }));

    basket.forEach(item => {
      addNewProduct(item.id, item, values);
    });

    navigation('/purchase');
  };

  handleOrder(basket);

  console.log('userData', userData);

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
            street: '',
            building: '',
            floor: '',
            apartment: '',
            pay: '',
          }}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={signupSchema}
          onSubmit={values => {
            onSubmitOrder(basket, values);
            handleSubmit(values);
          }}
        >
          {({
            values,
            handleChange,
            setSubmitting,
            setFieldValue,
            errors,
            touched,
          }) => (
            <Form>
              <Placing
                wayDelivery={values.wayDelivery}
                handleChange={handleChange}
                setSubmitting={setSubmitting}
                tel={values.tel}
                firstName={values.firstName}
                lastName={values.lastName}
                email={values.email}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
                pay={values.pay}
                refTown={
                  typeof values.town === 'string' ? values.town : values.town[1]
                }
                valueListTown={
                  typeof values.town === 'string' ? values.town : values.town[0]
                }
              />
              {console.log(values)}
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
                    }) => (
                      <List key={id}>
                        <WrapperProduct>
                          <Image>
                            <img height="114" src={img} alt={title} />
                          </Image>
                          <About className="basket">
                            <Title>{title}</Title>
                            <br />
                            <span>{count}</span>
                          </About>
                          <Actives>
                            <Price>
                              {discount ? (
                                <>
                                  <p className="price-discount">
                                    {price}&#8372;
                                  </p>
                                  <p className="discount">
                                    {discountPrice}&#8372;
                                  </p>
                                </>
                              ) : (
                                <p className="price">{price}&#8372;</p>
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
                    )
                  )}
                  <div>{console.log(errors)}</div>
                </ul>
                <WrapperBuy>
                  <TotalPrice>
                    <Sum>
                      <span className="info">
                        {prices.totalCount} товар на суму
                      </span>
                      <span className="info-price">
                        {prices.totalPrice}&#8372;
                      </span>
                    </Sum>
                    <Discount>
                      <span className="info">Знижка</span>
                      <span className="info-price info-price_discount">
                        {prices.totalDiscount}&#8372;
                      </span>
                    </Discount>
                    
                    <Total>
                      <span>Загальна сума</span>
                      <span>{prices.total}&#8372;</span>
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
          )}
        </Formik>
      )}
    </>
  );
}
