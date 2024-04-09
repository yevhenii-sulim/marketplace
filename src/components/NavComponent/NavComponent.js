import React from 'react';
import PropTypes from 'prop-types';
import { Container, List, NavList } from './NavComponent.styled';
import { Link } from 'react-router-dom';

export default function NavComponent({ onCloseModal }) {
  return (
    <Container onClick={onCloseModal}>
      <NavList>
        <List>
          <Link to="product_page">Product</Link>
        </List>
      </NavList>
    </Container>
  );
}

NavComponent.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
