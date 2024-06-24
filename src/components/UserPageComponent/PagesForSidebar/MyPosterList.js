import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { togglePoster } from '../../../redux/myPoster/slice';
import PosterSvg from 'SvgComponents/PosterSVG/PosterSvg';
import Search from '../Search';
import Sort from 'components/ProductListPage/Sort';
import AboutPoductStory from './AboutPoductStory';
import { Empty } from './PagesForSidebar.styled';
import MessageSvg from 'SvgComponents/Message/MessageSvg';
import EyeSvg from 'SvgComponents/Eye/EyeSvg';
import {
  ActiveProduct,
  FeedBack,
  FeedBackSign,
  Filter,
  Link,
  ListStoryOrder,
  OpenOperation,
  Operation,
  OperationList,
  ToCreatePostLink,
  WrapperBuy,
  WrapperPoster,
} from './MyPoster.styled';
import DeleteSvg from 'SvgComponents/Delete/DeleteSvg';
import DeactiveSvg from 'SvgComponents/Deactive/DeactiveSvg';
import EditSvg from 'SvgComponents/Edit/EditSvg';
import { useRef } from 'react';
import { selectMyUser } from '../../../redux/auth/selector';

export default function MyPosterList({
  sortedProduct,
  setValueSort,
  valueSort,
  setValue,
  value,
}) {
  const dispatch = useDispatch();
  const user = useSelector(selectMyUser);

  const soldGoods = user?.soldGoods ?? [];
  const ref = useRef();
  function toCreatePost() {
    dispatch(togglePoster(true));
  }

  function handleSort(sort) {
    setValueSort(sort);
  }
  function openOperation(evt) {
    const activeIsOpen = ref.current.querySelector('.isOpen');

    if (activeIsOpen) {
      if (
        evt.target
          .closest('button')
          .nextElementSibling.classList.contains('isOpen')
      ) {
        evt.target
          .closest('button')
          .nextElementSibling.classList.remove('isOpen');
        return;
      }
      activeIsOpen.classList.remove('isOpen');
    }
    evt.target.closest('button').nextElementSibling.classList.add('isOpen');
  }
  return (
    <div>
      {soldGoods.length === 0 ? (
        <Empty>
          <PosterSvg />
          <p>Додайте ваше перше оголошення!</p>
          <Link
            to="/user_page/my_poster"
            onClick={toCreatePost}
            state={'Створити оголошення'}
          >
            Створити оголошення
          </Link>
        </Empty>
      ) : (
        <>
          <Filter>
            <Search value={value} setValue={setValue} />
            <Sort value={valueSort} handleSort={handleSort} />
            <ToCreatePostLink>
              <Link
                to="/user_page/my_poster"
                onClick={toCreatePost}
                state={'Створити оголошення'}
              >
                <AddOutlinedIcon sx={{ color: 'white' }} /> Додати
              </Link>
            </ToCreatePostLink>
          </Filter>
          <WrapperPoster ref={ref}>
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
                message,
                like,
                visit,
              }) => {
                return (
                  <ListStoryOrder key={_id} $state={Object.keys(state)}>
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
                    <WrapperBuy className="poster">
                      <Operation>
                        <OpenOperation type="button" onClick={openOperation}>
                          <MoreHorizOutlinedIcon />
                        </OpenOperation>
                        <OperationList>
                          <ActiveProduct type="button">
                            <EditSvg />
                            Редагувати
                          </ActiveProduct>
                          <ActiveProduct type="button">
                            <DeactiveSvg />
                            Деактивувати
                          </ActiveProduct>
                          <ActiveProduct type="button">
                            <DeleteSvg />
                            Видалити
                          </ActiveProduct>
                        </OperationList>
                      </Operation>
                      <FeedBack>
                        <FeedBackSign>
                          <span className="message">{message.length}</span>
                          <MessageSvg />
                        </FeedBackSign>
                        <FeedBackSign>
                          <span className="heart">{like}</span>
                          <FavoriteBorderOutlinedIcon />
                        </FeedBackSign>
                        <FeedBackSign>
                          <span className="heart">{visit}</span>
                          <EyeSvg />
                        </FeedBackSign>
                      </FeedBack>
                    </WrapperBuy>
                  </ListStoryOrder>
                );
              }
            )}
          </WrapperPoster>
        </>
      )}
    </div>
  );
}
