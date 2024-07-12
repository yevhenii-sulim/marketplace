import { useEffect, useState } from 'react';
import { Field, ListTown, WrapperTown } from './Placing.styled';
import Label from 'components/AddProductComponent/Label';
import { theme } from 'utils/theme';

export default function ChooseTown({
  handleChange,
  setSubmitting,
  setFieldValue,
  valueListTown,
  errors,
  touched,
}) {
  const [townName, setTownName] = useState([]);
  const [enteredName, setEnteredName] = useState('');
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    async function fetchDataPost() {
      try {
        const result = await fetch(`https://api.novaposhta.ua/v2.0/json/`, {
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

        setIsOpenMenu(true);
        setTownName(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (enteredName) {
      fetchDataPost();
    } else {
      setIsOpenMenu(false);
    }
  }, [enteredName]);

  const handleChangeComponent = event => {
    const newValue = event.target.value;
    setEnteredName(newValue);
    setFieldValue('town', newValue);
    handleChange(event);
    setSubmitting(false);
  };
  const handleClick = (SettlementTypeDescription, Description, Ref) => {
    const selectedTown = [
      `${SettlementTypeDescription} ${Description}`,
      `${Ref}`,
    ];
    setFieldValue('town', selectedTown);
    setEnteredName(selectedTown);
    setIsOpenMenu(false);
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
        style={
          touched.town && errors.town
            ? {
                border: 'none',
                boxShadow: `inset 0 0 0 3px ${theme.color.colorTextErrorForm}`,
              }
            : {}
        }
      />
      <Field name="town" type="hidden">
        {({ field }) => <input type="hidden" {...field} value={enteredName} />}
      </Field>
      {isOpenMenu && enteredName && (
        <ListTown>
          {townName.map(({ SettlementTypeDescription, Description, Ref }) => {
            return (
              <li
                key={Ref}
                onClick={() =>
                  handleClick(SettlementTypeDescription, Description, Ref)
                }
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
