import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { navigationList } from '../../data/navListData';
import TabPanelList from './TabPanelList';
import {
  BoxListStyles,
  Container,
  OpenList,
  TabListStyles,
} from './NavsSectionComponent.styled';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function NavsSectionList({ onCloseModal }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState([]);

  function openList(nameList, subCategoris) {
    setCategory(nameList);
    setSubcategory(subCategoris);
  }

  return (
    <Container onClick={onCloseModal}>
      <Box sx={BoxListStyles}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          sx={TabListStyles}
        >
          {navigationList.map(({ id, linkList, nameList, subCategoris }) => {
            return (
              <Tab
                className="hover-tab"
                key={id}
                label={nameList}
                onClick={() => {
                  openList(linkList, subCategoris);
                }}
                variant={'solid'}
                icon={<OpenList />}
                iconPosition="end"
                {...a11yProps({ id })}
              />
            );
          })}
        </Tabs>
        <TabPanelList
          subcategory={subcategory}
          value={value}
          category={category}
        />
      </Box>
    </Container>
  );
}

NavsSectionList.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
