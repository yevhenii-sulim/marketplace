import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, UnList } from './SubcategorisComponent.styled';

export default function SubcategorisComponent() {
  const location = useLocation();

  return (
    <UnList>
      {location.state.map(({ id, link, nameList, img }) => {
        return (
          <List key={id}>
            <Link state={link} to={`${link}`}>
              <img src={img} alt={nameList} />
              <p>{nameList}</p>
            </Link>
          </List>
        );
      })}
    </UnList>
  );
}
