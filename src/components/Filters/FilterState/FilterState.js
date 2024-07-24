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

export default function FilterState() {
  const [open, setOpen] = useState(false);
  const [params, setParams] = useSearchParams('');
  const states = useSelector(selectFiltersStates);
  const [checkValue, setCheckValue] = useState(params.getAll('states'));

  const colors = params.getAll('colors') ?? [];
  const sex = params.getAll('sex') ?? [];
  const minPrice = params.getAll('minPrice') ?? [];
  const maxPrice = params.getAll('maxPrice') ?? [];
  const sizes = params.getAll('sizes') ?? [];

  const handleOnChange = states => {
    if (checkValue.includes(states)) {
      setCheckValue(prev => {
        const updatedValue = prev.filter(item => item !== states);
        createStateList(updatedValue);
        return updatedValue;
      });
    } else {
      setCheckValue(prev => {
        const updatedValue = [...prev, states];
        createStateList(updatedValue);
        return updatedValue;
      });
    }
  };
  const createStateList = updatedCheckedState => {
    setParams({
      colors,
      sizes,
      sex,
      minPrice,
      maxPrice,
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
                checked={checkValue.includes(state)}
                onChange={() => handleOnChange(state)}
              />
              <SignState htmlFor={state}>{state}</SignState>
            </Box>
          ))}
      </StateList>
    </Container>
  );
}
