import AddressDelivery from './AddressDelivery';
import { Field } from './Placing.styled';

export function addAddressDelivery(
  values,
  handleChange,
  setSubmitting,
  wayDelivery
) {
  switch (wayDelivery) {
    case 'До відділення Нової Пошти':
      return (
        <AddressDelivery
          handleChange={handleChange}
          setSubmitting={setSubmitting}
          name="postOffice"
          placeholder="Оберіть відділення"
        />
      );
    case 'До поштомату Нової Пошти':
      return (
        <AddressDelivery
          handleChange={handleChange}
          setSubmitting={setSubmitting}
          name="postOffice"
          placeholder="Оберіть поштомат"
        />
      );
    case "Кур'єром Нової Пошти":
      return (
        <>
          <AddressDelivery
            handleChange={handleChange}
            setSubmitting={setSubmitting}
            name="postOffice"
            placeholder="Оберіть вулицю та дім"
          />
          <Field
            type="text"
            name="apartment"
            className="apartment"
            onChange={handleChange}
            placeholder="Вкажіть № квартири"
          />
        </>
      );
    default:
      return;
  }
}
