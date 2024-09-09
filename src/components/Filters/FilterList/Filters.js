import FilterColor from 'components/Filters/FilterColor/FilterColor';
import FilterPrice from 'components/Filters/FilterPrice/FilterPrice';
import FilterSex from 'components/Filters/FilterSex/FilterSex';
import FilterSize from 'components/Filters/FilterSize/FilterSize';
import FilterState from 'components/Filters/FilterState/FilterState';
import { FilterList } from './Filters.styled';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';

function Filters({ setPage }) {
  const location = useLocation();
  console.log(location.pathname.includes('forFree'));

  return (
    <form>
      <FilterList>
        {!location.pathname.includes('forFree') && (
          <FilterPrice setPage={setPage} />
        )}

        <FilterSex setPage={setPage} />
        <FilterSize setPage={setPage} />
        <FilterColor setPage={setPage} />
        <FilterState setPage={setPage} />
      </FilterList>
    </form>
  );
}
export default memo(Filters);
