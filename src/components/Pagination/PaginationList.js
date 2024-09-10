import Pagination from 'react-js-pagination';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import css from './PaginationList.module.css';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { theme } from 'utils/theme';

function PaginationList({ handlePageChange, activePage, totalItemsCount }) {
  const { width } = useWindowDimensions();
  const amountPage = width >= parseInt(theme.breakPoints.mx) ? 5 : 3;
  const isDesktopWidth = width >= parseInt(theme.breakPoints.lg);

  return (
    <div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={1}
        totalItemsCount={totalItemsCount}
        firstPageText={<ArrowBackIosNewIcon />}
        lastPageText={<ArrowForwardIosOutlinedIcon />}
        pageRangeDisplayed={amountPage}
        onChange={handlePageChange}
        prevPageText={isDesktopWidth ? 'Попередня' : ''}
        nextPageText={isDesktopWidth ? 'Наступна' : ''}
        innerClass={css.pagination}
        activeClass={css.active}
        itemClassPrev={css.changeStatePrev}
        itemClassNext={css.changeStateNext}
        itemClassLast={css.hidden}
        itemClassFirst={css.hidden}
        itemClass={css.page}
      />
    </div>
  );
}

export default PaginationList;
