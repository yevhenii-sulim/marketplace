import ConfirmedSvg from 'SvgComponents/Confirmed/ConfirmedSvg';
import { Empty, Link } from './PostConfirmed.styled';

export default function PostConfirmed() {
  return (
    <Empty>
      <ConfirmedSvg />
      <h2>Вашу пошту підтверджено!</h2>
      <p> Тепер ви можете користуватися всіма можливостями нашого сайту.</p>
      <Link to="/">Перейти до товарів</Link>
    </Empty>
  );
}
