import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { selectBasket } from '../../redux/basket/select';
import { setOrder } from '../../redux/orderData/slice';
import { selectAuth, selectMyUser } from '../../redux/auth/selector';
import { addNewProduct } from '../../redux/auth/slice';
import signupSchema from 'components/Placing/validationSchema';
import Placing from 'components/Placing/Placing';
import useWindowDimensions from 'hooks/useWindowDimensions';
import ProductComponent from './ProductComponent';
import { handleOrder, onSubmitOrder, prices } from './Functions';
import {
  Form,
  TotalPrice,
  WrapperButton,
  WrapperBuy,
  WrapperListOrder,
  addProductButton,
} from './Ordering.styled';
import TotalPriceListComponent from './TotalPriceListComponent';
import { theme } from 'utils/theme';

export default function Ordering() {
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { width } = useWindowDimensions();
  const userData = useSelector(selectMyUser);
  const isUserRegistered = useSelector(selectAuth);

  const handleSubmit = async values => {
    dispatch(
      setOrder({
        ...values,
        products: [...basket],
      })
    );

    if (isUserRegistered) {
      basket.forEach(item => {
        const product = {
          _id: item.id,
          ...item,
          ...values,
        };

        delete product.id;

        dispatch(addNewProduct(product));
      });
    } else {
      const products = [];

      basket.forEach(item => {
        products.push({
          _id: item.id,
          ...item,
          ...values,
        });
      });

      localStorage.setItem('productStory', JSON.stringify(products));
    }

    navigation('/purchase');
  };

  handleOrder(basket);

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
            onSubmitOrder(basket, values, userData, dispatch, isUserRegistered);
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
              {console.log(values)}
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
              <WrapperListOrder>
                {width >= parseInt(theme.breakPoints.lg) && (
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
                        <ProductComponent
                          key={id}
                          id={id}
                          img={img}
                          title={title}
                          count={count}
                          discount={discount}
                          discountPrice={discountPrice}
                          price={price}
                        />
                      )
                    )}
                  </ul>
                )}

                <WrapperBuy>
                  <TotalPrice>
                    {(width >= parseInt(theme.breakPoints.lg) ||
                      width <= parseInt(theme.breakPoints.md)) && (
                      <TotalPriceListComponent prices={prices} />
                    )}
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
