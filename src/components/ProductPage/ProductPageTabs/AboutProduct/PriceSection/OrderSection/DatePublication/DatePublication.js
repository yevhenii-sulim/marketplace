import React from 'react';
import { DatePublicationContainer } from './DatePublication.styled';
import { useProductPageContext } from 'components/ProductPage/context/ProductPageProvider';
import { formatDate } from 'data/headphoneProduct';

function DatePublication() {
  const context = useProductPageContext();
  return (
    <DatePublicationContainer>
      Опубліковано з {formatDate(context.product.createDate)}
    </DatePublicationContainer>
  );
}

export default DatePublication;
