import Paginations from 'react-js-pagination';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import css from './PaginationList.module.css';
const view = window.innerWidth;

const amountPage = view >= 500 ? 5 : 2;

function PaginationList({ handlePageChange, activePage, totalItemsCount }) {
  return (
    <div>
      <Paginations
        activePage={activePage}
        itemsCountPerPage={1}
        totalItemsCount={totalItemsCount}
        firstPageText={<ArrowBackIosNewIcon />}
        lastPageText={<ArrowForwardIosOutlinedIcon />}
        pageRangeDisplayed={amountPage}
        onChange={handlePageChange}
        prevPageText={'Попередня'}
        nextPageText={'Наступна'}
        hideDisabled="true"
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
