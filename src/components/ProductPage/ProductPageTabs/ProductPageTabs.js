import React, { useState } from 'react';
import { Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TabListStyles } from '../material-styles/productPage-material-styles';
import AboutProduct from './AboutProduct/AboutProduct';
import SimilarProductList from './SimilarProducts/SimilarProductList';
import { SimilarProductsHeader } from './SimilarProducts/SimilarProductList.styled';

function ProductPageTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
        <AboutProduct />
        <SimilarProductsHeader>Схожі оголошення</SimilarProductsHeader>
        <SimilarProductList />
      </TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
    </TabContext>
  );
}

export default ProductPageTabs;
