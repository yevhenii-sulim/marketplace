import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';
import { selectMyUser } from '../../../redux/auth/selector';
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
import Sort from 'components/ProductListPage/Sort';
import { useState } from 'react';
import Search from '../Search';
import { useNavigate } from 'react-router-dom';
import SendComment from './SendComment';
import { createPortal } from 'react-dom';
import { addCommentFromStory } from '../../../redux/product/thunk';
import AboutPoductStory from './AboutPoductStory';
import MyStoryOrderSvg from 'SvgComponents/MyStoryOrderSvg/MyStoryOrderSvg';
const modalEnter = document.querySelector('#modal');
export default function MyStoryOrder({
  sortedProduct,
  setValueSort,
  valueSort,
  setValue,
  value,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectMyUser);

  const purchasedGoods = user?.purchasedGoods ?? [];
  const handleSort = sort => {
    setValueSort(sort);
  };
  const navigate = useNavigate();

  function repeatOrder(id, category, subCategory) {
    navigate(`/${category.en}/${subCategory.en}/${id}`);
  }

  function onOpenModal() {
    setIsOpen(true);
  }

  function onCloseModal() {
    setIsOpen(false);
  }

  function onSend(evt, id) {
    evt.preventDefault();
    dispatch(
      addCommentFromStory({
        comment: evt.target.elements.comment.value,
        id: id,
      })
    );
    setIsOpen(false);
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
            <Sort value={valueSort} handleSort={handleSort} />
          </Filter>
          <WrapperStoryOrder>
            {sortedProduct.map(
              ({
                _id,
                state,
                title,
                createDate,
                price,
                discountPrice,
                img,
                number,
                discount,
                category,
                subCategory,
              }) => {
                return (
                  <ListStoryOrder key={_id}>
                    <AboutPoductStory
                      state={state}
                      title={title}
                      createDate={createDate}
                      price={price}
                      discountPrice={discountPrice}
                      img={img}
                      number={number}
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
                          onClick={onOpenModal}
                        >
                          Залишити відгук
                        </Button>
                      </DeleteAdd>
                    </WrapperBuy>
                    {isOpen &&
                      createPortal(
                        <SendComment
                          onSend={evt => onSend(evt, _id)}
                          onCloseModal={onCloseModal}
                        />,
                        modalEnter
                      )}
                  </ListStoryOrder>
                );
              }
            )}
          </WrapperStoryOrder>
        </>
      )}
    </div>
  );
}
