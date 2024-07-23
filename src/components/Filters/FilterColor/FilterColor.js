import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { selectFiltersColors } from '../../../redux/product/selector';
import {
  Box,
  ButtonExpand,
  ColorList,
  ColorMark,
  Container,
  SignColor,
} from './FilterColor.styled';

function FilterColor() {
  const [open, setOpen] = useState(false);
  const colors = useSelector(selectFiltersColors);
  const [params, setParams] = useSearchParams('');
  const [checkedState, setCheckedState] = useState([]);

  const location = useLocation();

  const sex = params.getAll('sex') ?? [];
  const minPrice = params.getAll('minPrice') ?? [];
  const maxPrice = params.getAll('maxPrice') ?? [];
  const states = params.getAll('states') ?? [];
  const sizes = params.getAll('sizes') ?? [];

  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) => {
      return index === position ? !item : item;
    });
    setCheckedState(updatedCheckedState);
    createColorList(updatedCheckedState);
  };

  const createColorList = updatedCheckedState => {
    const colorsList = [];
    for (let i = 0; i < updatedCheckedState.length; i++) {
      if (!updatedCheckedState[i]) continue;
      colorsList.push(colors[i]._id);
    }
    setParams({
      colors: colorsList,
      sizes,
      sex,
      minPrice,
      maxPrice,
      states,
    });
  };

  useEffect(() => {
    if (!colors) return;
    setCheckedState(new Array(colors.length).fill(false));
  }, [colors]);

  return (
    <Container>
      <h3>
        Колір
        <ButtonExpand onClick={() => setOpen(prev => !prev)} type="button">
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ButtonExpand>
      </h3>
      <ColorList>
        {open &&
          colors &&
          colors.map(({ colorName, color, _id }, index) => {
            return (
              colorName !== 'без кольору' && (
                <Box key={_id}>
                  <input
                    type="checkbox"
                    id={_id}
                    name={color}
                    value={color}
                    checked={location.search.includes(_id)}
                    onChange={() => handleOnChange(index)}
                  />
                  <SignColor htmlFor={_id}>
                    <p className="color-name">{colorName}</p>
                    <ColorMark $color={color}></ColorMark>
                  </SignColor>
                </Box>
              )
            );
          })}
      </ColorList>
    </Container>
  );
}

export default FilterColor;
