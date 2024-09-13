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
    case 'Недавно додані':
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
    case 'Від дешевого':
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
    case 'Від дорожчого':
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
    case 'Рекомендовані':
      return setParams({
        colors,
        sizes,
        sex,
        minPrice,
        maxPrice,
        states,
        sortField: [],
        sortOrder: [],
        discount: true,
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
