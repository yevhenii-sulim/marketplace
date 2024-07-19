import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { selectFiltersSizes } from '../../../redux/product/selector';
import { ButtonExpand, Container, SignSize } from './FilterSize.styled';

export default function FilterSize() {
  const [open, setOpen] = useState(false);
  const sizes = useSelector(selectFiltersSizes) ?? [];
  return (
    <Container>
      <h3>
        Розмір
        <ButtonExpand onClick={() => setOpen(prev => !prev)}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ButtonExpand>
      </h3>
      {open &&
        sizes.map(sex => (
          <Fragment key={sex}>
            <input type="checkbox" id="sex" />
            <SignSize for="sex">{sex}</SignSize>
          </Fragment>
        ))}
    </Container>
  );
}
