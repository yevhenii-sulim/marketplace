import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
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
  const sex = params.getAll('sex') ?? [];
  const minPrice = params.getAll('minPrice') ?? [];
  const maxPrice = params.getAll('maxPrice') ?? [];
  const states = params.getAll('states') ?? [];
  const sizes = params.getAll('sizes') ?? [];
  const sortField = params.getAll('sortField') ?? [];
  const sortOrder = params.getAll('sortOrder') ?? [];

  const handleOnChange = color => {
    if (params.getAll('colors').includes(color)) {
      const updatedValue = params
        .getAll('colors')
        .filter(item => item !== color);
      createColorList(updatedValue);
      return updatedValue;
    } else {
      const updatedValue = [...params.getAll('colors'), color];
      createColorList(updatedValue);
      return updatedValue;
    }
  };

  const createColorList = updatedCheckedState => {
    setParams({
      colors: updatedCheckedState,
      sizes,
      sex,
      minPrice,
      maxPrice,
      states,
      sortField,
      sortOrder,
    });
  };
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
          colors.map(({ colorName, color, _id }) => {
            return (
              colorName !== 'без кольору' && (
                <Box key={_id}>
                  <input
                    type="checkbox"
                    id={_id}
                    name={color}
                    value={color}
                    checked={params.getAll('colors').includes(_id)}
                    onChange={() => handleOnChange(_id)}
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
