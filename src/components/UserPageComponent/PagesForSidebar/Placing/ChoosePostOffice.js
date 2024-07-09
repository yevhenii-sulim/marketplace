import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { styleSelect } from './Placing.styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import { FormControl, MenuItem, Select } from '@mui/material';
import Label from 'components/AddProductComponent/Label';

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ChoosePostOffice({
  handleChange,
  setSubmitting,
  setFieldValue,
  error,
  touched,
  town,
  kindOfSection,
}) {
  const [postOffice, setPostOffice] = useState([]);
  const [personName, setPersonName] = useState('');
  const theme = useTheme();

  useEffect(() => {
    setPersonName('');
    async function fetchDataPost() {
      try {
        const result = await fetch(`https://api.novaposhta.ua/v2.0/json/`, {
          method: 'POST',
          body: JSON.stringify({
            apiKey: 'd06a7185b61614248a730316bfc45e0d',
            modelName: 'AddressGeneral',
            calledMethod: 'getWarehouses',
            methodProperties: {
              CityRef: `${town}`,
            },
          }),
        });
        const { data } = await result.json();

        console.log('dataPost', typeof town, new Date().getSeconds());

        setPostOffice(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDataPost();
  }, [town]);

  const handleChangeComponent = event => {
    const {
      target: { value },
    } = event;
    handleChange(event);
    setSubmitting(false);
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  console.log(postOffice);

  return (
    <>
      {postOffice.length !== 0 && (
        <div>
          <Label label={`Оберіть ${kindOfSection}`} />
          <FormControl sx={styleSelect}>
            <Select
              IconComponent={() => (
                <span className="arrow_select">
                  <ExpandMoreIcon />
                </span>
              )}
              displayEmpty
              name="postOffice"
              value={personName}
              onChange={handleChangeComponent}
              renderValue={selected => {
                if (selected.length === 0) {
                  return <em>{kindOfSection}</em>;
                }
                return selected.join(', ');
              }}
            >
              {postOffice
                ?.filter(({ Description }) =>
                  `${kindOfSection}`
                    .toLowerCase()
                    .includes(Description.split(' ')[0].toLowerCase())
                )
                .map(({ Description, SiteKey }) => (
                  <MenuItem
                    key={SiteKey}
                    value={Description}
                    style={getStyles(Description, personName, theme)}
                  >
                    {Description}
                  </MenuItem>
                ))}
            </Select>
            {touched.postOffice && error.postOffice && (
              <p className="error">{error.postOffice}</p>
            )}
          </FormControl>
        </div>
      )}
    </>
  );
}
