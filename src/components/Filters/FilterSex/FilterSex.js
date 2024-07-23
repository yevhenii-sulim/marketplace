import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { selectFiltersSex } from '../../../redux/product/selector';
import { useEffect, useState } from 'react';
import {
  Box,
  ButtonExpand,
  Container,
  SexList,
  SignSex,
} from './FilterSex.styled';
import { memo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

function FilterSex() {
  const [open, setOpen] = useState(false);
  const sex = useSelector(selectFiltersSex);
  const [params, setParams] = useSearchParams('');
  const [checkedState, setCheckedState] = useState([]);

  const location = useLocation();

  const colors = params.getAll('colors') ?? [];
  const minPrice = params.getAll('minPrice') ?? [];
  const maxPrice = params.getAll('maxPrice') ?? [];
  const states = params.getAll('states') ?? [];
  const sizes = params.getAll('sizes') ?? [];

  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) => {
      return index === position ? !item : item;
    });
    setCheckedState(updatedCheckedState);
    createStateList(updatedCheckedState);
  };

  const createStateList = updatedCheckedState => {
    const sexList = [];
    for (let i = 0; i < updatedCheckedState.length; i++) {
      if (!updatedCheckedState[i]) continue;
      sexList.push(sex[i]);
    }
    setParams({ sex: sexList, colors, sizes, minPrice, maxPrice, states });
  };

  useEffect(() => {
    if (!sex) return;
    setCheckedState(new Array(sex.length).fill(false));
  }, [sex]);

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
          sex.map((sex, index) => (
            <Box key={sex}>
              <input
                type="checkbox"
                id={sex}
                name={sex}
                value={sex}
                checked={location.search.includes(sex)}
                onChange={() => handleOnChange(index)}
              />
              <SignSex htmlFor={sex}>{displaySexTranslate(sex)}</SignSex>
            </Box>
          ))}
      </SexList>
    </Container>
  );
}

export default memo(FilterSex);
