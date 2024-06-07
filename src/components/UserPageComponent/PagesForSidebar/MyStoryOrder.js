import StoryContentSvg from 'SvgComponents/StoryOrderSvg/StoryContentSvg';
import { ContainerOrders, Empty, Link } from './PagesForSidebar.styled';

export default function MyStoryOrder() {
  return (
    <ContainerOrders>
      <Empty>
        <StoryContentSvg />
        <p>Тут буде вся інформація про ваші покупки</p>
        <Link to="/">Перейти до товарів</Link>
      </Empty>
    </ContainerOrders>
  );
}
