// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import useWindowDimensions from 'hooks/useWindowDimensions';

import { selectFiltersPrice } from '../../../redux/product/selector';
import { CountPrice, PriceSlide, SliderRange } from './FilterPrice.styled';
import { useSearchParams } from 'react-router-dom';
import { debounce } from 'lodash';

// function useDebounce(cb, delay) {
//   const [debounceValue, setDebounceValue] = useState(cb);
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebounceValue(cb);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [cb, delay]);
//   return debounceValue;
// }

export default function FilterPrice() {
  const [params, setParams] = useSearchParams('');
  const price = useSelector(selectFiltersPrice) ?? { max: 0, min: 0 };
  // const [value, setValue] = useState([
  //   +params.get('minPrice'),
  //   +params.get('maxPrice'),
  // ]);
  const { width } = useWindowDimensions();
  console.log(price);

  const colors = params.getAll('colors') ?? [];
  const sex = params.getAll('sex') ?? [];
  const states = params.getAll('states') ?? [];
  const sizes = params.getAll('sizes') ?? [];

  const getMaxValue = debounce(num => {
    if (Number(params.get('minPrice'))) {
      setParams({
        colors,
        sizes,
        sex,
        minPrice: parseInt(params.get('minPrice')),
        maxPrice: num,
        states,
      });
      return;
    }
    setParams({
      colors,
      sizes,
      sex,
      minPrice: price.min,
      maxPrice: num,
      states,
    });
  }, 1500);

  const getMinValue = debounce(num => {
    if (Number(params.get('maxPrice'))) {
      setParams({
        colors,
        sizes,
        sex,
        minPrice: num,
        maxPrice: parseInt(params.get('maxPrice')),
        states,
      });
      return;
    }
    setParams({
      colors,
      sizes,
      sex,
      minPrice: num,
      maxPrice: price.max,
      states,
    });
  }, 1500);

  // console.log(params.get('minPrice'), params.getAll('maxPrice'));

  // useEffect(() => {
  //   if (
  //     params.getAll('minPrice').length !== 0 &&
  //     params.getAll('maxPrice').length !== 0
  //   ) {
  //     setValue([
  //       parseInt(...params.getAll('minPrice')),
  //       parseInt(...params.getAll('maxPrice')),
  //     ]);
  //     return;
  //   }
  //   setValue([price.min, price.max]);
  // }, [params, price.max, price.min]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    console.log(newValue);

    if (activeThumb === 0) {
      // setValue([Math.min(newValue[0]), value[1]]);
      Math.min(newValue[0]);
    } else {
      // setValue([value[0], Math.max(newValue[1])]);
      getMaxValue(Math.min(newValue[1]));
    }
  };

  const handleInputChange = event => {
    if (event.target.name === 'min') {
      // setValue([parseInt(event.target.value) || 0, value[1]]);
      getMinValue(parseInt(event.target.value));
    } else {
      // setValue([value[0], parseInt(event.target.value) || 0]);
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
            value={parseInt(params.get('minPrice') ?? price.min)}
            onChange={handleInputChange}
            name="min"
          />
          {width < 1440 && 'грн'}
        </label>
        <label>
          Дo
          <input
            type="text"
            value={parseInt(params.get('maxPrice') ?? price.max)}
            onChange={handleInputChange}
            name="max"
          />
          грн
        </label>
      </CountPrice>
      <Box sx={{ width: '100%' }}>
        <Slider
          sx={SliderRange}
          value={[+params.get('minPrice'), +params.get('maxPrice')]}
          onChange={handleChange}
          disableSwap
          min={price.min}
          max={price.max}
        />
      </Box>
    </PriceSlide>
  );
}

// function useDebounce(cb, delay) {
//   const [debounceValue, setDebounceValue] = useState(cb);
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebounceValue(cb);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [cb, delay]);
//   return debounceValue;
// }
