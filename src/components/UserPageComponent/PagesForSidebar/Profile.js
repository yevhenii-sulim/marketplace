import React from 'react';
import { ContainerFavorite, Empty, Link } from './PagesForSidebar.styled';
import FavoriteSvg from 'SvgComponents/FavoriteSVG/FavoriteSvg';

export default function Profile() {
  return (
    <ContainerFavorite>
      <Empty>
        <FavoriteSvg />
        <p>Тут ви побачите список ваших обраних товарів.</p>
        <Link to="/">Перейти до товарів</Link>
      </Empty>
    </ContainerFavorite>
  );
}
