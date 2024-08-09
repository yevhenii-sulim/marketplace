import {
  CommentsExpandedWrapper,
  CommentsExpandedButton,
} from './CommentItem/CommentItem.styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function CommentsExpanded({
  handlerExpandedComments,
  parent,
  commentsExpanded,
  commentsLeft,
  textForButton,
  mainComments,
  toggleAnimationArrow,
}) {
  return (
    commentsLeft > 0 && (
      <CommentsExpandedWrapper $mainComments={mainComments}>
        <CommentsExpandedButton
          onClick={() => handlerExpandedComments(parent)}
          $mainComments={mainComments}
        >
          <KeyboardArrowDownIcon
            className={`arrow-icon ${
              commentsExpanded.has(parent) ||
              (toggleAnimationArrow && mainComments)
                ? 'down'
                : 'up'
            }`}
          />{' '}
          {!commentsLeft ? null : (
            <span
              className={`count_comments ${
                commentsExpanded.has(parent) ? 'hidden' : 'show'
              }`}
            >
              {commentsLeft}
            </span>
          )}{' '}
          <span style={{ marginLeft: '5px' }}>{textForButton}</span>
        </CommentsExpandedButton>{' '}
      </CommentsExpandedWrapper>
    )
  );
}
