import Label from 'components/AddProductComponent/Label';
import AddressDelivery from './Placing/AddressDelivery';
import { Field, PlaceAddress } from './Placing/Placing.styled';

export default function AddressDeliveryByPostMan({
  handleChange,
  setSubmitting,
  setFieldValue,
  error,
  touched,
  town,
}) {
  return (
    <>
      <AddressDelivery
        handleChange={handleChange}
        setSubmitting={setSubmitting}
        setFieldValue={setFieldValue}
        error={error}
        touched={touched}
        town={town}
      />
      <PlaceAddress>
        <label>
          <Label label="Будинок" />
          <Field
            type="text"
            name="building"
            className="building"
            onChange={handleChange}
            placeholder="56"
          />
        </label>
        <label>
          Квартира
          <Field
            type="text"
            name="floor"
            className="floor"
            onChange={handleChange}
            placeholder="3"
          />
        </label>
        <label>
          Поверх
          <Field
            type="text"
            name="apartment"
            className="apartment"
            onChange={handleChange}
            placeholder="20"
          />
        </label>
      </PlaceAddress>
    </>
  );
}
