import { useSelector } from 'react-redux';
import { selectFilters } from '../../../redux/product/selector';
import { Container } from './FilterSize.styled';

export default function FilterSize() {
  const { sizes } = useSelector(selectFilters);
  console.log(sizes);

  return <Container>FilterSize</Container>;
}
