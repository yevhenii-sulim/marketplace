import { SubNavList } from './NavsSectionComponent.styled';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import NavListElectronics from 'components/NavListProducts/NavListElectronics';

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

export default function TabPanelList({ listComponent, value }) {
  return (
    <TabPanel value={value} index={value}>
      {listComponent === 'clothes' ? (
        <button>clothes</button>
      ) : listComponent === 'electronics' ? (
        <NavListElectronics />
      ) : listComponent === 'furnitures' ? (
        <h3>furnitures</h3>
      ) : (
        <button>all</button>
      )}
    </TabPanel>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
