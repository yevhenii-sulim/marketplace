import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { togglePoster } from '../../../../redux/myPoster/slice';
import { selectMyUser } from '../../../../redux/auth/selector';
import {
  changeStatusProduct,
  deleteProduct,
} from '../../../../redux/product/thunk';
import PosterSvg from 'SvgComponents/PosterSVG/PosterSvg';
import EyeSvg from 'SvgComponents/Eye/EyeSvg';
import DeleteSvg from 'SvgComponents/Delete/DeleteSvg';
import DeactivateSvg from 'SvgComponents/Deactivate/DeactivateSvg';
import Search from '../Search/Search';
import AboutProductStory from '../AboutProductStory';
import { Empty } from '../PagesForSidebar.styled';
import Sort from 'components/Sort/Sort';
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

export default function MyPosterList({
  sortedProduct,
  setValueSort,
  setValue,
  value,
  deleteProductFromDisplay,
}) {
  const dispatch = useDispatch();
  const user = useSelector(selectMyUser);
  console.log(user);

  const [myProduct, setMyProduct] = useState([]);

  const products = user?.products;

  useEffect(() => {
    if (!products) return;
    setMyProduct(products);
  }, [products]);

  const ref = useRef();
  function toCreatePost() {
    dispatch(togglePoster(true));
  }
  function deleteProductFn(id) {
    dispatch(deleteProduct(id));
    deleteProductFromDisplay(id);
  }
  function changeStatusProductFn(id, status) {
    dispatch(changeStatusProduct(id, status));
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
      {myProduct.length === 0 ? (
        <Empty>
          <PosterSvg />
          <p>Додайте ваше перше оголошення!</p>
          <Link to="/user_page/my_poster" onClick={toCreatePost}>
            Створити оголошення
          </Link>
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
                status,
                title,
                createDate,
                price,
                discountPrice,
                img,
                count,
                discount,
                visit,
              }) => {
                return (
                  <ListStoryOrder key={_id}>
                    <AboutProductStory
                      status={Object.values(status)}
                      $state={Object.keys(status)}
                      title={title}
                      createDate={createDate}
                      price={price}
                      discountPrice={discountPrice}
                      img={img}
                      number={count}
                      discount={discount}
                    />
                    <WrapperBuy className="poster">
                      <Operation>
                        <OpenOperation type="button" onClick={openOperation}>
                          <MoreHorizOutlinedIcon />
                        </OpenOperation>
                        <OperationList>
                          <ActiveProduct
                            type="button"
                            onClick={() =>
                              changeStatusProductFn({
                                id: _id,
                                status: {
                                  status: 'Деактивовене',
                                },
                              })
                            }
                          >
                            <DeactivateSvg />
                            Деактивувати
                          </ActiveProduct>
                          <ActiveProduct
                            type="button"
                            onClick={() => deleteProductFn(_id)}
                          >
                            <DeleteSvg />
                            Видалити
                          </ActiveProduct>
                        </OperationList>
                      </Operation>
                      <FeedBack>
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
