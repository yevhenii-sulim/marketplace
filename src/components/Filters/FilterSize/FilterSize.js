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
        sizes.map(size => (
          <Fragment key={size}>
            <input type="checkbox" id="size" />
            <SignSize htmlFor="size">{size}</SignSize>
          </Fragment>
        ))}
    </Container>
  );
}
