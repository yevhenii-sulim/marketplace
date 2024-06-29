import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import { styleSelect } from './Placing.styled';
import { ListItemText } from '@mui/material';
const names = ['Харків', 'Львов'];

export default function Delivery({
  handleChange,
  setSubmitting,
  name,
  placeholder,
}) {
  const [personName, setPersonName] = useState('');

  const handleChangeComponent = event => {
    const {
      target: { value },
    } = event;
    handleChange(event);
    setSubmitting(false);
    setPersonName(typeof value === 'string' ? value.split(',') : value);
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
          displayEmpty
          name={name}
          value={personName}
          onChange={handleChangeComponent}
          renderValue={selected => {
            if (selected.length === 0) {
              return <em>{placeholder}</em>;
            }

            return selected.join(', ');
          }}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
