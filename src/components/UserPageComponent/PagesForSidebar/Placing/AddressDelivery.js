import { useEffect, useState } from 'react';
import { Field, ListTown, WrapperTown } from './Placing.styled';
import Label from 'components/AddProductComponent/Label';

export default function AddressDelivery({
  handleChange,
  setSubmitting,
  setFieldValue,
  error,
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
            modelName: 'AddressGeneral',
            calledMethod: 'searchSettlementStreets',
            methodProperties: {
              StreetName: `${enteredName.toLowerCase()}`,
              SettlementRef: `${town}`,
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
    setFieldValue('town', newValue);
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
      />
      {isOpenMenu && (
        <ListTown>
          {streetName.map(({ Present }) => {
            return (
              <li
                key={Present}
                onClick={() => {
                  setFieldValue('town', Present);
                  setEnteredName(Present);
                }}
              >
                {Present}
              </li>
            );
          })}
        </ListTown>
      )}
    </WrapperTown>
  );
}
