import { useSelector } from 'react-redux';
import { selectFilters } from '../../../redux/product/selector';
import { Container } from './FilterSex.styled';

export default function FilterSex() {
  const sex = useSelector(selectFilters);
  console.log(sex);

  return <Container>FilterSex</Container>;
}
