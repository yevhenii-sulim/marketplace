import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilters } from '../../../redux/product/selector';
import { WrapperFilterColor } from './FilterColor.styled';

export default function FilterColor() {
  const { colors } = useSelector(selectFilters);
  console.log(colors);

  return <WrapperFilterColor>FilterColor</WrapperFilterColor>;
}
