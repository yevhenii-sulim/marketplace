import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import useWindowDimensions from 'hooks/useWindowDimensions';

import { selectFiltersPrice } from '../../../redux/product/selector';
import { CountPrice, PriceSlide, SliderRange } from './FilterPrice.styled';
import { useSearchParams } from 'react-router-dom';

export default function FilterPrice() {
  const [params, setParams] = useSearchParams('');
  const price = useSelector(selectFiltersPrice) ?? { max: 0, min: 0 };
  const { width } = useWindowDimensions();

  const colors = params.getAll('colors') ?? [];
  const sex = params.getAll('sex') ?? [];
  const states = params.getAll('states') ?? [];
  const sizes = params.getAll('sizes') ?? [];
  const sortField = params.getAll('sortField') ?? [];
  const sortOrder = params.getAll('sortOrder') ?? [];

  const min =
    +params.get('minPrice') && !Number.isNaN(+params.get('minPrice'))
      ? +params.get('minPrice')
      : price.min;
  const max =
    +params.get('maxPrice') && !Number.isNaN(+params.get('maxPrice'))
      ? +params.get('maxPrice')
      : price.max;

  const getMaxValue = num => {
    if (!Number.isNaN(num)) {
      setParams({
        colors,
        sizes,
        sex,
        minPrice: min,
        maxPrice: num,
        states,
        sortField,
        sortOrder,
      });
    } else {
      setParams({
        colors,
        sizes,
        sex,
        minPrice: min,
        maxPrice: 0,
        states,
        sortField,
        sortOrder,
      });
    }
  };

  const getMinValue = num => {
    if (!Number.isNaN(num)) {
      setParams({
        colors,
        sizes,
        sex,
        minPrice: num,
        maxPrice: max,
        states,
        sortField,
        sortOrder,
      });
    } else {
      setParams({
        colors,
        sizes,
        sex,
        minPrice: 0,
        maxPrice: max,
        states,
        sortField,
        sortOrder,
      });
    }
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
