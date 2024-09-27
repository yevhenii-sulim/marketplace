import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { prevSearchProduct, searchProduct } from '../../redux/product/thunk';
import {
  selectIsLoadingSearching,
  selectLoader,
  selectPrevProductSearch,
} from '../../redux/product/selector';
import Loader from 'components/Loader/Loader';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { theme } from 'utils/theme';
import {
  BoxLoader,
  FormSearch,
  PrevShowSearchedProduct,
} from './Search.styled';

export default function Search() {
  const searchedProduct = useSelector(selectPrevProductSearch);
  const isLoaded = useSelector(selectIsLoadingSearching);
  const loader = useSelector(selectLoader);
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [wasChange, setWasChange] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const { width } = useWindowDimensions();

  useEffect(() => {
    setValue('');
    setIsOpen(true);
    setWasChange(true);
  }, [location]);

  useEffect(() => {
    if (!wasChange) return;
    if (value) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [value, wasChange]);

  useEffect(() => {
    if (!wasChange) return;
    if (value) {
      var timer = setTimeout(() => {
        dispatch(prevSearchProduct(value));
        setWasChange(true);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [dispatch, value, wasChange]);

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
    setWasChange(false);
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
      {searchedProduct && searchedProduct.length !== 0 && isOpen && (
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
        {width >= parseInt(theme.breakPoints.md) && 'Пошук'}
      </button>
    </FormSearch>
  );
}
