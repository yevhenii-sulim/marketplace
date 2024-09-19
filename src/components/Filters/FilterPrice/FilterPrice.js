import { useEffect, useState } from 'react';
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
  const [valueMin, setValueMin] = useState(0);
  const [valueMax, setValueMax] = useState(0);
  const price = useSelector(selectFiltersPrice) ?? { max: 0, min: 0 };
  const { width } = useWindowDimensions();

  useEffect(() => {
    setValueMin(
      +params.get('minPrice') && !Number.isNaN(+params.get('minPrice'))
        ? +params.get('minPrice')
        : params.get('minPrice')
        ? 0
        : price.min
    );
    setValueMax(
      +params.get('maxPrice') && !Number.isNaN(+params.get('maxPrice'))
        ? +params.get('maxPrice')
        : params.get('maxPrice')
        ? 0
        : price.max
    );
  }, [params, price.max, price.min]);

  function setMin(event) {
    const price = Number(event.target.value);
    if (price > valueMin) {
      getMaxValue(price);
      getMinValue(valueMax);
    } else {
      getMinValue(price);
    }
    setPage(1);
  }

  function setMax(event) {
    const price = Number(event.target.value);
    getMaxValue(price);
    setPage(1);
  }

  const getMaxValue = num => {
    setMaxPriceFilterParam(setParams, num, valueMin, params);
  };

  const getMinValue = num => {
    setMinPriceFilterParam(setParams, num, valueMax, params);
  };

  const handleInputChange = event => {
    const price = Number(event.target.value);

    if (event.target.name === 'min') {
      setValueMin(price);
    } else {
      setValueMax(price);
    }
  };

  const handleChangeSlider = (_, newValue, activeThumb) => {
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
            value={valueMin}
            onBlur={setMin}
            onChange={handleInputChange}
            name="min"
          />
          {width < parseInt(theme.breakPoints.lg) && 'грн'}
        </label>
        <label>
          Дo
          <input
            type="text"
            value={valueMax}
            onBlur={setMax}
            onChange={handleInputChange}
            name="max"
          />
          грн
        </label>
      </CountPrice>
      <Box sx={styleBoxRange}>
        <Slider
          sx={SliderRange}
          value={[valueMin, valueMax]}
          onChange={handleChangeSlider}
          disableSwap
          min={price.min}
          max={price.max}
        />
      </Box>
    </PriceSlide>
  );
}
