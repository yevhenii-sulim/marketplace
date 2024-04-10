import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  NavUlist,
  NavigationMenu,
  SubNavList,
} from './NavsSectionComponent.styled';
import { navigationList } from './navListData';
import NavsSectionComponent from './NavsSectionComponent';
import NavListElectronics from 'components/NavListProducts/NavListElectronics';

export default function NavsSectionList({ onCloseModal }) {
  const [listComponent, setlistComponent] = useState('');

  function openList(nameList) {
    setlistComponent(nameList);
  }

  return (
    <Container onClick={onCloseModal}>
      <NavigationMenu>
        <NavUlist>
          {navigationList.map(({ id, linkList, nameList }) => {
            return (
              <NavsSectionComponent
                openList={openList}
                linkList={linkList}
                nameList={nameList}
                key={id}
              />
            );
          })}
        </NavUlist>
        <SubNavList>
          {listComponent === 'clothes' ? (
            <button>clothes</button>
          ) : listComponent === 'electronics' ? (
            <NavListElectronics />
          ) : listComponent === 'furnitures' ? (
            <h3>furnitures</h3>
          ) : (
            <h4>nothing</h4>
          )}
        </SubNavList>
      </NavigationMenu>
    </Container>
  );
}
NavsSectionList.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
