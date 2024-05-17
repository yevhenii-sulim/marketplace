import { memo } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { List, UnList } from './SubcategoriesComponent.styled';

export default memo(function SubcategoriesComponent({ subCategory, path }) {
  return (
    <UnList>
      {subCategory ? (
        subCategory.map(({ id, link, nameList, img }) => {
          return (
            <List key={id}>
              <Link state={nameList} to={`${link}`}>
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