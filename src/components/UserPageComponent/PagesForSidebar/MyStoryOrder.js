import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { selectMyUser } from '../../../redux/auth/selector';
import { addCommentFromStory } from '../../../redux/product/thunk';
import { selectorRating } from '../../../redux/rating/selector';
import Search from '../Search';
import SendComment from './SendComment';
import AboutProductStory from './AboutProductStory';
import Sort from 'components/Sort/Sort';
import MyStoryOrderSvg from 'SvgComponents/MyStoryOrderSvg/MyStoryOrderSvg';
import {
  DeleteAdd,
  Empty,
  Link,
  ListStoryOrder,
  WrapperBuy,
  WrapperStoryOrder,
  addProductButton,
  viewProductButton,
  Filter,
} from './PagesForSidebar.styled';
import { addNullRating, deleteRating } from '../../../redux/rating/slice';
const modalEnter = document.querySelector('#modal');

export default function MyStoryOrder({
  sortedProduct,
  setValueSort,
  setValue,
  value,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [idList, setIdList] = useState('');

  const dispatch = useDispatch();
  const rating = useSelector(selectorRating);
  const user = useSelector(selectMyUser);

  const purchasedGoods = user?.purchasedGoods ?? [];
  const handleSort = sort => {
    setValueSort(sort);
  };
  const navigate = useNavigate();

  function repeatOrder(id, category, subCategory) {
    navigate(`/${category.en}/${subCategory.en}/${id}`);
  }

  function onOpenModal(id) {
    dispatch(addNullRating());
    setIsOpen(true);
    setIdList(id);
  }

  function onCloseModal() {
    setIsOpen(false);
    dispatch(deleteRating());
  }

  function onSend(evt, id, rating) {
    evt.preventDefault();
    const fullRating = () =>
      rating.reduce((acc, item) => {
        acc += item;
        return acc;
      }, 0);
    const middleRating = fullRating() / (rating.length - 1);
    dispatch(
      addCommentFromStory({
        comment: evt.target.elements.comment.value,
        rating: middleRating,
        id: id,
      })
    );
  }
  return (
    <div>
      {purchasedGoods.length === 0 ? (
        <Empty>
          <MyStoryOrderSvg />
          <p>Зробіть ваше переше замовлення</p>
          <Link to="/">Перейти до товарів</Link>
        </Empty>
      ) : (
        <>
          <Filter>
            <Search value={value} setValue={setValue} />
            <Sort
              name="sort"
              placeholder="Сортувати за"
              handleSort={handleSort}
            />
          </Filter>
          <WrapperStoryOrder>
            {sortedProduct.map(
              (
                {
                  _id,
                  status,
                  createDate,
                  product: {
                    title,
                    price,
                    discountPrice,
                    img,
                    discount,
                    subCategory,
                    category,
                  },
                },
                index
              ) => {
                return (
                  <ListStoryOrder key={_id}>
                    <AboutProductStory
                      status={status}
                      title={title}
                      createDate={createDate}
                      price={price}
                      discountPrice={discountPrice}
                      number={index + 1}
                      img={img[0]}
                      discount={discount}
                    />
                    <WrapperBuy className="story">
                      <DeleteAdd className="story">
                        <Button
                          type="button"
                          sx={addProductButton}
                          onClick={() =>
                            repeatOrder(_id, category, subCategory)
                          }
                        >
                          Повторити замовлення
                        </Button>
                        <Button
                          type="button"
                          sx={viewProductButton}
                          onClick={() => onOpenModal(_id)}
                        >
                          Залишити відгук
                        </Button>
                      </DeleteAdd>
                    </WrapperBuy>
                  </ListStoryOrder>
                );
              }
            )}
          </WrapperStoryOrder>
          {isOpen &&
            createPortal(
              <SendComment
                onSend={evt => onSend(evt, idList, rating)}
                onCloseModal={onCloseModal}
              />,
              modalEnter
            )}
        </>
      )}
    </div>
  );
}
