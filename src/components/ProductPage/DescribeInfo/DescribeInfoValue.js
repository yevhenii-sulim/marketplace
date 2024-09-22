import { useSelector } from 'react-redux';
import { ParameterWrapper } from '../Comments/CommentItem/CommentItem.styled';
import {
  ColorCircle,
  ColorWrapper,
  DescribeInfoState,
  DescribeInfoStateItem,
  DescribeInfoStateWrapper,
} from './DescribeInfo.styled';

export default function DescribeInfoValue() {
  const { parameters } = useSelector(state => state.productPage.product);
  return (
    <DescribeInfoState>
      <DescribeInfoStateWrapper>
        {parameters.state && parameters.state !== '' ? (
          <DescribeInfoStateItem>
            Стан:
            <ParameterWrapper>{parameters.state}</ParameterWrapper>
          </DescribeInfoStateItem>
        ) : null}
        {parameters.size && parameters.size.length > 0 ? (
          <DescribeInfoStateItem>
            Розмір:
            <div
              style={{
                display: 'flex',
                height: ' 100%',
                fontWeight: 400,
                marginLeft: '5px',
                fontSize: '18px',
                marginTop: '2px',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              {parameters.size.map((el, i) => {
                if (i === parameters.size.length - 1)
                  return el.replace('EU ', '');
                if (i === 0) return el + ', ';

                return el.replace('EU ', '') + ', ';
              })}
            </div>
          </DescribeInfoStateItem>
        ) : null}
        {parameters.brand &&
        parameters.brand !== '' &&
        parameters.brand !== '-' ? (
          <DescribeInfoStateItem>
            Бренд:
            <ParameterWrapper>{parameters.brand}</ParameterWrapper>
          </DescribeInfoStateItem>
        ) : null}
        {parameters.color && parameters.color.length > 0 ? (
          <DescribeInfoStateItem>
            Колір:
            <ParameterWrapper>
              {parameters.color.map(el => (
                <ColorWrapper key={el._id}>
                  <span>{el.colorName}</span>
                  <ColorCircle $color={el.color} />
                </ColorWrapper>
              ))}
            </ParameterWrapper>
          </DescribeInfoStateItem>
        ) : null}
      </DescribeInfoStateWrapper>
    </DescribeInfoState>
  );
}
