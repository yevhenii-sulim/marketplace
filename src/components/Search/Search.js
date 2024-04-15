import PropTypes from 'prop-types';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import React from 'react';
import { FormSearch } from './Search.styled';

export default function Search({ searchProduct }) {
  function onSubmit(evt) {
    evt.preventDefault();
    searchProduct(evt.target.elements.search.value);
  }
  return (
    <FormSearch onSubmit={onSubmit}>
      <input type="text" name="search" placeholder="Я шукаю..." />
      <button type="submit">
        <SearchTwoToneIcon />
        Пошук
      </button>
    </FormSearch>
  );
}

Search.propTypes = {
  searchProduct: PropTypes.func.isRequired,
};
