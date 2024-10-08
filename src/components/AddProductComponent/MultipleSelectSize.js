import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import { useEffect, useState } from 'react';
import { styleSelect } from './AddProductComponent.styled';
import { Checkbox, ListItemText } from '@mui/material';

export default function MultipleSelectSize({
  handleChange,
  setSubmitting,
  sizeFootwear,
  sizeClothes,
  values,
  name,
  error,
  touched,
}) {
  const [personName, setPersonName] = useState([]);

  const handleChangeComponent = event => {
    const {
      target: { value },
    } = event;
    handleChange(event);
    setSubmitting(false);
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  useEffect(() => {
    setPersonName([]);
  }, [values.category]);

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
              return <em>Оберіть розмір</em>;
            }
            return selected.join(', ');
          }}
        >
          {values.category === 'Взуття з натуральних матеріалів'
            ? sizeFootwear.map(size => {
                return (
                  <MenuItem key={size} value={size}>
                    <Checkbox checked={personName.indexOf(size) > -1} />
                    <ListItemText primary={size} />
                  </MenuItem>
                );
              })
            : sizeClothes.map(size => {
                return (
                  <MenuItem key={size} value={size}>
                    <Checkbox checked={personName.indexOf(size) > -1} />
                    <ListItemText primary={size} />
                  </MenuItem>
                );
              })}
        </Select>
        {touched && error && <p className="error">{error}</p>}
      </FormControl>
    </div>
  );
}
