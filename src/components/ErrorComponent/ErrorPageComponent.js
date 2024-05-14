import React from 'react';
import {
  Container,
  ContainerError,
  Images,
  Solution,
} from './ErrorPageComponent.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ErrorImage from 'SvgComponents/ErrorSVG/ErrorImage';
import ErrorText from 'SvgComponents/ErrorSVG/ErrorText';
import { Link } from 'react-router-dom';

export default function ErrorPageComponent() {
  return (
    <ContainerError>
      <Header />
      <Container>
        <Images>
          <ErrorText />
          <ErrorImage />
          <p>
            Йой... Здається такої сторінки не існує або вона була переміщена.
            <br />
            Але ми спробуєм вам допомогти!
          </p>
        </Images>
        <Solution>
          <Link to="/">Повернутися назад</Link>
          <Link to="/">Часті питання</Link>
          <Link to="/">Зв'язатися з підтримкою</Link>
        </Solution>
      </Container>
      <Footer />
    </ContainerError>
  );
}
