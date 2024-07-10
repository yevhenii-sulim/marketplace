import { useEffect, useState } from 'react';
import { Field, ListTown, WrapperTown } from './Placing.styled';
import Label from 'components/AddProductComponent/Label';
import { theme } from 'utils/theme';

export default function AddressDelivery({
  handleChange,
  setSubmitting,
  setFieldValue,
  errors,
  touched,
  town,
}) {
  const [streetName, setStreetName] = useState([]);
  const [enteredName, setEnteredName] = useState('');
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    if (typeof enteredName !== 'string') {
      abortController.abort();
      setStreetName([]);
      setIsOpenMenu(false);
      return;
    }

    if (enteredName === '') {
      abortController.abort();
      setStreetName([]);
      setIsOpenMenu(false);
      return;
    }

    async function fetchDataPost() {
      try {
        const result = await fetch(`https://api.novaposhta.ua/v2.0/json/`, {
          method: 'POST',
          body: JSON.stringify({
            apiKey: 'd06a7185b61614248a730316bfc45e0d',
            modelName: 'Address',
            calledMethod: 'getStreet',
            methodProperties: {
              CityRef: `${town}`,
              FindByString: `${enteredName.toLowerCase()}`,
            },
          }),
        });
        const { data } = await result.json();

        console.log('dataAddress', data, new Date().getSeconds());
        setIsOpenMenu(true);
        setStreetName(data);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchDataPost();
  }, [enteredName, town]);

  const handleChangeComponent = event => {
    const newValue = event.target.value;
    setEnteredName(newValue);
    handleChange(event);
    setSubmitting(false);
  };

  console.log('adress', streetName);

  return (
    <WrapperTown>
      <Label label="Вулиця" />
      <Field
        type="text"
        name="street"
        className="street"
        value={enteredName}
        onChange={handleChangeComponent}
        placeholder="Київ"
        style={
          touched.street && errors.street
            ? {
                border: 'none',
                boxShadow: `inset 0 0 0 3px ${theme.color.colorTextErrorForm}`,
              }
            : {}
        }
      />
      {isOpenMenu && (
        <ListTown>
          {streetName.map(({ Ref, StreetsType, Description }) => {
            return (
              <li
                key={Ref}
                onClick={() => {
                  setEnteredName([`${StreetsType} ${Description}`]);
                  setFieldValue('street', [`${StreetsType} ${Description}`]);
                }}
              >
                {StreetsType} {Description}
              </li>
            );
          })}
        </ListTown>
      )}
    </WrapperTown>
  );
}
