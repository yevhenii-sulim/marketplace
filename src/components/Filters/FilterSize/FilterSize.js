import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { selectFiltersSizes } from '../../../redux/product/selector';
import { Box, ButtonExpand, Container, SizeList } from './FilterSize.styled';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function FilterSize({ getSizesList }) {
  const [open, setOpen] = useState(false);
  const sizes = useSelector(selectFiltersSizes);
  const [params, setParams] = useSearchParams('');
  const [checkedState, setCheckedState] = useState([]);
  const [sizesList, setSizesList] = useState([]);

  const location = useLocation();

  const colors = params.getAll('colors') ?? [];
  const sex = params.getAll('sex') ?? [];
  const minPrice = params.getAll('minPrice') ?? [];
  const maxPrice = params.getAll('maxPrice') ?? [];
  const states = params.getAll('states') ?? [];
  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) => {
      return index === position ? !item : item;
    });
    setCheckedState(updatedCheckedState);
    createStateList(updatedCheckedState);
  };
  const createStateList = updatedCheckedState => {
    const sizesList = [];
    for (let i = 0; i < updatedCheckedState.length; i++) {
      if (!updatedCheckedState[i]) continue;
      sizesList.push(sizes[i]);
    }
    setSizesList(sizesList);
    setParams({
      colors,
      sizes: sizesList,
      sex,
      minPrice,
      maxPrice,
      states,
    });
  };

  useEffect(() => {
    if (!sizes) return;
    setCheckedState(new Array(sizes.length).fill(false));
  }, [sizes, params]);

  useEffect(() => {
    getSizesList(sizesList);
  }, [sizesList, getSizesList]);

  return (
    <Container>
      <h3>
        Розмір
        <ButtonExpand onClick={() => setOpen(prev => !prev)} type="button">
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ButtonExpand>
      </h3>
      <SizeList>
        {open &&
          sizes &&
          sizes.map((size, index) => {
            return (
              size !== 'Без розміру' && (
                <Box key={size}>
                  <input
                    type="checkbox"
                    id={size}
                    name={size}
                    value={size}
                    checked={location.search.includes(size)}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={size}>{size}</label>
                </Box>
              )
            );
          })}
      </SizeList>
    </Container>
  );
}
