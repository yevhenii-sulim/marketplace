import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { selectFiltersStates } from '../../../redux/product/selector';
import { ButtonExpand, Container, SignColor } from './FilterColor.styled';

export default function FilterColor() {
  const [open, setOpen] = useState(false);
  const colors = useSelector(selectFiltersStates) ?? [];
  return (
    <Container>
      <h3>
        Колір
        <ButtonExpand onClick={() => setOpen(prev => !prev)}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ButtonExpand>
      </h3>
      {open &&
        colors.map(sex => (
          <Fragment key={sex}>
            <input type="checkbox" id="sex" />
            <SignColor for="sex">{sex}</SignColor>
          </Fragment>
        ))}
    </Container>
  );
}
