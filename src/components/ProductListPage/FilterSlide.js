import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { CountPrice, PriceSlide, SliderRange } from './ProductListPage.styled';

function valuetext(value) {
  return `${value} грн`;
}

const minDistance = 10;

export default function FilterSlide({ min, max }) {
  const [value, setValue] = useState([min, max]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <PriceSlide>
      <CountPrice>
        <input type="text" value={min} onChange={handleChange} />
      </CountPrice>
      <Box sx={{ width: '100%' }}>
        <Slider
          sx={SliderRange}
          getAriaLabel={() => 'Price range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={min}
          max={max}
          getAriaValueText={valuetext}
        />
      </Box>
    </PriceSlide>
  );
}
