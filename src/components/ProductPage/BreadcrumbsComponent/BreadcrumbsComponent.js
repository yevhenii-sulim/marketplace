import React from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ContainerForBreadcrumbs, Link } from './BreadcrumbsComponent.styled';

function BreadcrumbsComponent() {
  const breadcrumbs = [
    <Link key="1" href="/marketplace">
      Головна сторінка
    </Link>,
    <Link key="2" href="/marketplace">
      Електроніка
    </Link>,
    <Link key="2" href="/marketplace/headphone">
      Навушники
    </Link>,
    <Typography key="3" href="/marketplace/headphone/36">
      Модель
    </Typography>,
  ];
  return (
    <ContainerForBreadcrumbs>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        {breadcrumbs}
      </Breadcrumbs>
    </ContainerForBreadcrumbs>
  );
}

export default BreadcrumbsComponent;
