import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import { useEffect, useState } from 'react';
import { Container, SortText, styleSelect } from './Sort.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';

export default function Sort({
  name,
  placeholder,
  handleSort,
  setParams,
  params,
}) {
  const [personName, setPersonName] = useState('');

  const { width } = useWindowDimensions();
  const isDesktopWidth = width >= 1400;

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
      {isDesktopWidth && <SortText>Сортування:</SortText>}
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
