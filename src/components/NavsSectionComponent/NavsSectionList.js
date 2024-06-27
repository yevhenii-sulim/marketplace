import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { toggleModal } from '../../redux/modalCatalog/slice';
import { navigationList } from '../../data/navListData';
import TabPanelList from './TabPanelList';
import {
  BoxListStyles,
  Container,
  OpenList,
  Pseudo,
  TabListStyles,
} from './NavsSectionComponent.styled';
import { changeCategory } from '../../redux/category/slice';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function NavsSectionList({ onCloseModal }) {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState([]);

  function onOpen(bool) {
    dispatch(toggleModal(bool));
  }

  function openList(nameList, subCategories) {
    setCategory(nameList);
    setSubcategory(subCategories);
  }

  return (
    <Container onClick={onCloseModal}>
      <Box sx={BoxListStyles}>
        <Pseudo>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            sx={TabListStyles}
          >
            {navigationList.map(({ id, linkList, nameList, subCategories }) => {
              return subCategories ? (
                <Tab
                  className="hover-tab"
                  key={id}
                  label={nameList}
                  onClick={() => {
                    openList(linkList, subCategories);
                    dispatch(
                      changeCategory({
                        category: { en: linkList, ua: nameList },
                      })
                    );
                  }}
                  variant={'solid'}
                  icon={<OpenList />}
                  iconPosition="end"
                  {...a11yProps({ id })}
                />
              ) : (
                <Tab
                  key={id}
                  className="hover-tab"
                  label={nameList}
                  onClick={() => {
                    navigate(linkList);
                    onOpen(false);
                    dispatch(
                      changeCategory({
                        category: { en: linkList, ua: nameList },
                      })
                    );
                  }}
                  variant={'solid'}
                  alignitems="flex-start"
                />
              );
            })}
          </Tabs>
        </Pseudo>
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
