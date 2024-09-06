import { useDispatch, useSelector } from 'react-redux';
import { addNullRating, addRating } from '../../../redux/rating/slice';
import { selectorRating } from '../../../redux/rating/selector';
import EmptyStarForFeedback from 'SvgComponents/Star/EmptyStarForFeedback';
import StarForFeedback from 'SvgComponents/Star/StarForFeedback';
import { SetedRating, StarList, Wrapper, Hint } from './Rating.styled';

const starEmptyList = new Array(5).fill(3);

export default function Rating({ title, number, bad, norm, good }) {
  const dispatch = useDispatch();
  const rating = useSelector(selectorRating);
  const starRatingList = new Array(rating[number]).fill(1);
  function leftRating(rating) {
    console.log(rating);
    dispatch(addRating(rating));
    setTimeout(() => dispatch(addNullRating()), 1000);
  }
  return (
    <Wrapper>
      <h3>{title}</h3>
      <StarList>
        {starEmptyList.map((_, index) => {
          return (
            <li key={index} onClick={() => leftRating(index + 1)}>
              <EmptyStarForFeedback />
            </li>
          );
        })}
        <SetedRating>
          {starRatingList.map((_, index) => (
            <li key={index}>
              <StarForFeedback />
            </li>
          ))}
        </SetedRating>
      </StarList>
      <Hint>
        <p>{bad}</p>
        <p>{norm}</p>
        <p>{good}</p>
      </Hint>
    </Wrapper>
  );
}
