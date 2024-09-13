import { useSelector } from 'react-redux';
import PlacingContactsComponent from './PlacingContactsComponent';
import WayDelivery from './WayDelivery';
import WayPay from './WayPay';
import { selectBasket } from '../../redux/basket/select';
import ProductComponent from 'components/Ordering/ProductComponent';
import TotalPriceListComponent from 'components/Ordering/TotalPriceListComponent';
import { prices } from 'components/Ordering/Functions';
import { Box, TitleBox, WrapperForm } from './Placing.styled';
import { theme } from 'utils/theme';
import MarkSvg from 'SvgComponents/MarkSVG/MarkSvg';

export default function Placing({
  handleChange,
  setSubmitting,
  firstName,
  lastName,
  tel,
  email,
  wayDelivery,
  setFieldValue,
  valueListTown,
  refTown,
  errors,
  touched,
  pay,
}) {
  const basket = useSelector(selectBasket);
  const dataForContacts = [
    {
      type: 'text',
      name: 'firstName',
      value: firstName,
      placeholder: 'Михайло',
      label: "Iм'я",
    },
    {
      type: 'text',
      name: 'lastName',
      value: lastName,
      placeholder: 'Багряний',
      label: 'Прізвище',
    },
    {
      type: 'tel',
      name: 'tel',
      value: tel,
      placeholder: '+380-050-589-00',
      label: 'Телефон',
    },
    {
      type: 'email',
      name: 'email',
      value: email,
      placeholder: 'mbagrianiy@gmail.com',
      label: 'Електронна адреса',
    },
  ];
  return (
    <div>
      <Box className="contacts">
        <TitleBox>Контактні дані</TitleBox>
        <WrapperForm className="wrapper-contacts">
          {dataForContacts.map(({ type, name, value, placeholder, label }) => (
            <PlacingContactsComponent
              key={label}
              name={name}
              handleChange={handleChange}
              placeholder={placeholder}
              touched={touched}
              errors={errors}
              label={label}
              value={value}
              type={type}
            />
          ))}
        </WrapperForm>
      </Box>
      <Box className="about-bought">
        <ul>
          {basket.map(
            ({ id, title, price, img, discount, discountPrice, count }) => (
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
        <TotalPriceListComponent prices={prices} />
      </Box>
      <Box className="delivery">
        <TitleBox>Спосіб доставки</TitleBox>
        <WrapperForm className="wrapper-delivery">
          <WayDelivery
            handleChange={handleChange}
            setSubmitting={setSubmitting}
            setFieldValue={setFieldValue}
            valueListTown={valueListTown}
            errors={errors}
            touched={touched}
            wayDelivery={wayDelivery}
            refTown={refTown}
          />
        </WrapperForm>
      </Box>
      <Box className="pay">
        <TitleBox>
          Оплата
          <MarkSvg />
        </TitleBox>
        <WrapperForm className="wrapper-pay">
          <WayPay
            payWay="Післяплата"
            id="after-pay"
            handleChange={handleChange}
            pay={pay}
            touched={touched}
            errors={errors}
            setSubmitting={setSubmitting}
            label={'Післяплата'}
            forCheckbox={'after-pay'}
            style={
              touched.pay && errors.pay
                ? {
                    border: 'none',
                    boxShadow: `inset 0 0 0 3px ${theme.color.colorTextErrorForm}`,
                  }
                : {}
            }
          />
          <WayPay
            payWay="Карткою"
            id="before-pay"
            handleChange={handleChange}
            pay={pay}
            touched={touched}
            errors={errors}
            setSubmitting={setSubmitting}
            label="Карткою"
            forCheckbox={'before-pay'}
            style={
              touched.pay && errors.pay
                ? {
                    border: 'none',
                    boxShadow: `inset 0 0 0 3px ${theme.color.colorTextErrorForm}`,
                  }
                : {}
            }
          />
        </WrapperForm>
      </Box>
    </div>
  );
}
