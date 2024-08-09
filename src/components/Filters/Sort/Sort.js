import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import { useEffect, useState } from 'react';
import { Container, SortText, styleSelect } from './Sort.styled';

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

export default function Sort({
  name,
  placeholder,
  handleSort,
  setParams,
  params,
}) {
  const [personName, setPersonName] = useState('');

  const handleChangeComponent = event => {
    const {
      target: { value },
    } = event;

    setPersonName(value);
    handleSort(value, setParams, params);
  };
  useEffect(() => {
    if (params.getAll('sortField')[0] === 'createDate') {
      setPersonName('Спочатку нові');
      return;
    }
    if (
      params.getAll('sortField')[0] === 'price' &&
      params.getAll('sortOrder')[0] === 'asc'
    ) {
      setPersonName('Найдешевші');
      return;
    }
    if (
      params.getAll('sortField')[0] === 'price' &&
      params.getAll('sortOrder')[0] === 'desc'
    ) {
      setPersonName('Найдорожчі');
      return;
    }
    setPersonName('');
  }, [params]);
  return (
    <Container>
      <SortText>Сортування:</SortText>
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
