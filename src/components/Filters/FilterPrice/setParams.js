export function setMinPriceFilterParam(setParams, num, max, params) {
  const colors = params.getAll('colors') ?? [];
  const sex = params.getAll('sex') ?? [];
  const states = params.getAll('states') ?? [];
  const sizes = params.getAll('sizes') ?? [];
  const sortField = params.getAll('sortField') ?? [];
  const sortOrder = params.getAll('sortOrder') ?? [];

  if (!!params.get('maxPrice')) {
    if (!Number.isNaN(num)) {
      setParams({
        colors,
        sizes,
        sex,
        minPrice: num < max ? num : max,
        maxPrice: max < num ? num : max,
        states,
        sortField,
        sortOrder,
      });
    } else {
      setParams({
        colors,
        sizes,
        sex,
        minPrice: 0,
        maxPrice: max,
        states,
        sortField,
        sortOrder,
      });
    }
  } else {
    if (!Number.isNaN(num)) {
      setParams({
        colors,
        sizes,
        sex,
        minPrice: num,
        states,
        sortField,
        sortOrder,
      });
    } else {
      setParams({
        colors,
        sizes,
        sex,
        minPrice: 0,
        states,
        sortField,
        sortOrder,
      });
    }
  }
}
export function setMaxPriceFilterParam(setParams, num, min, params) {
  const colors = params.getAll('colors') ?? [];
  const sex = params.getAll('sex') ?? [];
  const states = params.getAll('states') ?? [];
  const sizes = params.getAll('sizes') ?? [];
  const sortField = params.getAll('sortField') ?? [];
  const sortOrder = params.getAll('sortOrder') ?? [];
  if (!!params.get('minPrice')) {
    if (!Number.isNaN(num)) {
      setParams({
        colors,
        sizes,
        sex,
        minPrice: num >= min ? min : num,
        maxPrice: min <= num ? num : min,
        states,
        sortField,
        sortOrder,
      });
    } else {
      setParams({
        colors,
        sizes,
        sex,
        minPrice: min,
        maxPrice: 0,
        states,
        sortField,
        sortOrder,
      });
    }
  } else {
    if (!Number.isNaN(num)) {
      setParams({
        colors,
        sizes,
        sex,
        maxPrice: num,
        states,
        sortField,
        sortOrder,
      });
    } else {
      setParams({
        colors,
        sizes,
        sex,
        maxPrice: 0,
        states,
        sortField,
        sortOrder,
      });
    }
  }
}
