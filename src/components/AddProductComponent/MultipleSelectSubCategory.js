import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import { styleSelect } from './AddProductComponent.styled';
import { useDispatch } from 'react-redux';
import { addLink } from '../../redux/createLink/slice';

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function translateNameSubCategory(value) {
  switch (value) {
    case 'Сувеніри':
      return 'souvenirs';
    case 'Подарункові набори':
      return 'giftSets';
    case 'Cвяткова тематика':
      return 'festiveTheme';
    case 'Сорочки':
      return 'shirts';
    case 'Плаття':
      return 'dress';
    case 'Блузки':
      return 'blouses';
    case 'Вишивка':
      return 'embroidery';
    case 'Сумки':
      return 'handbags';
    case 'Пояси':
      return 'belts';
    case 'Портмоне':
      return 'purse';
    case 'Хустки':
      return 'handkerchiefs';
    case 'Окуляри':
      return 'glass';
    case 'Зимове':
      return 'winter';
    case 'Літнє':
      return 'summer';
    case 'Мило':
      return 'soap';
    case 'Парфюмерія':
      return 'perfumery';
    case 'Перероблений денім':
      return 'recycled_denim';
    case 'Відновлений секонд хенд':
      return 'second_hand';
    default:
      return;
  }
}

export default function MultipleSelectSubCategory({
  handleChange,
  setSubmitting,
  names,
  name,
  values,
  error,
  touched,
}) {
  const theme = useTheme();
  const [personName, setPersonName] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    setPersonName('');
  }, [values.category]);

  function resetLinkToProduct(value) {
    dispatch(addLink(translateNameSubCategory(value)));
  }

  const handleChangeComponent = event => {
    const { value } = event.target;
    resetLinkToProduct(value);
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
              return <em>Оберіть підкатегорію товару</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
        >
          {names
            ?.filter(({ nameList }) => {
              return nameList === values.category;
            })
            .map(({ subCategories }) =>
              subCategories?.map(({ nameList }) => {
                return (
                  <MenuItem
                    key={nameList}
                    value={nameList}
                    style={getStyles(nameList, personName, theme)}
                  >
                    {nameList}
                  </MenuItem>
                );
              })
            )}
        </Select>
        {touched && error && <p className="error">{error}</p>}
      </FormControl>
    </div>
  );
}
