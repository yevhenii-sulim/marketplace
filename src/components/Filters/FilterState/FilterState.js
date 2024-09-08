import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {
  Box,
  ButtonExpand,
  Container,
  SignState,
  StateList,
} from './FilterState.styled';
import { selectFiltersStates } from '../../../redux/product/selector';

export default function FilterState({ setPage }) {
  const [open, setOpen] = useState(false);
  const [params, setParams] = useSearchParams('');
  const states = useSelector(selectFiltersStates);

  const colors = params.getAll('colors') ?? [];
  const sex = params.getAll('sex') ?? [];
  const minPrice = params.getAll('minPrice') ?? [];
  const maxPrice = params.getAll('maxPrice') ?? [];
  const sizes = params.getAll('sizes') ?? [];
  const sortField = params.getAll('sortField') ?? [];
  const sortOrder = params.getAll('sortOrder') ?? [];

  const handleOnChange = states => {
    setPage(1);
    if (params.getAll('states').includes(states)) {
      const updatedValue = params
        .getAll('states')
        .filter(item => item !== states);
      createStateList(updatedValue);
      return updatedValue;
    } else {
      const updatedValue = [...params.getAll('states'), states];
      createStateList(updatedValue);
      return updatedValue;
    }
  };
  const createStateList = updatedCheckedState => {
    setParams({
      colors,
      sizes,
      sex,
      minPrice,
      maxPrice,
      sortField,
      sortOrder,
      states: updatedCheckedState,
    });
  };

  return (
    <Container>
      <h3>
        Стан
        <ButtonExpand onClick={() => setOpen(prev => !prev)} type="button">
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ButtonExpand>
      </h3>
      <StateList>
        {open &&
          states &&
          states.map(state => (
            <Box key={state}>
              <input
                type="checkbox"
                id={state}
                name={state}
                value={state}
                checked={params.getAll('states').includes(state)}
                onChange={() => handleOnChange(state)}
              />
              <SignState htmlFor={state}>{state}</SignState>
            </Box>
          ))}
      </StateList>
    </Container>
  );
}
