import Label from 'components/AddProductComponent/Label';
import { Field, PlaceAddress } from './Placing.styled';
import { theme } from 'utils/theme';
import AddressDelivery from './AddressDelivery';

export default function AddressDeliveryByPostMan({
  handleChange,
  setSubmitting,
  setFieldValue,
  errors,
  touched,
  town,
}) {
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
            type="text"
            name="building"
            className="building"
            onChange={handleChange}
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
            onChange={handleChange}
            placeholder="3"
          />
        </label>
        <label>
          Поверх
          <Field
            type="number"
            name="floor"
            className="floor"
            onChange={handleChange}
            placeholder="20"
          />
        </label>
      </PlaceAddress>
    </>
  );
}
