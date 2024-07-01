import { useEffect, useState } from 'react';
import { Field, ListTown, WrapperTown } from './Placing.styled';

export default function Delivery({
  handleChange,
  setSubmitting,
  name,
  getTown,
}) {
  const [townName, setTownName] = useState([]);
  const [enteredName, setEnteredName] = useState('');
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    async function fetchDataPost() {
      const isQuery = enteredName?.split(' ').length;

      if (enteredName && isQuery > 2) {
        return;
      }

      try {
        const result = await fetch(`https://api.novaposhta.ua/v2.0/json/`, {
          method: 'POST',
          body: JSON.stringify({
            apiKey: 'd06a7185b61614248a730316bfc45e0d',
            modelName: 'AddressGeneral',
            calledMethod: 'searchSettlements',
            methodProperties: {
              CityName: `${enteredName.toLowerCase()}`,
              Limit: '50',
              Page: '1',
            },
          }),
        });
        const { data } = await result.json();
        if (data[0].Addresses.length === 0) {
          setIsOpenMenu(false);
        } else {
          setIsOpenMenu(true);
        }
        setTownName(data[0].Addresses);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDataPost();
  }, [enteredName]);

  const handleChangeComponent = event => {
    setEnteredName(event.target.value);
    handleChange(event);
    setSubmitting(false);
  };

  return (
    <WrapperTown>
      <Field
        type="text"
        name={name}
        className="town"
        value={enteredName}
        onChange={handleChangeComponent}
        placeholder="Київ"
      />
      {isOpenMenu && (
        <ListTown>
          {townName.map(({ Present }) => {
            return (
              <li
                key={Present}
                onClick={evt => {
                  setEnteredName(evt.target.innerText);
                  setIsOpenMenu(false);
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
