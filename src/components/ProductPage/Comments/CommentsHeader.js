import { FormControl, MenuItem, Select } from '@mui/material';
import {
  CommentSortBlock,
  DescriptionProductHeaderComments,
  NameHeader,
} from './CommentsHeater.styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { selectFilteredCommentsStyle } from '../material-styles/productPage-material-styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { productForProductPage } from '../../../redux/productPage/selectors';

export default function CommentsHeader() {
  const product = useSelector(productForProductPage);
  const [stateSelect] = useState('desc');
  // const dispatch = useDispatch();

  // console.log(stateSelect);

  // useEffect(() => {
  //   if (stateSelect === 'asc') {
  //     dispatch(sortedCommentsByASC(product));
  //   }
  // }, [stateSelect, dispatch, product]);
  return (
    <>
      {product.comments.length !== 0 && (
        <DescriptionProductHeaderComments>
          <NameHeader>Відгуки</NameHeader>
          <CommentSortBlock>
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={stateSelect}
                label="Age"
                IconComponent={KeyboardArrowDownIcon}
                sx={selectFilteredCommentsStyle}
                // onChange={event => setStateSelect(event.target.value)}
              >
                <MenuItem value={'desc'}>Від нових до старий</MenuItem>
                <MenuItem value={'asc'}>Від старих до нових</MenuItem>
                <MenuItem value={30}>Від нізкого рейтенгу</MenuItem>
                <MenuItem value={30}>Від високого рейтенгу рейтенгу</MenuItem>
              </Select>
            </FormControl>
          </CommentSortBlock>
        </DescriptionProductHeaderComments>
      )}
    </>
  );
}
