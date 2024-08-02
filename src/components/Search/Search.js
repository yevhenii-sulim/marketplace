import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import React, { useState } from 'react';
import { FormSearch } from './Search.styled';
import { useDispatch, useSelector } from 'react-redux';
import { prevSearchProduct, searchProduct } from '../../redux/product/thunk';
import { useNavigate } from 'react-router-dom';
import { selectPrevProductSearch } from '../../redux/product/selector';

export default function Search() {
  const [value, setValue] = useState('');
  const searchedProduct = useSelector(selectPrevProductSearch);
  console.log(searchedProduct);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onSubmit(evt) {
    evt.preventDefault();
    navigate('/search');
    dispatch(searchProduct(value));
    setValue('');
  }
  function handleChange(e) {
    setValue(e.target.value);
    dispatch(prevSearchProduct(e.target.value));
  }
  return (
    <FormSearch onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Я шукаю..."
        value={value}
        onChange={handleChange}
      />
      <button type="submit">
        <SearchTwoToneIcon />
        Пошук
      </button>
    </FormSearch>
  );
}
