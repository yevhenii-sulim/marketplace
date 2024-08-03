import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { prevSearchProduct, searchProduct } from '../../redux/product/thunk';
import {
  selectIsLoadingSearching,
  selectLoader,
  selectPrevProductSearch,
} from '../../redux/product/selector';
import {
  BoxLoader,
  FormSearch,
  PrevShowSearchedProduct,
} from './Search.styled';
import Loader from 'components/Loader/Loader';

export default function Search() {
  const searchedProduct = useSelector(selectPrevProductSearch);
  const isLoaded = useSelector(selectIsLoadingSearching);
  const loader = useSelector(selectLoader);
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [wasClick, setWasClick] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (value && wasClick) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [value, wasClick]);

  useEffect(() => {
    const controller = new AbortController();
    if (value) {
      if (!controller.signal.aborted) {
        controller.abort();
      }
      var timer = setTimeout(() => {
        dispatch(prevSearchProduct(value, { signal: controller.signal }));
        setWasClick(true);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [dispatch, value]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    if (evt.target.elements.search.value === '') return;
    navigate('/search');
    dispatch(searchProduct(value));
    setValue('');
  }

  function handleClick(evt) {
    setValue(evt.target.innerText);
    setIsOpen(false);
    setWasClick(false);
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
      {searchedProduct && isOpen && (
        <PrevShowSearchedProduct>
          {isLoaded &&
            searchedProduct.map(({ _id, title }) => (
              <li key={_id} onClick={handleClick}>
                {title}
              </li>
            ))}
        </PrevShowSearchedProduct>
      )}
      <BoxLoader>
        <Loader isAlreadyLoad={loader} />
      </BoxLoader>
      <button type="submit">
        <SearchTwoToneIcon />
        Пошук
      </button>
    </FormSearch>
  );
}
