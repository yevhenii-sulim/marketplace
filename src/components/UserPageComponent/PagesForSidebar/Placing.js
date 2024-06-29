import MarkSvg from 'SvgComponents/MarkSVG/MarkSvg';
import Delivery from './Delivery';
import { addAddressDelivery } from './Functional';
import { Box, Field, TitleBox, WrapperForm } from './Placing.styled';
// import { useSearchParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

export default function Placing({
  values,
  handleChange,
  setSubmitting,
  firstName,
  lastName,
  tel,
  email,
  wayDelivery,
}) {
  //   const dispatch = useDispatch();
  // const [searchParams, setSearchParams] = useSearchParams({
  //   apiKey: 'd06a7185b61614248a730316bfc45e0d',
  //   modelName: 'AddressGeneral',
  //   calledMethod: 'searchSettlements',
  //   methodProperties: {
  //     CityName: 'київ',
  //     Limit: '50',
  //     Page: '2',
  //   },
  // });
  // useEffect(() => {
  //   searchParams.forEach(item => console.log(item));
  //   async function fetchDataPost() {
  //     const data = await fetch(
  //       `https://api.novaposhta.ua/v2.0/json/${searchParams}`
  //     );

  //     const result = await data.json();
  //     console.log('data', result);
  //   }

  //   fetchDataPost();
  // }, [searchParams]);

  return (
    <div>
      <Box className="contacts">
        <TitleBox>Контактні дані</TitleBox>
        <WrapperForm className="wrapper-contacts">
          <label>
            <p>
              <span className="label-place">
                Iм`я
                <MarkSvg />
              </span>
            </p>
            <Field
              type="text"
              name="firstName"
              value={firstName.trim()}
              onChange={handleChange}
              placeholder="Михайло"
            />
          </label>
          <label>
            <p>
              <span className="label-place">
                Прізвище
                <MarkSvg />
              </span>
            </p>
            <Field
              type="text"
              name="lastName"
              value={lastName.trim()}
              onChange={handleChange}
              placeholder="Багряний"
            />
          </label>
          <label>
            <p>
              <span className="label-place">
                Телефон
                <MarkSvg />
              </span>
            </p>
            <Field
              type="tel"
              name="tel"
              value={tel.trim()}
              onChange={handleChange}
              placeholder="050-589-00-32"
            />
          </label>
          <label>
            <p>
              <span className="label-place">
                Електрона адреса
                <MarkSvg />
              </span>
            </p>
            <Field
              type="email"
              name="email"
              onChange={handleChange}
              value={email.trim()}
              placeholder="mbagrianiy@gmail.com"
            />
          </label>
        </WrapperForm>
      </Box>
      <Box className="delivery">
        <TitleBox>Спосіб доставки</TitleBox>
        <WrapperForm className="wrapper-delivery">
          <label>
            <p>
              <span className="label-place">
                Ваше місто
                <MarkSvg />
              </span>
            </p>
            <Delivery
              handleChange={handleChange}
              setSubmitting={setSubmitting}
              name="town"
              placeholder="Оберіть ваше місце"
            />
          </label>
          <Field
            id="at-section"
            type="radio"
            name="wayDelivery"
            onChange={handleChange}
            value="До відділення Нової Пошти"
            checked={wayDelivery === 'До відділення Нової Пошти'}
          />
          <label className="checkbox" htmlFor="at-section">
            До відділення Нової Пошти
          </label>
          <Field
            id="at-post"
            type="radio"
            name="wayDelivery"
            value="До поштомату Нової Пошти"
            checked={wayDelivery === 'До поштомату Нової Пошти'}
            onChange={handleChange}
          />
          <label className="checkbox" htmlFor="at-post">
            До поштомату Нової Пошти
          </label>
          <Field
            id="by-postman"
            type="radio"
            name="wayDelivery"
            onChange={handleChange}
            value="Кур'єром Нової Пошти"
            checked={wayDelivery === "Кур'єром Нової Пошти"}
          />
          <label className="checkbox" htmlFor="by-postman">
            Кур'єром Нової Пошти
          </label>
          {addAddressDelivery(values, handleChange, setSubmitting, wayDelivery)}
        </WrapperForm>
      </Box>
    </div>
  );
}
