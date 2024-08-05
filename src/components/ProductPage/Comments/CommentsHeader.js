import { FormControl, MenuItem, Select } from '@mui/material';
import {
  CommentSortBlock,
  DescriptionProductHeaderComments,
  NameHeader,
} from './CommentsHeater.styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function CommentsHeader() {
  return (
    <DescriptionProductHeaderComments>
      <NameHeader>Відгуки</NameHeader>
      <CommentSortBlock>
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Age"
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              boxShadow: 'none',
              color: 'black',
              '.MuiSelect-outlined': {
                padding: 0,
              },
              '.MuiOutlinedInput-notchedOutline': {
                border: 'none',
                borderBottom: 'none',
                borderRadius: '0px',
              },
              '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                {
                  borderBottom: 'none',
                },
              '.MuiSvgIcon-root': {
                color: 'black',
              },
            }}
          >
            <MenuItem value={10}>Від нових до старий</MenuItem>
            <MenuItem value={20}>Від старих до нових</MenuItem>
            <MenuItem value={30}>Від нізкого рейтенгу</MenuItem>
            <MenuItem value={30}>Від високого рейтенгу рейтенгу</MenuItem>
          </Select>
        </FormControl>
      </CommentSortBlock>
    </DescriptionProductHeaderComments>
  );
}
