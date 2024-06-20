export const formatDate = dateString => {
  const date = new Date(dateString);

  const newFormatDate = new Intl.DateTimeFormat('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);

  return newFormatDate;
};
