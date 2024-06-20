import React from 'react';
import { FormSearch } from './PagesForSidebar/PagesForSidebar.styled';

export default function Search({ value, setValue }) {
  function hendleChange(evt) {
    setValue(evt.target.value);
  }
  return (
    <FormSearch>
      <input
        type="text"
        name="search"
        placeholder="Я шукаю..."
        value={value}
        onChange={hendleChange}
      />
    </FormSearch>
  );
}
