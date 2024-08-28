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

function ProductPageTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [showAccordion, setShowAccordion] = useState(true);
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767) {
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
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          [theme.breakpoints.down('xs')]: {
            borderBottom: 0,
          },
        }}
      >
        <Link
          to="/"
          style={{
            width: '95%',
            margin: '12px auto 0 auto',
            display: 'flex',
            alignItems: 'center',
            color: '#1f1f1f',
            fontFamily: 'Nunito Sans',
            fontSize: '16px',
          }}
        >
          <KeyboardArrowLeftIcon /> Каталог
        </Link>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          sx={TabListStyles}
        >
          <Tab label="Усе про товар" value="1" />
          <Tab label="Опис" value="2" />
          <Tab label="Коментарі до оголошення" value="3" />
        </TabList>
      </Box>
      <TabPanel value="1" sx={{ padding: '24px 0' }}>
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
