import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import React from 'react';
import { FormSearch } from './Search.styled';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../redux/product/thunk';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onSubmit(evt) {
    evt.preventDefault();
    navigate('/search');
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
