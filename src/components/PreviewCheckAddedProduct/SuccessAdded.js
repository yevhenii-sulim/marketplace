import { useSelector } from 'react-redux';
import { selectMyUser } from '../../redux/auth/selector';
import SendedCommentSvg from 'SvgComponents/SendedComment/SendedCommentSvg';
import { Container, Link, SignSuccess } from './ViewAhead.styled';
import { selectorLink } from '../../redux/createLink/selector';

export default function SuccessAdded() {
  const user = useSelector(selectMyUser);
  const linkToProduct = useSelector(selectorLink);
  let thisProductId = null;
  function getLastSelfProduct() {
    if (!user) return;
    user.products.forEach((item, index) => {
      if (index === user.products.length - 1) {
        return (thisProductId = item._id);
      }
    });
  }

  getLastSelfProduct();
  return (
    <Container>
      <SignSuccess>
        <SendedCommentSvg />
        <p>Ваше оголошення опубліковане!</p>
      </SignSuccess>
      <Link to={`${linkToProduct}/${thisProductId}`}>
        Перейти до оголошення
      </Link>
    </Container>
  );
}
