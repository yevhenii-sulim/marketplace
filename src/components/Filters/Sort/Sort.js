import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandLess';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import FilterOpenSvg from 'SvgComponents/FilterOpen/FilterOpenSvg';
import FiltersModal from '../FiltersModal/FiltersModal';
import {
  Container,
  SortText,
  styleSelect,
  WrapperSortDesktop,
  ButtonSort,
  Option,
  ButtonFilters,
} from './Sort.styled';

const modalEnter = document.querySelector('#modal');

export default function Sort({
  name,
  placeholder,
  handleSort,
  setParams,
  params,
  setPage,
}) {
  const [personName, setPersonName] = useState('');
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [translateMenu, setTranslateMenu] = useState(false);

  function onClose(bool) {
    setIsOpen(bool);
  }

  const handleChangeComponent = event => {
    const {
      target: { value },
    } = event;

    setPersonName(value);
    handleSort(value, setParams, params);
  };

  function onOpenFilter() {
    setIsOpen(true);
    setIsOpenFilter(true);
    setTimeout(() => setTranslateMenu(true), 0);
  }

  function onOpenSort() {
    setIsOpen(true);
    setIsOpenSort(true);
    setTimeout(() => setTranslateMenu(true), 0);
  }

  useEffect(() => {
    if (params.get('sortField') === 'discount') {
      setPersonName('Рекомендовані');
      return;
    }
    if (params.get('sortField') === 'createDate') {
      setPersonName('Недавно додані');
      return;
    }
    if (
      params.get('sortField') === 'price' &&
      params.get('sortOrder') === 'asc'
    ) {
      setPersonName('Від дешевого');
      return;
    }
    if (
      params.get('sortField') === 'price' &&
      params.get('sortOrder') === 'desc'
    ) {
      setPersonName('Від дорожчого');
      return;
    }
  }, [params]);

  return (
    <Container>
      <Option>
        <ButtonSort type="button" onClick={onOpenSort}>
          <span>Сортувати</span>
          <UnfoldMoreIcon />
        </ButtonSort>
        <ButtonFilters type="button" onClick={onOpenFilter}>
          <span>Фільтрувати</span>
          <FilterOpenSvg />
        </ButtonFilters>
      </Option>
      <WrapperSortDesktop>
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
          >
            <MenuItem value="">
              <em>{placeholder}</em>
            </MenuItem>
            <MenuItem value="Рекомендовані">Рекомендовані</MenuItem>
            <MenuItem value="Недавно додані">Недавно додані</MenuItem>
            <MenuItem value="Від дешевого">Від дешевого</MenuItem>
            <MenuItem value="Від дорожчого">Від дорожчого</MenuItem>
          </Select>
        </FormControl>
      </WrapperSortDesktop>
      {isOpen &&
        createPortal(
          <FiltersModal
            isOpenMenu={translateMenu}
            isOpenFilter={isOpenFilter}
            setIsOpenFilter={setIsOpenFilter}
            isOpenSort={isOpenSort}
            setIsOpenSort={setIsOpenSort}
            setTranslateMenu={setTranslateMenu}
            onClose={onClose}
            setPage={setPage}
          />,
          modalEnter
        )}
    </Container>
  );
}
