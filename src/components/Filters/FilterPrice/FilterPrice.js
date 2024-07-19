import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import useWindowDimensions from 'hooks/useWindowDimensions';

import { selectFiltersPrice } from '../../../redux/product/selector';
import { CountPrice, PriceSlide, SliderRange } from './FilterPrice.styled';

export default function FilterPrice({ getMaxValue, getMinValue }) {
  const price = useSelector(selectFiltersPrice) ?? { max: 0, min: 0 };
  const [value, setValue] = useState([price.min, price.max]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setValue([price.min, price.max]);
    getMinValue(price.min);
    getMaxValue(price.max);
  }, [getMaxValue, getMinValue, price.max, price.min]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0]), value[1]]);
      getMinValue(Math.min(newValue[0]));
    } else {
      setValue([value[0], Math.max(newValue[1])]);
      getMaxValue(Math.min(newValue[1]));
    }
  };

  const handleInputChange = event => {
    if (event.target.name === 'min') {
      setValue([parseInt(event.target.value) || 0, value[1]]);
      getMinValue(parseInt(event.target.value));
    } else {
      setValue([value[0], parseInt(event.target.value) || 0]);
      getMaxValue(parseInt(event.target.value));
    }
  };

  return (
    <PriceSlide>
      <h3>Ціна</h3>
      <CountPrice>
        <label>
          Від
          <input
            type="text"
            value={value[0]}
            onChange={handleInputChange}
            name="min"
          />
          {width < 1440 && 'грн'}
        </label>
        <label>
          Дo
          <input
            type="text"
            value={value[1]}
            onChange={handleInputChange}
            name="max"
          />
          грн
        </label>
      </CountPrice>
      <Box sx={{ width: '100%' }}>
        <Slider
          sx={SliderRange}
          value={value}
          onChange={handleChange}
          disableSwap
          min={price.min}
          max={price.max}
        />
      </Box>
    </PriceSlide>
  );
}
