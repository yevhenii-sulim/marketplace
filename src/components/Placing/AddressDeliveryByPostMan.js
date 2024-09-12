import Label from 'components/AddProductComponent/Label';
import { Field, PlaceAddress } from './Placing.styled';
import { theme } from 'utils/theme';
import AddressDelivery from './AddressDelivery';
import { useState } from 'react';

export default function AddressDeliveryByPostMan({
  handleChange,
  setSubmitting,
  setFieldValue,
  errors,
  touched,
  town,
}) {
  const [valueBuilder, setValueBuilder] = useState('');
  const [valueApartment, setValueApartment] = useState('');
  const [valueFloor, setValueFloor] = useState('');

  return (
    <>
      <AddressDelivery
        handleChange={handleChange}
        setSubmitting={setSubmitting}
        setFieldValue={setFieldValue}
        errors={errors}
        touched={touched}
        town={town}
      />
      <PlaceAddress>
        <label>
          <Label label="Будинок" />
          <Field
            type="number"
            name="building"
            className="building"
            value={valueBuilder}
            onChange={event => {
              setValueBuilder(Math.abs(event.target.value));
              handleChange(event);
            }}
            placeholder="56"
            style={
              touched.street && errors.street
                ? {
                    border: 'none',
                    boxShadow: `inset 0 0 0 3px ${theme.color.colorTextErrorForm}`,
                  }
                : {}
            }
          />
        </label>
        <label>
          Квартира
          <Field
            type="number"
            name="apartment"
            className="apartment"
            value={valueApartment}
            onChange={event => {
              setValueApartment(Math.abs(event.target.value));
              handleChange(event);
            }}
            placeholder="3"
          />
        </label>
        <label>
          Поверх
          <Field
            type="number"
            name="floor"
            className="floor"
            value={valueFloor}
            onChange={event => {
              setValueFloor(Math.abs(event.target.value));
              handleChange(event);
            }}
            placeholder="20"
          />
        </label>
      </PlaceAddress>
    </>
  );
}
