import { useSelector } from 'react-redux';
import { selectFilters } from '../../../redux/product/selector';
import { Container } from './FilterState.styled';

export default function FilterState() {
  const { states } = useSelector(selectFilters);
  console.log(states);

  return <Container>FilterState</Container>;
}
