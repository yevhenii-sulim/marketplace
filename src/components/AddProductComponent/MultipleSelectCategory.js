import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import { addLink } from '../../redux/createLink/slice';
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

function translateNameCategory(value) {
  switch (value) {
    case 'Подарункові товари':
      return 'gift';
    case 'Одяг':
      return 'clothes';
    case 'Аксесуари':
      return 'accessories';
    case 'Взуття з натуральних матеріалів':
      return 'eco';
    case 'Натуральна косметика':
      return 'makeup';
    case 'Товари з перероблених матеріалів':
      return 'recycledMaterials';
    default:
      return 'forFree';
  }
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectCategory({
  handleChange,
  setSubmitting,
  names,
  name,
  error,
  touched,
}) {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const dispatch = useDispatch();
  function resetLinkToProduct(value) {
    dispatch(addLink(''));
    dispatch(addLink(translateNameCategory(value)));
  }

  const handleChangeComponent = event => {
    const { value } = event.target;

    handleChange(value);
    resetLinkToProduct(value);

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
              return <em>Оберіть одну з категорій</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {names.map(({ nameList }) => {
            if (nameList === 'Всі оголошення') {
              return (
                <MenuItem
                  key={nameList}
                  value=""
                  style={getStyles('', personName, theme)}
                >
                  Оберіть одну з категорій
                </MenuItem>
              );
            }
            return (
              <MenuItem
                key={nameList}
                value={nameList}
                style={getStyles(nameList, personName, theme)}
              >
                {nameList}
              </MenuItem>
            );
          })}
        </Select>
        {touched && error && <p className="error">{error}</p>}
      </FormControl>
    </div>
  );
}
