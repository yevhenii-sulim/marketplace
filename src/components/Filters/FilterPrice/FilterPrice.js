import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import useWindowDimensions from 'hooks/useWindowDimensions';

import { selectFiltersPrice } from '../../../redux/product/selector';
import { CountPrice, PriceSlide, SliderRange } from './FilterPrice.styled';
import { useSearchParams } from 'react-router-dom';
import { setMaxPriceFilterParam, setMinPriceFilterParam } from './setParams';

export default function FilterPrice() {
  const [params, setParams] = useSearchParams('');
  const price = useSelector(selectFiltersPrice) ?? { max: 0, min: 0 };
  const { width } = useWindowDimensions();

  const min =
    +params.get('minPrice') && !Number.isNaN(+params.get('minPrice'))
      ? +params.get('minPrice')
      : price.min;
  const max =
    +params.get('maxPrice') && !Number.isNaN(+params.get('maxPrice'))
      ? +params.get('maxPrice')
      : price.max;

  const getMaxValue = num => {
    setMaxPriceFilterParam(setParams, num, min, params);
  };

  const getMinValue = num => {
    setMinPriceFilterParam(setParams, num, max, params);
  };

  const handleInputChange = event => {
    if (event.target.name === 'min') {
      getMinValue(parseInt(event.target.value));
    } else {
      getMaxValue(parseInt(event.target.value));
    }
  };

  const handleChangeSlider = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      getMinValue(Math.min(newValue[0]));
    } else {
      getMaxValue(Math.min(newValue[1]));
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
            value={min}
            onChange={handleInputChange}
            name="min"
          />
          {width < 1440 && 'грн'}
        </label>
        <label>
          Дo
          <input
            type="text"
            value={max}
            onChange={handleInputChange}
            name="max"
          />
          грн
        </label>
      </CountPrice>
      <Box sx={{ width: '100%' }}>
        <Slider
          sx={SliderRange}
          value={[min, max]}
          onChange={handleChangeSlider}
          disableSwap
          min={price.min}
          max={price.max}
        />
      </Box>
    </PriceSlide>
  );
}
