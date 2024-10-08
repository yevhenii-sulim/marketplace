import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import { Container, SortText, styleSelect } from './Sort.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { theme } from 'utils/theme';

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

export default function Sort({ name, placeholder, handleSort }) {
  const [personName, setPersonName] = useState('');
  const { width } = useWindowDimensions();
  const handleChangeComponent = event => {
    const {
      target: { value },
    } = event;

    setPersonName(value);
    handleSort(value);
  };

  return (
    <Container>
      {width >= parseInt(theme.breakPoints.lg) && (
        <SortText>Сортування:</SortText>
      )}
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
          MenuProps={MenuProps}
        >
          <MenuItem value="">
            <em>{placeholder}</em>
          </MenuItem>
          <MenuItem value="Спочатку нові">Спочатку нові</MenuItem>
          <MenuItem value="Найдешевші">Найдешевші</MenuItem>
          <MenuItem value="Найдорожчі">Найдорожчі</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}
