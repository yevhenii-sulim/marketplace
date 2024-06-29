import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import React from 'react';
import { FormSearch } from './Search.styled';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../redux/product/thunk';

export default function Search() {
  const dispatch = useDispatch();
  function onSubmit(evt) {
    evt.preventDefault();
    console.log(evt.target.elements.search.value);

    dispatch(searchProduct(evt.target.elements.search.value));
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
