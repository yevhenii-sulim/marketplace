import FilterColor from 'components/Filters/FilterColor/FilterColor';
import FilterPrice from 'components/Filters/FilterPrice/FilterPrice';
import FilterSex from 'components/Filters/FilterSex/FilterSex';
import FilterSize from 'components/Filters/FilterSize/FilterSize';
import FilterState from 'components/Filters/FilterState/FilterState';
import { FilterList } from './Filters.styled';
import { memo } from 'react';

function Filters() {
  return (
    <form>
      <FilterList>
        <FilterPrice />
        <FilterSex />
        <FilterSize />
        <FilterColor />
        <FilterState />
      </FilterList>
    </form>
  );
}
export default memo(Filters);
