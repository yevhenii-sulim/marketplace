import React from 'react';
import PropTypes from 'prop-types';
import { List, OpenList } from './NavsSectionComponent.styled';

function isActive(evt) {
  document.querySelector('.active')?.classList.remove('active');
  evt.target.closest('li').classList.add('active');
}

export default function NavsSectionComponent({ openList, linkList, nameList }) {
  return (
    <List
      onClick={evt => {
        isActive(evt);
        openList(linkList);
      }}
    >
      <p>{nameList}</p>
      <OpenList />
    </List>
  );
}

NavsSectionComponent.propTypes = {
  openList: PropTypes.func.isRequired,
  linkList: PropTypes.string.isRequired,
  nameList: PropTypes.string.isRequired,
};
