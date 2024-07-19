import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { selectFiltersColors } from '../../../redux/product/selector';
import {
  ButtonExpand,
  ColorMark,
  Container,
  SignColor,
} from './FilterColor.styled';

export default function FilterColor() {
  const [open, setOpen] = useState(false);
  const colors = useSelector(selectFiltersColors) ?? [];
  console.log(colors);
  return (
    <Container>
      <h3>
        Колір
        <ButtonExpand onClick={() => setOpen(prev => !prev)}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ButtonExpand>
      </h3>
      {open &&
        colors.map(({ colorName, color, _id }) => (
          <Fragment key={_id}>
            <input type="checkbox" id="color" />
            <SignColor htmlFor="color">
              <p className="color-name">{colorName}</p>{' '}
              <ColorMark $color={color}></ColorMark>
            </SignColor>
          </Fragment>
        ))}
    </Container>
  );
}
