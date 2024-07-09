import { useEffect, useState } from 'react';
import { Field, ListTown, WrapperTown } from './Placing.styled';
import Label from 'components/AddProductComponent/Label';

export default function ChooseTown({
  handleChange,
  setSubmitting,
  setFieldValue,
  valueListTown,
  kindOfSection,
}) {
  const [townName, setTownName] = useState([]);
  const [enteredName, setEnteredName] = useState('');
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    if (typeof enteredName !== 'string') {
      abortController.abort();
      setTownName([]);
      setIsOpenMenu(false);
      return;
    }

    if (enteredName === '') {
      abortController.abort();
      setTownName([]);
      setIsOpenMenu(false);
      return;
    }

    async function fetchDataPost() {
      try {
        const result = await fetch(`https://api.novaposhta.ua/v2.0/json/`, {
          signal: abortController.signal,
          method: 'POST',
          body: JSON.stringify({
            apiKey: 'd06a7185b61614248a730316bfc45e0d',
            modelName: 'AddressGeneral',
            calledMethod: 'getCities',
            methodProperties: {
              FindByString: `${enteredName.toLowerCase()}`,
            },
          }),
        });
        const { data } = await result.json();
        console.log('dataPost', data, new Date().getSeconds());
        setIsOpenMenu(true);
        setTownName(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDataPost();
  }, [enteredName]);

  const handleChangeComponent = event => {
    const newValue = event.target.value;
    setEnteredName(newValue);
    setFieldValue('town', newValue);
    handleChange(event);
    setSubmitting(false);
  };

  return (
    <WrapperTown>
      <Label label="Ваше місто" />
      <Field
        type="text"
        name="town"
        className="town"
        value={valueListTown}
        onChange={handleChangeComponent}
        placeholder="Київ"
      />
      <Field name="town" type="hidden">
        {({ field }) => <input type="hidden" {...field} value={enteredName} />}
      </Field>
      {isOpenMenu && (
        <ListTown>
          {townName.map(({ SettlementTypeDescription, Description, Ref }) => {
            return (
              <li
                key={Ref}
                onClick={() => {
                  const selectedTown = [
                    `${SettlementTypeDescription} ${Description}`,
                    `${Ref}`,
                  ];
                  setFieldValue('town', selectedTown);
                  setEnteredName(selectedTown);
                }}
              >
                {SettlementTypeDescription} {Description}
              </li>
            );
          })}
        </ListTown>
      )}
    </WrapperTown>
  );
}
