import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ButtonExpand, Container, SignState } from './FilterState.styled';
import { selectFiltersStates } from '../../../redux/product/selector';

export default function FilterState() {
  const [open, setOpen] = useState(false);
  const states = useSelector(selectFiltersStates) ?? [];
  return (
    <Container>
      <h3>
        Стан
        <ButtonExpand onClick={() => setOpen(prev => !prev)}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ButtonExpand>
      </h3>
      {open &&
        states.map(state => (
          <Fragment key={state}>
            <input type="checkbox" id="state" />
            <SignState htmlFor="state">{state}</SignState>
          </Fragment>
        ))}
    </Container>
  );
}
