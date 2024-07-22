import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
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

export default function FilterState({ getStateList }) {
  const [open, setOpen] = useState(false);
  const [checkedState, setCheckedState] = useState([]);
  const location = useLocation();
  const [params, setParams] = useSearchParams('');
  const states = useSelector(selectFiltersStates);

  const [stateList, setStateList] = useState([]);
  const colors = params.getAll('colors') ?? [];
  const sex = params.getAll('sex') ?? [];
  const minPrice = params.getAll('minPrice') ?? [];
  const maxPrice = params.getAll('maxPrice') ?? [];
  const sizes = params.getAll('sizes') ?? [];
  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) => {
      return index === position ? !item : item;
    });
    setCheckedState(updatedCheckedState);
    createStateList(updatedCheckedState);
  };
  const createStateList = updatedCheckedState => {
    const statesList = [];
    for (let i = 0; i < updatedCheckedState.length; i++) {
      if (!updatedCheckedState[i]) continue;
      statesList.push(states[i]);
    }
    setStateList(statesList);
    setParams({
      colors,
      sizes,
      sex,
      minPrice,
      maxPrice,
      states: statesList,
    });
  };

  useEffect(() => {
    if (!states) return;
    setCheckedState(new Array(states.length).fill(false));
  }, [states]);

  useEffect(() => {
    getStateList(stateList);
  }, [stateList, getStateList]);

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
          states.map((state, index) => (
            <Box key={state}>
              <input
                type="checkbox"
                id={state}
                name={state}
                value={state}
                checked={location.search.includes(state)}
                onChange={() => handleOnChange(index)}
              />
              <SignState htmlFor={state}>{state}</SignState>
            </Box>
          ))}
      </StateList>
    </Container>
  );
}
