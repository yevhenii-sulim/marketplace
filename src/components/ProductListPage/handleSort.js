export function handleSort(valueSort, setParams, params) {
  const colors = params.getAll('colors') ?? [];
  const sex = params.getAll('sex') ?? [];
  const minPrice = params.getAll('minPrice') ?? [];
  const maxPrice = params.getAll('maxPrice') ?? [];
  const sizes = params.getAll('sizes') ?? [];
  const states = params.getAll('states') ?? [];
  const sortField = params.getAll('sortField') ?? [];
  const sortOrder = params.getAll('sortOrder') ?? [];
  switch (valueSort) {
    case 'Спочатку нові':
      return setParams({
        colors,
        sizes,
        sex,
        minPrice,
        maxPrice,
        states,
        sortField: 'createDate',
        sortOrder: 'desc',
      });
    case 'Найдешевші':
      return setParams({
        colors,
        sizes,
        sex,
        minPrice,
        maxPrice,
        states,
        sortField: 'price',
        sortOrder: 'asc',
      });
    case 'Найдорожчі':
      return setParams({
        colors,
        sizes,
        sex,
        minPrice,
        maxPrice,
        states,
        sortField: 'price',
        sortOrder: 'desc',
      });
    default:
      return setParams({
        colors,
        sizes,
        sex,
        minPrice,
        maxPrice,
        states,
        sortField,
        sortOrder,
      });
  }
}
