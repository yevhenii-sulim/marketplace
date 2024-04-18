import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {
  BoxListStyles,
  Container,
  OpenList,
  TabListStyles,
} from './NavsSectionComponent.styled';
import { navigationList } from './navListData';
import { useState } from 'react';
import TabPanelList from './TabPanelList';

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
  const [listComponent, setlistComponent] = useState('');

  function openList(nameList) {
    setlistComponent(nameList);
  }
  console.log(listComponent);

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
          {navigationList.map(({ id, linkList, nameList }) => {
            return (
              <Tab
                className="hover-tab"
                key={id}
                label={nameList}
                onClick={() => {
                  openList(linkList);
                }}
                variant={'solid'}
                icon={<OpenList />}
                iconPosition="end"
                {...a11yProps({ id })}
              />
            );
          })}
        </Tabs>
        <TabPanelList listComponent={listComponent} value={value} />
      </Box>
    </Container>
  );
}

NavsSectionList.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
