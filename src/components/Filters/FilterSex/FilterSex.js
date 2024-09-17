import { useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { selectFiltersSex } from '../../../redux/product/selector';
import {
  Box,
  ButtonExpand,
  Container,
  SexList,
  SignSex,
} from './FilterSex.styled';

function FilterSex({ setPage }) {
  const [open, setOpen] = useState(false);
  const sex = useSelector(selectFiltersSex);
  const [params, setParams] = useSearchParams('');

  const colors = params.getAll('colors') ?? [];
  const minPrice = params.getAll('minPrice') ?? [];
  const maxPrice = params.getAll('maxPrice') ?? [];
  const states = params.getAll('states') ?? [];
  const sizes = params.getAll('sizes') ?? [];
  const sortField = params.getAll('sortField') ?? [];
  const sortOrder = params.getAll('sortOrder') ?? [];

  const handleOnChange = sex => {
    setPage(1);
    if (params.getAll('sex').includes(sex)) {
      const updatedValue = params.getAll('sex').filter(item => item !== sex);
      createStateList(updatedValue);
      return updatedValue;
    } else {
      const updatedValue = [...params.getAll('sex'), sex];
      createStateList(updatedValue);
      return updatedValue;
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
      sortField,
      sortOrder,
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
    <Container onClick={() => setOpen(prev => !prev)}>
      <h3>
        Стать
        <ButtonExpand type="button">
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
                checked={params.getAll('sex').includes(sex)}
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
