import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { CountPrice, PriceSlide, SliderRange } from './ProductListPage.styled';
import useWindowDimensions from 'hooks/useWindowDimensions';

function valueText(value) {
  return `${value} грн`;
}

export default function FilterPrice({ min, max, getMaxValue, getMinValue }) {
  const [valueMin, setValueMin] = useState(min);
  const [valueMax, setValueMax] = useState(max);
  const { width } = useWindowDimensions();
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValueMin(Math.min(newValue[0]));
      getMinValue(Math.min(newValue[0]));
    } else {
      setValueMax(Math.min(newValue[1]));
      getMaxValue(Math.min(newValue[1]));
    }
  };

  const handleInputChangeMin = event => {
    setValueMin(event.target.value === '' ? 0 : parseInt(event.target.value));
    getMinValue(parseInt(event.target.value));
  };
  const handleInputChangeMax = event => {
    setValueMax(event.target.value === '' ? 0 : parseInt(event.target.value));
    getMaxValue(parseInt(event.target.value));
  };

  return (
    <PriceSlide>
      <CountPrice>
        <label>
          Від
          <input type="text" value={valueMin} onChange={handleInputChangeMin} />
          {width < 1440 && 'грн'}
        </label>
        <label>
          Дo
          <input type="text" value={valueMax} onChange={handleInputChangeMax} />
          грн
        </label>
      </CountPrice>
      <Box sx={{ width: '100%' }}>
        <Slider
          sx={SliderRange}
          getAriaLabel={() => 'Price range'}
          value={[valueMin, valueMax]}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={min}
          max={max}
          getAriaValueText={valueText}
        />
      </Box>
    </PriceSlide>
  );
}
