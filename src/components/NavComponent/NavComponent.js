import React from 'react';
import PropTypes from 'prop-types';
import { Container, List, NavList } from './NavComponent.styled';

export default function NavComponent({ onCloseModal }) {
  return (
    <Container onClick={onCloseModal}>
      <NavList>
        <List>dfsgdghdfhgfhdhdfg</List>
      </NavList>
    </Container>
  );
}

NavComponent.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
