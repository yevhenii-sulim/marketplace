export function widthComponentLevelLoadComment(rating) {
  switch (rating) {
    case 1:
      return '25%';
    case 2:
      return '50%';
    case 3:
      return '75%';
    case 4:
      return '100%';
    default:
      return '0%';
  }
}
