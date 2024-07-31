import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import React from 'react';
import { FormSearch } from 'components/Search/Search.styled';

export default function Search({ value, setValue }) {
  function onSubmit(evt) {
    evt.preventDefault();
    console.log(evt.target.elements.search.value);

    setValue(evt.target.elements.search.value);
  }
  return (
    <FormSearch onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Я шукаю..."
        value={value}
        onChange={evt => setValue(evt.target.value)}
      />
      <button type="submit">
        <SearchTwoToneIcon />
        Пошук
      </button>
    </FormSearch>
  );
}
