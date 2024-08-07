import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import { styleSelect } from './AddProductComponent.styled';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectState({
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
          onChange={e => {
            handleChangeComponent(e);
            handleChange(e);
            setSubmitting(false);
          }}
          renderValue={selected => {
            if (selected.length === 0) {
              return <em>{placeholder}</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
        >
          <MenuItem value="Новий товар">Новий товар</MenuItem>
          <MenuItem value="Вживаний товар">Вживаний товар</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
