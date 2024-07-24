import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { selectFiltersSex } from '../../../redux/product/selector';
import { useState } from 'react';
import {
  Box,
  ButtonExpand,
  Container,
  SexList,
  SignSex,
} from './FilterSex.styled';
import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';

function FilterSex() {
  const [open, setOpen] = useState(false);
  const sex = useSelector(selectFiltersSex);
  const [params, setParams] = useSearchParams('');
  const [checkValue, setCheckValue] = useState(params.getAll('sizes'));

  const colors = params.getAll('colors') ?? [];
  const minPrice = params.getAll('minPrice') ?? '';
  const maxPrice = params.getAll('maxPrice') ?? '';
  const states = params.getAll('states') ?? [];
  const sizes = params.getAll('sizes') ?? [];

  const handleOnChange = sex => {
    if (checkValue.includes(sex)) {
      setCheckValue(prev => {
        const updatedValue = prev.filter(item => item !== sex);
        createStateList(updatedValue);
        return updatedValue;
      });
    } else {
      setCheckValue(prev => {
        const updatedValue = [...prev, sex];
        createStateList(updatedValue);
        return updatedValue;
      });
    }
  };

  const createStateList = updatedCheckedState => {
    setParams({
      sex: updatedCheckedState,
      colors,
      sizes,
      minPrice,
      maxPrice,
      states,
    });
  };

  function displaySexTranslate(sex) {
    switch (sex) {
      case 'female':
        return 'жіноче';
      case 'male':
        return 'чоловіче';
      default:
        return 'унісекс';
    }
  }

  return (
    <Container>
      <h3>
        Стать
        <ButtonExpand onClick={() => setOpen(prev => !prev)} type="button">
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ButtonExpand>
      </h3>
      <SexList>
        {open &&
          sex &&
          sex.map(sex => (
            <Box key={sex}>
              <input
                type="checkbox"
                id={sex}
                name={sex}
                value={sex}
                checked={checkValue.includes(sex)}
                onChange={() => handleOnChange(sex)}
              />
              <SignSex htmlFor={sex}>{displaySexTranslate(sex)}</SignSex>
            </Box>
          ))}
      </SexList>
    </Container>
  );
}

export default memo(FilterSex);
