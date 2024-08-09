import {
  CommentsContainer,
  CommentsContentBlock,
  CommentsDataBlock,
  CommentsIconBlock,
  CommentsNameAndDataBlock,
  CommentsRating,
  CommentsRatingThumbDown,
  CommentsRatingThumbQuantity,
  CommentsRatingThumbUp,
  CommentsTextBlock,
  DotsWrapper,
  IconDislikeWrapper,
  IconLikeWrapper,
  RatingNumber,
  WrapperForRating,
  CommentsAnswer,
} from './CommentItem.styled';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Rating } from '@mui/material';

export default function CommentItem({
  isNested,
  daysPassed,
  name,
  rating,
  body,
  like,
  userId,
  handlerLike,
  id,
  index,
  dislike,
  handlerDislike,
  toggleCommentForm,
}) {
  return (
    <>
      <CommentsContainer $isNested={isNested}>
        <CommentsIconBlock $isNested={isNested} />
        <CommentsContentBlock $isNested={isNested}>
          <CommentsNameAndDataBlock>
            {name}
            <CommentsDataBlock>{daysPassed} тому</CommentsDataBlock>
            <DotsWrapper>
              <MoreVertIcon />
            </DotsWrapper>
          </CommentsNameAndDataBlock>
          {rating ? (
            <WrapperForRating>
              <Rating name="half-rating" value={rating} readOnly size="small" />{' '}
              <RatingNumber>{rating}</RatingNumber>
            </WrapperForRating>
          ) : null}
          <CommentsTextBlock>{body}</CommentsTextBlock>
          <CommentsRating>
            <CommentsRatingThumbUp>
              <IconLikeWrapper checked={like.indexOf(userId) !== -1}>
                <ThumbUpOffAltIcon onClick={() => handlerLike(id, index)} />
              </IconLikeWrapper>
              <CommentsRatingThumbQuantity>
                {like.length}
              </CommentsRatingThumbQuantity>
            </CommentsRatingThumbUp>
            <CommentsRatingThumbDown>
              <IconDislikeWrapper checked={dislike.indexOf(userId) !== -1}>
                <ThumbDownOffAltIcon
                  onClick={() => handlerDislike(id, index)}
                />
              </IconDislikeWrapper>
              <CommentsRatingThumbQuantity>
                {dislike.length}
              </CommentsRatingThumbQuantity>
            </CommentsRatingThumbDown>
            <CommentsAnswer onClick={() => toggleCommentForm(id)}>
              Відповісти
            </CommentsAnswer>
          </CommentsRating>
        </CommentsContentBlock>
      </CommentsContainer>
    </>
  );
}
