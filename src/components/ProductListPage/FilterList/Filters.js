import FilterColor from 'components/Filters/FilterColor/FilterColor';
import FilterPrice from 'components/Filters/FilterPrice/FilterPrice';
import FilterSex from 'components/Filters/FilterSex/FilterSex';
import FilterSize from 'components/Filters/FilterSize/FilterSize';
import FilterState from 'components/Filters/FilterState/FilterState';
import { FilterList } from './Filters.styled';
import { memo } from 'react';

function Filters({ getMaxValue, getMinValue }) {
  const getColorList = color => {};
  const getStateList = state => {};
  const getSizesList = size => {};
  const getSexList = sex => {};
  return (
    <form>
      <FilterList>
        <FilterPrice getMaxValue={getMaxValue} getMinValue={getMinValue} />
        <FilterSex getSexList={getSexList} />
        <FilterSize getSizesList={getSizesList} />
        <FilterColor getColorList={getColorList} />
        <FilterState getStateList={getStateList} />
      </FilterList>
    </form>
  );
}
export default memo(Filters);
