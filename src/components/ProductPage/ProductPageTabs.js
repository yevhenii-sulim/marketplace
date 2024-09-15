import React, { useEffect, useState } from 'react';
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TabListStyles } from './material-styles/productPage-material-styles';
import AboutProduct from './AboutProduct/AboutProduct';
import SimilarProductList from './SimilarProducts/SimilarProductList';
import { SimilarProductsHeader } from './SimilarProducts/SimilarProductList.styled';
import { theme } from './theme/theme';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import { WrapperMobileCatalogOnProductPage } from './BreadcrumbsComponent/BreadcrumbsComponent.styled';

function ProductPageTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [showAccordion, setShowAccordion] = useState(true);
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowAccordion(false);
      } else {
        setShowAccordion(true);
      }
      setSizeWindow(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <TabContext value={value}>
      <WrapperMobileCatalogOnProductPage>
        <Link
          to="/"
          style={{
            width: '95%',
            margin: '0 auto 0 0',
            display: 'flex',
            alignItems: 'center',
            color: '#1f1f1f',
            fontFamily: 'Nunito Sans',
            fontSize: '16px',
          }}
        >
          <KeyboardArrowLeftIcon /> Каталог
        </Link>
      </WrapperMobileCatalogOnProductPage>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          opacity: 0,
          height: 0,
          [theme.breakpoints.down('xs')]: {
            borderBottom: 0,
          },
        }}
      >
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          sx={TabListStyles}
        >
          <Tab label="Усе про товар" value="1" sx={{ opacity: 0, height: 0 }} />
        </TabList>
      </Box>
      <TabPanel value="1" sx={{ padding: '12px 0' }}>
        <AboutProduct showAccordion={showAccordion} />
        <SimilarProductsHeader>Схожі оголошення</SimilarProductsHeader>
        <SimilarProductList
          showAccordion={showAccordion}
          sizeWindow={sizeWindow}
        />
      </TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
    </TabContext>
  );
}

export default ProductPageTabs;
