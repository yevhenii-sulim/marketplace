import { SubNavList } from './NavsSectionComponent.styled';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import NavSubCategoriList from 'components/NavSubCategoriList/NavSubCategoriList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box display="flex" alignItems="center" height="100%">
          <Typography as="ul" sx={SubNavList}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

export default function TabPanelList({ subcategory, value, category }) {
  return (
    <TabPanel value={value} index={value}>
      <NavSubCategoriList category={category} subcategory={subcategory} />
    </TabPanel>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

TabPanelList.propTypes = {
  subcategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      linkList: PropTypes.string,
      nameList: PropTypes.string,
    })
  ),
  value: PropTypes.number.isRequired,
  category: PropTypes.string,
};
