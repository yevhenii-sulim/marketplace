import { Fragment, memo, useEffect, useState } from 'react';
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

const FilterColor = memo(function FilterColor() {
  const [open, setOpen] = useState(false);
  const colors = useSelector(selectFiltersColors);
  console.log('colors', colors);

  const [checkedState, setCheckedState] = useState([]);

  const [colorList, setColorList] = useState([]);
  console.log('colorList', colorList);
  console.log('checkedState', checkedState);

  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) => {
      return index === position ? !item : item;
    });

    setCheckedState(updatedCheckedState);
  };
  const createColorList = () => {
    const getColorsList = [];
    for (let i = 0; i < checkedState.length; i++) {
      if (!checkedState[i]) continue;
      getColorsList.push(colors[i].color);
    }
    setColorList(getColorsList);
  };
  createColorList();

  useEffect(() => {
    if (!colors) return;
    setCheckedState(new Array(colors.length).fill(false));
  }, [colors]);
  return (
    <Container>
      <h3>
        Колір
        <ButtonExpand onClick={() => setOpen(prev => !prev)}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ButtonExpand>
      </h3>
      {open &&
        colors.map(({ colorName, color, _id }, index) => (
          <Fragment key={_id}>
            <input
              type="checkbox"
              id={_id}
              name={color}
              value={color}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index, colors)}
            />
            <SignColor htmlFor={_id}>
              <p className="color-name">{colorName}</p>
              <ColorMark $color={color}></ColorMark>
            </SignColor>
          </Fragment>
        ))}
    </Container>
  );
});

export default FilterColor;
