import { memo } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { List, UnList } from './SubcategoriesComponent.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../redux/category/slice';
import { selectCategory } from '../../redux/category/selectors';

export default memo(function SubcategoriesComponent({
  category,
  subCategory,
  path,
}) {
  const dispatch = useDispatch();
  const categoryProduct = useSelector(selectCategory);

  return (
    <UnList>
      {subCategory ? (
        subCategory.map(({ id, link, nameList, img }) => {
          return (
            <List
              key={id}
              onClick={() =>
                dispatch(
                  changeCategory({
                    ...categoryProduct,
                    subCategory: { en: link, ua: nameList },
                  })
                )
              }
            >
              <Link to={`/${category}/${link}`}>
                <img src={img} alt={nameList} />
                <p>{nameList}</p>
              </Link>
            </List>
          );
        })
      ) : (
        <Navigate to={path} />
      )}
    </UnList>
  );
});
