import React from 'react';
import {
  Back,
  Container,
  ContainerError,
  Images,
  Solution,
  Text,
} from './ErrorPageComponent.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ErrorImage from 'SvgComponents/ErrorSVG/ErrorImage';
import ErrorText from 'SvgComponents/ErrorSVG/ErrorText';

export default function ErrorPageComponent() {
  return (
    <ContainerError>
      <Header />
      <Container>
        <Images>
          <ErrorText />
          <ErrorImage />
        </Images>
        <Text>
          <p>
            Йой... Здається такої сторінки не існує або вона була переміщена.
          </p>
        </Text>
        <Solution>
          <Back to="/">Повернутися назад</Back>
        </Solution>
      </Container>
      <Footer />
    </ContainerError>
  );
}
