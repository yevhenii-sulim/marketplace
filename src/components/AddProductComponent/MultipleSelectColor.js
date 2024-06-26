import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import { ColorSign, styleSelect } from './AddProductComponent.styled';

export default function MultipleSelectColor({
  names,
  handleChange,
  setSubmitting,
  error,
  touched,
  name,
}) {
  const [personName, setPersonName] = useState([]);
  const handleChangeComponent = event => {
    const {
      target: { value = [] },
    } = event;
    if (value.length > 3) {
      return;
    }
    setPersonName(typeof value === 'string' ? value.split(',') : value);
    handleChange(event);
    setSubmitting(false);
  };
  return (
    <div>
      <FormControl sx={styleSelect}>
        <Select
          IconComponent={() => (
            <span className="arrow_select">
              <ExpandMoreIcon />
            </span>
          )}
          multiple
          displayEmpty
          name={name}
          value={personName}
          onChange={handleChangeComponent}
          renderValue={selected => {
            if (selected.length === 0) {
              return <em>Оберіть не більше 3 кольорів</em>;
            }
            return selected.join(', ');
          }}
        >
          {names.map(({ name, sign }) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
              <ColorSign $color={sign}></ColorSign>
            </MenuItem>
          ))}
        </Select>
        {touched && error && <p className="error">{error}</p>}
      </FormControl>
    </div>
  );
}
