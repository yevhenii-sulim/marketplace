import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { FormSearch } from './Search.styled';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../redux/product/thunk';
import { useNavigate } from 'react-router-dom';

export default function Search({ handleChange, value, setValue }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(evt) {
    evt.preventDefault();
    navigate('/search');
    dispatch(searchProduct(value));
    setValue('');
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
