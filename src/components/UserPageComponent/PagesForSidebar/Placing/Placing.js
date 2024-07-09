import MarkSvg from 'SvgComponents/MarkSVG/MarkSvg';
import AddressDeliveryByPostMan from '../AddressDeliveryByPostMan';
import { Box, Field, TitleBox, WrapperForm } from './Placing.styled';
import ChooseTown from './ChooseTown';
import ChoosePostOffice from './ChoosePostOffice';

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
}) {
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
            <ChooseTown
              handleChange={handleChange}
              setSubmitting={setSubmitting}
              name="town"
              placeholder="Оберіть ваше місце"
              setFieldValue={setFieldValue}
              valueListTown={valueListTown}
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
          {wayDelivery === 'До відділення Нової Пошти' && (
            <ChoosePostOffice
              handleChange={handleChange}
              setSubmitting={setSubmitting}
              setFieldValue={setFieldValue}
              error={errors}
              touched={touched}
              town={refTown}
              kindOfSection="відділення"
            />
          )}
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
          {wayDelivery === 'До поштомату Нової Пошти' && (
            <ChoosePostOffice
              handleChange={handleChange}
              setSubmitting={setSubmitting}
              setFieldValue={setFieldValue}
              error={errors}
              touched={touched}
              town={refTown}
              kindOfSection={'поштомат або пункт для видачі'}
            />
          )}
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
          {wayDelivery === "Кур'єром Нової Пошти" && (
            <AddressDeliveryByPostMan
              handleChange={handleChange}
              setSubmitting={setSubmitting}
              setFieldValue={setFieldValue}
              error={errors}
              touched={touched}
              town={refTown}
            />
          )}
        </WrapperForm>
      </Box>
    </div>
  );
}
