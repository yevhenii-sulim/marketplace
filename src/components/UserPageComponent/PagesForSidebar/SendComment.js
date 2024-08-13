import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

import { selectorRating } from '../../../redux/rating/selector';
import {
  Action,
  Backdrop,
  Order,
  WrapperModal,
} from './PagesForSidebar.styled';
import Rating from 'components/RatingComponents/Rating/Rating';
import CommentComponent from 'components/RatingComponents/Comment/CommentComponent';

export default function SendComment({ onSend, onCloseModal }) {
  const rating = useSelector(selectorRating);
  function oncloseByClickOutside(evt) {
    if (evt.currentTarget !== evt.target) return;
    onCloseModal(false);
  }

  return (
    <Backdrop onMouseDown={oncloseByClickOutside}>
      <WrapperModal>
        <Action>
          <Order $rating={rating.length}>
            <div></div>
          </Order>
          <button
            type="button"
            className="close-modal"
            onClick={() => onCloseModal(false)}
          >
            <CloseIcon />
          </button>
        </Action>
        {rating.length === 1 && (
          <Rating
            title="Як швидко з Вами зв’язалися?"
            number={0}
            bad="Дуже довго"
            norm="Середньо"
            good="Дуже швидко"
          />
        )}
        {rating.length === 2 && (
          <Rating
            title="Як швидко товар було відправлено?"
            number={1}
            bad="Дуже довго"
            norm="Середньо"
            good="Дуже швидко"
          />
        )}
        {rating.length === 3 && (
          <Rating
            title="Чи була комплектація товару такою як зазначена на сайті?"
            number={2}
            bad="Не задовільно"
            norm="Задовільно"
            good="Повністю задовільно"
          />
        )}
        {rating.length === 4 && <CommentComponent onSend={onSend} />}
      </WrapperModal>
    </Backdrop>
  );
}
