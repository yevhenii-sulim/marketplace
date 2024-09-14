import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { setMaxPriceFilterParam, setMinPriceFilterParam } from './setParams';
import { selectFiltersPrice } from '../../../redux/product/selector';
import useWindowDimensions from 'hooks/useWindowDimensions';
import {
  CountPrice,
  PriceSlide,
  SliderRange,
  styleBoxRange,
} from './FilterPrice.styled';
import { theme } from 'utils/theme';

export default function FilterPrice({ setPage }) {
  const [params, setParams] = useSearchParams('');
  const price = useSelector(selectFiltersPrice) ?? { max: 0, min: 0 };
  const { width } = useWindowDimensions();

  const min =
    +params.get('minPrice') && !Number.isNaN(+params.get('minPrice'))
      ? +params.get('minPrice')
      : params.get('minPrice')
      ? 0
      : price.min;
  const max =
    +params.get('maxPrice') && !Number.isNaN(+params.get('maxPrice'))
      ? +params.get('maxPrice')
      : params.get('maxPrice')
      ? 0
      : price.max;

  const getMaxValue = num => {
    setMaxPriceFilterParam(setParams, num, min, params);
  };

  const getMinValue = num => {
    setMinPriceFilterParam(setParams, num, max, params);
  };

  const handleInputChange = event => {
    const price = Number(event.target.value);

    if (event.target.name === 'min') {
      if (price < max) {
        getMinValue(price);
      }
    } else {
      if (price > min) {
        getMaxValue(price);
      }
    }
    setPage(1);
  };

  const handleChangeSlider = (newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      getMinValue(Math.min(newValue[0]));
    } else {
      getMaxValue(Math.min(newValue[1]));
    }
    setPage(1);
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
          {width < parseInt(theme.breakPoints.lg) && 'грн'}
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
      <Box sx={styleBoxRange}>
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
