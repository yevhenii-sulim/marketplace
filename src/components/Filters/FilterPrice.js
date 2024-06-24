import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {
  CountPrice,
  PriceSlide,
  SliderRange,
} from '../ProductListPage/ProductListPage.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { selectFilters } from '../../redux/product/selector';

export default function FilterPrice({ min, max, getMaxValue, getMinValue }) {
  const filters = useSelector(selectFilters);
  const [value, setValue] = useState([min, max]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!filters.price) return;
    setValue([filters.price.min, filters.price.max]);
    getMinValue(filters.price.min);
    getMaxValue(filters.price.max);
  }, [filters, getMaxValue, getMinValue]);

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
          min={min}
          max={max}
        />
      </Box>
    </PriceSlide>
  );
}
