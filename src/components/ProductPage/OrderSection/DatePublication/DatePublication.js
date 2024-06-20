import React from 'react';
import { DatePublicationContainer } from './DatePublication.styled';
import { formatDate } from 'data/formatDate';
import { useSelector } from 'react-redux';

function DatePublication() {
  const product = useSelector(state => state.productPage.product);

  return (
    <DatePublicationContainer>
      Опубліковано з {formatDate(product.createDate)}
    </DatePublicationContainer>
  );
}

export default DatePublication;
