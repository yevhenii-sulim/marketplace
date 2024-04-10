import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ContainerForBreadcrumbs } from './BreadcrumbsComponent.styled';

function BreadcrumbsComponent() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Головна сторінка
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Електроніка
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
    >
      Навушники
    </Link>,
    <Typography key="3" color="text.primary">
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
