import FilterColor from 'components/Filters/FilterColor/FilterColor';
import FilterPrice from 'components/Filters/FilterPrice/FilterPrice';
import FilterSex from 'components/Filters/FilterSex/FilterSex';
import FilterSize from 'components/Filters/FilterSize/FilterSize';
import FilterState from 'components/Filters/FilterState/FilterState';
import { FilterList } from './FilterList.styled';

export default function Filters({ getMaxValue, getMinValue }) {
  return (
    <FilterList>
      <FilterPrice getMaxValue={getMaxValue} getMinValue={getMinValue} />
      <FilterSex />
      <FilterSize />
      <FilterColor />
      <FilterState />
    </FilterList>
  );
}
