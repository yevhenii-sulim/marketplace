import React from 'react';
import { List } from './UserPageComponent.styled';
import { NavLink } from 'react-router-dom';

export default function SidebarListComponent({
  children,
  nameList,
  path,
  onClick,
}) {
  return (
    <List onClick={onClick}>
      <NavLink to={path} state={nameList}>
        {children}
        <span>{nameList}</span>
      </NavLink>
    </List>
  );
}
