import PropTypes from 'prop-types';
import DandruffSmal from 'SvgComponents/DandruffSVG/DandruffSmal';
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
        <DandruffSmal />
        Пошук
      </button>
    </FormSearch>
  );
}

Search.propTypes = {
  searchProduct: PropTypes.func.isRequired,
};
