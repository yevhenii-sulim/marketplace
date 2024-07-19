import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { selectFiltersSex } from '../../../redux/product/selector';
import { Fragment, useState } from 'react';
import { ButtonExpand, Container, SignSex } from './FilterSex.styled';

export default function FilterSex() {
  const [open, setOpen] = useState(false);
  const sex = useSelector(selectFiltersSex) ?? [];

  return (
    <Container>
      <h3>
        Стать
        <ButtonExpand onClick={() => setOpen(prev => !prev)}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ButtonExpand>
      </h3>
      {open &&
        sex.map(sex => (
          <Fragment key={sex}>
            <input type="checkbox" id="sex" />
            <SignSex htmlFor="sex">{sex}</SignSex>
          </Fragment>
        ))}
    </Container>
  );
}
