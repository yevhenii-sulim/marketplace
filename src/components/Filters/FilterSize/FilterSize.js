import { useState } from 'react';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { selectFiltersSizes } from '../../../redux/product/selector';
import { Box, ButtonExpand, Container, SizeList } from './FilterSize.styled';
import { useSearchParams } from 'react-router-dom';

export default function FilterSize({ setPage }) {
  const [open, setOpen] = useState(false);
  const sizes = useSelector(selectFiltersSizes);
  const [params, setParams] = useSearchParams('');

  const colors = params.getAll('colors') ?? [];
  const sex = params.getAll('sex') ?? [];
  const minPrice = params.getAll('minPrice') ?? [];
  const maxPrice = params.getAll('maxPrice') ?? [];
  const states = params.getAll('states') ?? [];
  const sortField = params.getAll('sortField') ?? [];
  const sortOrder = params.getAll('sortOrder') ?? [];

  const handleOnChange = size => {
    setPage(1);
    if (params.getAll('sizes').includes(size)) {
      const updatedValue = params.getAll('sizes').filter(item => item !== size);
      createStateList(updatedValue);
      return updatedValue;
    } else {
      const updatedValue = [...params.getAll('sizes'), size];
      createStateList(updatedValue);
      return updatedValue;
    }
  };

  const createStateList = updatedValue => {
    setParams({
      sizes: updatedValue,
      colors,
      sex,
      minPrice,
      maxPrice,
      states,
      sortField,
      sortOrder,
    });
  };

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
          sizes.map(size => {
            return (
              size !== 'Без розміру' && (
                <Box key={size}>
                  <input
                    type="checkbox"
                    id={size}
                    name={size}
                    value={size}
                    checked={params.getAll('sizes').includes(size)}
                    onChange={() => handleOnChange(size)}
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
