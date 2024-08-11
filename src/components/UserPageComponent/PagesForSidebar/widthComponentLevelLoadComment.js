export function widthComponentLevelLoadComment(rating) {
  console.log(rating);
  switch (rating) {
    case 1:
      return '25%';
    case 2:
      return '50%';
    case 3:
      return '75%';
    default:
      return '100%';
  }
}
