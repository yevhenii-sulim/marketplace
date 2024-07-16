import { useSelector } from 'react-redux';
import { selectFilters } from '../../../redux/product/selector';
import { Container } from './FilterColor.styled';

export default function FilterColor({
  handleChange,
  setSubmitting,
  name,
  placeholder,
}) {
  const { colors } = useSelector(selectFilters);
  console.log(colors);

  return <Container></Container>;
}
